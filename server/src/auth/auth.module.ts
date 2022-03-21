import { forwardRef, Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { MongooseModule } from '@nestjs/mongoose'
import { PassportModule } from '@nestjs/passport'

import { AuthService } from '@auth/auth.service'
import { UsersModule } from '@users/users.module'
import { User, UserSchema } from '@users/users.schema'

@Module({
	imports: [
		MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
		PassportModule.register({ defaultStrategy: 'jwt', session: false }),
		JwtModule.register({
			secret: process.env.JWT_SECRET,
			signOptions: { expiresIn: '1y' }
		}),
		forwardRef(() => UsersModule) //* 순환 참조 모듈 설정
	],
	providers: [AuthService],
	exports: [AuthService]
})
export class AuthModule {}
