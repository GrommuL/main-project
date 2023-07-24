type BehaviorType = 'auto' | 'instant' | 'smooth'

export const useScrollToTop = () => {
	const goToTop = (behavior: BehaviorType = 'auto') => {
		window.scrollTo({
			top: 0,
			behavior: behavior
		})
	}
	return { goToTop }
}
