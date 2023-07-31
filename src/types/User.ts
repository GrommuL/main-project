export type User = {
	firstName: string
	lastName: string
	email: string
	avatar?: string
	about?: string
	password: string
	confirmPassword: string
	acceptTerms: boolean
	accountRole: AccountRoleType
}

export type AccountRoleType = 'customer' | 'freelancer'

export type UserInfo = {
	accessToken: string
	user: User | null
}
export type AuthUser = {
	isAuth: boolean
	user: User | null
}
