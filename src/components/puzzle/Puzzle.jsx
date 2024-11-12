import MyCrossword from 'mycrossword';
import 'mycrossword/dist/index.css';
import data from './data.js';
import './styles.css';

export default function Puzzle() {
	return (
		<div className='p-10'>
			<MyCrossword id='crossword-1' data={data} onCellFocus={MyCrossword} />
		</div>
	);
}
