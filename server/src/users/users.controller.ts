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

import { LoginRequestDto } from '@auth/dto/login.request.dto'
import { JwtAuthGuard } from '@auth/jwt/jwt.guard'
import { AuthService } from '@auth/auth.service'
import { OnlyPrivateInterceptor } from '@common/interceptors/only-private.interceptor'
import { UserRequestDto } from '@users/dto/users.request.dto'
import { CurrentUser } from '@users/decorators/user.decorator'
import { User } from '@users/users.schema'
import { UsersService } from '@users/users.service'

@Controller('users')
export class UsersController {
	constructor(
		private readonly usersService: UsersService,
		private readonly authService: AuthService
	) {}

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
	async signup(@Body() body: UserRequestDto) {
		return await this.usersService.signUp(body)
	}

	//* 로그인 api
	@Post('login')
	async login(
		@Body() body: LoginRequestDto,
		@Res({ passthrough: true }) response: Response
	) {
		const { access_token, user } = await this.authService.jwtLogIn(body)
		response.cookie('jwt', access_token, { httpOnly: true })
		return user
	}

	//* 로그아웃 api
	@Post('logout')
	async logOut(@Res({ passthrough: true }) response: Response) {
		response.clearCookie('jwt')
	}
}
