import { forwardRef, Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { AuthModule } from '@auth/auth.module'
import { UsersController } from '@users/users.controller'
import { UsersService } from '@users/users.service'
import { User, UserSchema } from '@users/users.schema'

@Module({
	imports: [
		MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
		forwardRef(() => AuthModule) //* 순환 참조 모듈 설정
	],
	controllers: [UsersController],
	providers: [UsersService],
	exports: [UsersService]
})
export class UsersModule {}
