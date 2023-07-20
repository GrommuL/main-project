import { User } from '@/types/User'
import { ZodType, z } from 'zod'

export const registerSchema: ZodType<User> = z
	.object({
		firstName: z
			.string()
			.nonempty('Введите Ваше имя')
			.min(2, { message: 'Имя должно состоять минимум из двух символов' })
			.max(50)
			.refine((value) => !/\s/.test(value), 'Имя не должно содержать пробелы'),
		lastName: z
			.string()
			.nonempty('Введите Вашу фамилию')
			.min(2, { message: 'Фамилия должна состоять минимум из двух символов' })
			.max(50)
			.refine(
				(value) => !/\s/.test(value),
				'Фамилия не должна содержать пробелы'
			),
		email: z
			.string()
			.nonempty('Введите Вашу почту')
			.email('Неправильно введена почта. Пример почты: "example@expample.com"')
			.refine(
				(value) => !/\s/.test(value),
				'Почта не должна содержать пробелы'
			),
		password: z
			.string()
			.nonempty('Введите пароль')
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
			.max(20)
			.refine(
				(value) => !/\s/.test(value),
				'Пароль не должен содержать пробелы'
			),
		confirmPassword: z.string().nonempty('Введите пароль повторно'),
		acceptTerms: z.literal(true),
		accountRole: z.union([z.literal('customer'), z.literal('freelancer')])
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: 'Пароль не совпадает',
		path: ['confirmPassword']
	})
