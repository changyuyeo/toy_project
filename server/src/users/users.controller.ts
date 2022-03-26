import {
	Body,
	Controller,
	Get,
	Post,
	Res,
	UseGuards,
	UseInterceptors
} from '@nestjs/common'
import { Response } from 'express'

import { LoginRequestDto } from '@users/dto/login.request.dto'
import { JwtAuthGuard } from '@users/jwt/jwt.guard'
import { OnlyPrivateInterceptor } from '@common/interceptors/only-private.interceptor'
import { SignUpRequestDto } from '@users/dto/signup.request.dto'
import { CurrentUser } from '@users/decorators/user.decorator'
import { User } from '@users/users.schema'
import { UsersService } from '@users/users.service'

@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	//* 현재 회원 정보 조회 api
	@Get('me')
	@UseGuards(JwtAuthGuard)
	@UseInterceptors(OnlyPrivateInterceptor)
	getCurrentUser(@CurrentUser() user: User) {
		return user.readOnlyData
	}

	//* 모든 회원 정보 조회 api
	@Get('all')
	getAllUser() {
		return this.usersService.getAllUser()
	}

	//* 회원가입 api
	@Post('signup')
	async signup(
		@Body() body: SignUpRequestDto,
		@Res({ passthrough: true }) response: Response
	) {
		const { access_token, user } = await this.usersService.signUp(body)
		response.cookie('access_token', access_token, { httpOnly: true })
		return user
	}

	//* 로그인 api
	@Post('login')
	async login(
		@Body() body: LoginRequestDto,
		@Res({ passthrough: true }) response: Response
	) {
		const { access_token, user } = await this.usersService.jwtLogIn(body)
		response.cookie('access_token', access_token, { httpOnly: true })
		return user
	}

	//* 로그아웃 api
	@Post('logout')
	async logOut(@Res({ passthrough: true }) response: Response) {
		response.clearCookie('access_token')
	}
}
