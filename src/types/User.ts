export type User = {
	firstName: string
	lastName: string
	email: string
	avatar: string
	password: string
	confirmPassword: string
	acceptTerms: boolean
	accountRole: AccountRoleType
}

type AccountRoleType = 'customer' | 'freelancer'
export type UserInfo = {
	accessToken: string
	user: User | null
}
