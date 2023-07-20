export type User = {
	firstName: string
	lastName: string
	email: string
	password: string
	confirmPassword: string
	acceptTerms: boolean
	accountRole: AccountRoleType
}

type AccountRoleType = 'customer' | 'freelancer'
export type UserInfo = {
	data: {
		accessToken: string
		user: User
	}
}