import MyCrossword from 'mycrossword';
import 'mycrossword/dist/index.css';
import data from './data.js';
import './styles.css';

export default function Puzzle() {
	return (
		<div className='w-full flex sm:pb-20 '>
			<div className='w-[50%] border p-4'>
				<h1 className='text-3xl font-semibold'>Game Storming</h1>
				<h2 className='text-2xl font-semibold'>
					Elevate your performance by aligning nutrition with your training. For
					athletes, every phase demands a precise balance of energy,
					macronutrients, and hydration. Properly fueling the body not only
					optimizes performance but also strengthens resilience, enhances
					recovery, and minimizes injury risk. Through strategic nutrition
					periodization —preseason, peak competition, recovery—, athletes can
					access personalized insights into nutrient timing, hydration, and
					energy requirements tailored to individual training loads. Take your
					training to the next level by booking a professional consultation.
				</h2>
				<h3>Think You Know Sports Nutrition? Prove It with This Puzzle!</h3>
			</div>
			<div className='border p-4'>
				<MyCrossword id='crossword-1' data={data} onCellFocus={MyCrossword} />
			</div>
		</div>
	);
}
