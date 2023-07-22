import { z } from 'zod'

export const loginSchema = z.object({
	email: z
		.string()
		.nonempty('Введите Вашу почту')
		.email('Неправильно введена почта. Пример почты: "example@expample.com"')
		.refine((value) => !/\s/.test(value), 'Почта не должна содержать пробелы'),
	password: z
		.string()
		.nonempty('Введите пароль')
		.min(8, { message: 'Минимальная длинна пароля должна быть 8 символов' })
		.max(20)
		.refine((value) => !/\s/.test(value), 'Пароль не должен содержать пробелы')
})
