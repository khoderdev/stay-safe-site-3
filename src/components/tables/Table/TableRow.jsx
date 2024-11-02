const TableRow = ({ item, onClick }) => (
  <tr onClick={onClick} className="cursor-pointer">
    <td className="py-2 px-4 border-b">{item.bacterium}</td>
    <td className="py-2 px-4 border-b">{item.illness}</td>
    <td className="py-2 px-4 border-b">{item.onsetTime}</td>
    <td className="py-2 px-4 border-b">{item.symptoms}</td>
    <td className="py-2 px-4 border-b">{item.duration}</td>
    <td className="py-2 px-4 border-b">{item.foodSources}</td>
  </tr>
);

export default TableRow;
