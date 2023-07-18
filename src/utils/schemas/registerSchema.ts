import { RegisterFields } from '@/types/RegisterFields'
import { ZodType, z } from 'zod'

export const registerSchema: ZodType<RegisterFields> = z
	.object({
		firstName: z
			.string()
			.min(2, { message: 'Имя должно состоять минимум из двух символов' })
			.max(50),
		lastName: z
			.string()
			.min(2, { message: 'Фамилия должна состоять минимум из двух символов' })
			.max(50),
		email: z
			.string()
			.email('Неправильно введена почта. Пример почты: "example@expample.com"'),
		password: z
			.string()
			.regex(
				new RegExp('.*[A-Z].*'),
				'Пароль должен содержать минимум одну заглавную букву'
			)
			.regex(
				new RegExp('.*\\d.*'),
				'Пароль должен содержать минимум одну цифру'
			)
			.regex(
				new RegExp('.*[!$#%].*'),
				'Пароль должен содержать минимум один символ из скобок (!$#%)'
			)
			.min(8, { message: 'Минимальная длинна пароля должна быть 8 символов' })
			.max(20),
		confirmPassword: z.string(),
		acceptTerms: z.literal(true),
		accountRole: z.union([z.literal('customer'), z.literal('freelancer')])
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: 'Пароль не совпадает',
		path: ['confirmPassword']
	})
