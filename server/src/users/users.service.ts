import { Injectable, UnauthorizedException } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import * as bcrypt from 'bcrypt'
import { Model } from 'mongoose'

import { UserRequestDto } from '@users/dto/users.request.dto'
import { User } from '@users/users.schema'

@Injectable()
export class UsersService {
	constructor(
		@InjectModel(User.name) private readonly userModel: Model<User>
	) {}

	//* 모든 유저 조회 service
	async getAllUser() {
		const allUser = await this.userModel.find()
		const readOnlyUsers = allUser.map(user => user.readOnlyData)
		return readOnlyUsers
	}

	//* 회원가입 service
	async signUp(body: UserRequestDto) {
		const { email, nickname, password, birthday } = body
		const isUserExist = await Promise.all([
			this.userModel.findOne({ email }),
			this.userModel.findOne({ nickname })
		])

		const userValid = isUserExist.map(v => v !== null)
		const userValidNumber = userValid.indexOf(true)

		//* signup validation
		if (userValidNumber >= 0) {
			const exostError = (message: string) => {
				throw new UnauthorizedException(
					`해당하는 ${message}은 이미 존재합니다.`
				)
			}
			switch (userValidNumber) {
				case 0:
					exostError('이메일')
				case 1:
					exostError('닉네임')
			}
		}

		const hashedPassword = await bcrypt.hash(password, 10)
		const newUserData = { email, nickname, password: hashedPassword, birthday }
		const newUser = await this.userModel.create(newUserData)

		return newUser.readOnlyData
	}
}
