import MyCrossword from 'mycrossword';
import 'mycrossword/dist/index.css';
import data from './data.js';
import './styles.css';

export default function Puzzle() {
	return (
		<div className='sm:pb-20 p-4 md:px-16'>
			<MyCrossword id='crossword-1' data={data} onCellFocus={MyCrossword} />
		</div>
	);
}
