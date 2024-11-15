// import React, { useState, useMemo, useCallback } from 'react';
// import {
//   ColumnDef,
//   ColumnSizingState,
//   flexRender,
//   getCoreRowModel,
//   useReactTable,
// } from "@tanstack/react-table";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "./table";
// import { ColumnResizer } from "./column-resizer";
// import { FoodSafety } from "./columns";
// import Modal from "./FormModal";
// import { truncateText } from "../../utils/utils";
// import { data as initialData } from "./data";
// import { AlphabetFilter } from './Filters';

// export const FoodSafetyTable = <TValue,>({
//   columns = [],
// }: {
//   columns: ColumnDef<FoodSafety, TValue>[];
// }) => {
//   const [tableData,] = useState<FoodSafety[]>(initialData);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [editingData, setEditingData] = useState<Partial<FoodSafety> | null>(null);
//   const [colSizing, setColSizing] = useState<ColumnSizingState>({});
//   const [filterLetter, setFilterLetter] = useState<string>('');
//   const [filterSearch, setFilterSearch] = useState<string>('');

//   const filteredData = useMemo(() => {
//     return tableData.filter((row) => {
//       const pathogen = String(row.pathogen).toUpperCase();
//       const matchesLetter = filterLetter ? pathogen.startsWith(filterLetter) : true;
//       const matchesSearch = filterSearch ? pathogen.includes(filterSearch.toUpperCase()) : true;
//       return matchesLetter && matchesSearch;
//     });
//   }, [filterLetter, filterSearch, tableData]);

//   const handleSearchFilter = (searchTerm: string) => {
//     setFilterSearch(searchTerm);
//   };

//   const handleEdit = (app: FoodSafety) => {
//     setEditingData(app);
//     setIsModalOpen(true);
//   };

//   const handleToggleFilter = (letter: string) => {
//     if (letter === filterLetter) {
//       setFilterLetter('');
//     } else {
//       setFilterLetter(letter);
//     }
//   };

//   const table = useReactTable({
//     data: filteredData,
//     columns: columns ?? [],
//     enableColumnResizing: true,
//     columnResizeMode: "onChange",
//     getCoreRowModel: getCoreRowModel(),
//     onColumnSizingChange: setColSizing,
//     state: {
//       columnSizing: colSizing,
//     },
//   });

//   return (
//     <div className="flex flex-col rounded-md bg-white dark:bg-grayish p-8 w-full">
//       <AlphabetFilter
//         onFilter={handleToggleFilter}
//         onSearch={handleSearchFilter}
//       />

//       <Table style={{ width: '100%' }}>
//         <TableHeader>
//           {table.getHeaderGroups().map((headerGroup) => (
//             <TableRow key={headerGroup.id}>
//               {headerGroup.headers.map((header) => (
//                 <TableHead
//                   key={header.id}
//                   className="relative border-dark border-b"
//                   style={{
//                     width: header.getSize(),
//                   }}
//                 >
//                   {header.isPlaceholder
//                     ? null
//                     : flexRender(
//                       header.column.columnDef.header,
//                       header.getContext()
//                     )}
//                   <ColumnResizer header={header} />
//                 </TableHead>
//               ))}
//             </TableRow>
//           ))}
//         </TableHeader>
//         <TableBody>
//           {table.getRowModel().rows.length ? (
//             table.getRowModel().rows.map((row) => (
//               <TableRow
//                 className="border-dark border-b cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition"
//                 key={row.id}
//                 onClick={() => handleEdit(row.original)}
//               >
//                 {row.getVisibleCells().map((cell) => {
//                   const columnId = cell.column.id;
//                   let cellValue = cell.getValue() as string;

//                   if (
//                     columnId === "signsSymptoms" ||
//                     columnId === "causes" ||
//                     columnId === "prevention" ||
//                     columnId === "comments"
//                   ) {
//                     if (typeof cellValue !== "string") {
//                       cellValue = String(cellValue);
//                     }
//                     cellValue = truncateText(cellValue);
//                   }

