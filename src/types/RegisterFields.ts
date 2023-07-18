export type RegisterFields = {
	firstName: string
	lastName: string
	email: string
	password: string
	confirmPassword: string
	acceptTerms: boolean
	accountRole: AccountRoleType
}

type AccountRoleType = 'customer' | 'freelancer'
