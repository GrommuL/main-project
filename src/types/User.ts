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
	portfolio?: UserPortfolio[]
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

export type UserPortfolio = {
	label: string
	image: string
}
