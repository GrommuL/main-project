import { useState } from 'react'

export const useModal = () => {
	const [isOpen, setIsOpen] = useState(false)
	const handleOpenModal = () => {
		setIsOpen(true)
		document.body.style.overflow = 'hidden'
	}
	const handleCloseModal = () => {
		setIsOpen(false)
		document.body.style.overflow = 'auto'
	}
	return {
		isOpen,
		handleCloseModal,
		handleOpenModal
	}
}
