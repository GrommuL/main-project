import axios from 'axios'

export const instance = axios.create({
	baseURL: import.meta.env.VITE_APP_BASE_URL as string,
	timeout: 1000,
	headers: { 'Content-Type': 'application/json' }
})

// instance.interceptors.request.use(config =>{
// 	const accessToken = Cookies.get('accesToken')

// 	if(config.headers && accessToken){
// 		config.headers.Authorization = `Bearer ${accessToken}`

// 		return config
// 	}
// })
