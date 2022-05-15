import { Module, NestModule } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import mongoose from 'mongoose'

import { AppController } from '@src/app.controller'
import { AppService } from '@src/app.service'
import { AuthModule } from '@auth/auth.module'
import { UsersModule } from '@users/users.module'

@Module({
	imports: [
		ConfigModule.forRoot({ isGlobal: true }),
		MongooseModule.forRoot(process.env.MONGODB_URI),
		UsersModule,
		AuthModule
	],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule implements NestModule {
	//* 개발 모드 분기처리
	private readonly isDev: boolean = process.env.MODE === 'dev' ? true : false
	configure() {
		mongoose.set('debug', this.isDev)
	}
}