//                   return (
//                     <TableCell
//                       key={cell.id}
//                       style={{
//                         width: cell.column.getSize(),
//                         minWidth: cell.column.columnDef.minSize,
//                       }}
//                     >
//                       <span>{cellValue}</span>
//                     </TableCell>
//                   );
//                 })}
//               </TableRow>
//             ))
//           ) : (
//             <TableRow>
//               <TableCell colSpan={columns.length} className="h-24 text-center">
//                 No data.
//               </TableCell>
//             </TableRow>
//           )}
//         </TableBody>
//       </Table>

//       <Modal
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         initialData={editingData || {}}
//       />
//     </div>
//   );
// };

import React, { useState, useMemo } from 'react';
import {
  ColumnDef,
  ColumnSizingState,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./table";
import { ColumnResizer } from "./column-resizer";
import { FoodSafety } from "./columns";
import Modal from "./FormModal";
import { truncateText } from "../../utils/utils";
import { data as initialData } from "./data";
import { AlphabetFilter } from './Filters';

export const FoodSafetyTable = <TValue,>({
  columns = [],
}: {
  columns: ColumnDef<FoodSafety, TValue>[];
}) => {
  const [tableData, setTableData] = useState<FoodSafety[]>(initialData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingData, setEditingData] = useState<Partial<FoodSafety> | null>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [colSizing, setColSizing] = useState<ColumnSizingState>({});
  const [filterLetter, setFilterLetter] = useState<string>('');
  const [filterSearch, setFilterSearch] = useState<string>('');

  const filteredData = useMemo(() => {
    return tableData.filter((row) => {
      const pathogen = String(row.pathogen).toUpperCase();
      const matchesLetter = filterLetter ? pathogen.startsWith(filterLetter) : true;
      const matchesSearch = filterSearch ? pathogen.includes(filterSearch.toUpperCase()) : true;
      return matchesLetter && matchesSearch;
    });
  }, [filterLetter, filterSearch, tableData]);

  const handleSearchFilter = (searchTerm: string) => {
    setFilterSearch(searchTerm);
  };

  const handleEdit = (app: FoodSafety) => {
    setEditingData(app);
    setIsAddingNew(false); // Switch to edit mode
    setIsModalOpen(true);
  };

  const handleAddNew = () => {
    setEditingData(null);
    setIsAddingNew(true); // Switch to add new mode
    setIsModalOpen(true);
  };

  const handleToggleFilter = (letter: string) => {
    if (letter === filterLetter) {
      setFilterLetter('');
    } else {
      setFilterLetter(letter);
    }
  };

  const table = useReactTable({
    data: filteredData,
    columns: columns ?? [],
    enableColumnResizing: true,
    columnResizeMode: "onChange",
    getCoreRowModel: getCoreRowModel(),
    onColumnSizingChange: setColSizing,
    state: {
      columnSizing: colSizing,
    },
  });

  return (
    <div className="flex flex-col rounded-md bg-white dark:bg-grayish p-8 w-full">
      <AlphabetFilter
        onFilter={handleToggleFilter}
        onSearch={handleSearchFilter}
        onAddNew={handleAddNew} // Pass the handleAddNew function
      />

      <Table style={{ width: '100%' }}>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead
                  key={header.id}
                  className="relative border-dark border-b"
                  style={{
                    width: header.getSize(),
                  }}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  <ColumnResizer header={header} />
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                className="border-dark border-b cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                key={row.id}
                onClick={() => handleEdit(row.original)}
              >
                {row.getVisibleCells().map((cell) => {
                  const columnId = cell.column.id;
                  let cellValue = cell.getValue() as string;

                  if (
                    columnId === "signsSymptoms" ||
                    columnId === "causes" ||
                    columnId === "prevention" ||
                    columnId === "comments"
                  ) {
                    if (typeof cellValue !== "string") {
                      cellValue = String(cellValue);
                    }
                    cellValue = truncateText(cellValue);
                  }

                  return (
                    <TableCell
                      key={cell.id}
                      style={{
                        width: cell.column.getSize(),
                        minWidth: cell.column.columnDef.minSize,
                      }}
                    >
                      <span>{cellValue}</span>
                    </TableCell>
                  );
                })}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No data.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialData={isAddingNew ? {} : editingData || {}}
        isAddingNew={isAddingNew} 
      />
    </div>
  );
};
