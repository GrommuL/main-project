export type User = {
	id: number
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
	id: string
	label: string
	image: string
}
