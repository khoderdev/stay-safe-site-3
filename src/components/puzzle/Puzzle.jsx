import MyCrossword from 'mycrossword';
import 'mycrossword/dist/index.css';
import data from './data.js'

export default function Puzzle() {
  return (
    <div className='flex items-center justify-center p-6 sm:p-16'>
      <MyCrossword id="crossword-1" data={data} onCellFocus={MyCrossword} />
    </div>
  );
}