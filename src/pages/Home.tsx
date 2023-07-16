import {
	BestFreelancerSection,
	FreelancerSearchSection,
	HowItWorksSection
} from '@/components/screens'

export const Home = () => {
	return (
		<main>
			<FreelancerSearchSection />
			<BestFreelancerSection />
			<HowItWorksSection />
		</main>
	)
}
