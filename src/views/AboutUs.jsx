import StaySafeBot from '../components/bot/ChatBot';
import HTMLFlipBook from '../components/CodeOfConduct/CodeOfConduct';

const AboutUsPage = () => {
	return (
		<div className='flex justify-center pt-10'>
			<div className=''>
				<HTMLFlipBook />
			</div>
			<StaySafeBot />
		</div>
	);
};

export default AboutUsPage;
