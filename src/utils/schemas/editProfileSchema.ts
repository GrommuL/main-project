import { User } from '@/types/User'
import { ZodType, z } from 'zod'

export const editProfileSchema: ZodType<
	Pick<User, 'email' | 'firstName' | 'lastName'>
> = z.object({
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
		.refine((value) => !/\s/.test(value), 'Почта не должна содержать пробелы')
})
