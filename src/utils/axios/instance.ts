import axios from 'axios'
import Cookies from 'js-cookie'

export const instance = axios.create({
	baseURL: import.meta.env.VITE_APP_BASE_URL as string,
	timeout: 1000,
	headers: { 'Content-Type': 'application/json' },
	withCredentials: true
})

instance.interceptors.request.use((config): any => {
	const accessToken = Cookies.get('accesToken')

	if (config.headers && accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`

		return config
	}
	return config
})
