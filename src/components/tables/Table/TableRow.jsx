const TableRow = ({ item, onClick }) => (
  <tr onClick={onClick} className="cursor-pointer">
    <td className="py-2 px-4 border-b">{item.pathogen}</td>
    <td className="py-2 px-4 border-b">{item.illness}</td>
    <td className="py-2 px-4 border-b">{item.symptoms}</td>
    <td className="py-2 px-4 border-b">{item.onsetTimeDuration}</td>
    <td className="py-2 px-4 border-b">{item.prevention}</td>
    <td className="py-2 px-4 border-b">{item.causes}</td>
    <td className="py-2 px-4 border-b">{item.comments}</td>
  </tr>
);

export default TableRow;
