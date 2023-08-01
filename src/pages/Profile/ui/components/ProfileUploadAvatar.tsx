import { Heading } from '@/components/ui/heading'
import { UploadImageIcon } from '@/components/ui/icons'

export const ProfileUploadAvatar = () => {
	return (
		<div className='flex flex-col gap-[32px]'>
			<Heading
				title='Загрузка новой фотографии'
				description='Загрузите свою настоящую фотографию. Вы можете выбрать изображение в формате JPG, GIF или PNG.'
			/>
			<div className='flex flex-col items-center gap-[16px] w-full'>
				<div className='py-[32px] px-[24px] flex flex-col items-center justify-center gap-[24px] rounded-[16px] border border-dashed border-borderColor hover:border-primary transition min-w-[536px] min-h-[297px] cursor-pointer'>
					<UploadImageIcon />
					<span>Выберите файл</span>
				</div>
				<span className='text-[12px] text-center max-w-[340px]'>
					Если у вас возникают проблемы с загрузкой, попробуйте выбрать
					фотографию меньшего размера.
				</span>
			</div>
		</div>
	)
}
