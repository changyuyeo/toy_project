import { Module } from '@nestjs/common'

import { AppController } from '@src/app.controller'
import { AppService } from '@src/app.service'
import { AuthModule } from '@auth/auth.module'
import { UsersModule } from '@users/users.module'

@Module({
	imports: [UsersModule, AuthModule],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {}
