import {
	BadRequestException,
	Injectable,
	UnauthorizedException
} from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { JwtService } from '@nestjs/jwt'
import * as bcrypt from 'bcrypt'
import { Model } from 'mongoose'

import { LoginRequestDto } from '@users/dto/login.request.dto'
import { SignUpRequestDto } from '@users/dto/signup.request.dto'
import { User } from '@users/users.schema'

@Injectable()
export class UsersService {
	constructor(
		@InjectModel(User.name) private readonly userModel: Model<User>,
		private jwtService: JwtService
	) {}

	//* 모든 유저 조회 service
	async getAllUser() {
		const allUser = await this.userModel.find()
		const readOnlyUsers = allUser.map(user => user.readOnlyData)
		return readOnlyUsers
	}

	//* 회원가입 service
	async signUp(body: SignUpRequestDto) {
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

		//* token 발급
		try {
			const token = await this.jwtService.signAsync(
				{ sub: newUser.id },
				{ secret: process.env.JWT_SECRET }
			)
			return { access_token: token, user: newUser.readOnlyData }
		} catch (error) {
			throw new BadRequestException(error.message)
		}
	}

	//* 로그인 service
	async jwtLogIn(data: LoginRequestDto) {
		const { email, password } = data

		//* email 검사
		const user = await this.userModel.findOne({ email })
		if (!user)
			throw new UnauthorizedException('이메일과 비밀번호를 확인해주세요.')

		//* password 검사
		const isPasswordValidated: boolean = await bcrypt.compare(
			password,
			user.password
		)
		if (!isPasswordValidated)
			throw new UnauthorizedException('이메일과 비밀번호를 확인해주세요.')

		//* token 발급
		try {
			const token = await this.jwtService.signAsync(
				{ sub: user.id },
				{ secret: process.env.JWT_SECRET }
			)
			return { access_token: token, user: user.readOnlyData }
		} catch (error) {
			throw new BadRequestException(error.message)
		}
	}
}
