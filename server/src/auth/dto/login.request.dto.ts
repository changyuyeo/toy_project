import { PickType } from '@nestjs/mapped-types'
import { User } from '@users/users.schema'

export class LoginRequest extends PickType(User, [
	'email',
	'password'
] as const) {}
