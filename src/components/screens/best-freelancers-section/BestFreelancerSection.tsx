import { useEffect } from 'react'
import { BestFreelancerPortfolioItem } from './ui'
import { useAppDispatch, useAppSelector } from '@/utils/hooks/redux'
import { getFreelancers } from '@/store/slices/usersSlice'
import axios, { AxiosResponse } from 'axios'
import { User } from '@/types/User'

export const BestFreelancerSection = () => {
	const dispatch = useAppDispatch()
	const users = useAppSelector((state) => state.users.users)
	const getAllUsers = async () => {
		try {
			const response: AxiosResponse<User[]> = await axios.get(
				'http://localhost:8080/users'
			)
			if (response.data) {
				dispatch(getFreelancers({ users: [...response.data] }))
			}
		} catch (error) {
			console.log(error)
		}
	}
	useEffect(() => {
		void getAllUsers()
	}, [])
	return (
		<section className='mb-[100px] pb-[32px]'>
			<div className='container'>
				<div className='flex flex-col gap-[40px]'>
					<h2 className='font-bold text-[48px] leading-[120%]'>
						Наши лучшие исполнители
					</h2>
					<div className='flex items-center gap-[32px] flex-wrap'>
						{users.map((user) => {
							if (user.portfolio?.length) {
								return <BestFreelancerPortfolioItem user={user} key={user.id} />
							}
						})}
					</div>
				</div>
			</div>
		</section>
	)
}
