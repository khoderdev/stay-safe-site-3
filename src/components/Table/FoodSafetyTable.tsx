import React, { useState, useMemo, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
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
import { fetchAllData, createData, updateData } from '../../indexedDbService';



export const FoodSafetyTable = <TValue,>({
  columns = [],
}: {
  columns: ColumnDef<FoodSafety, TValue>[];
}) => {
  const [tableData, setTableData] = useState<FoodSafety[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingData, setEditingData] = useState<Partial<FoodSafety> | null>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [colSizing, setColSizing] = useState<ColumnSizingState>([]);
  const [filterLetter, setFilterLetter] = useState<string>('');
  const [filterSearch, setFilterSearch] = useState<string>('');

  const floatingAnimation = {
    y: [0, -10, 0], // Move up and down by 10px
    transition: {
      duration: 3, // Duration of the floating animation
      repeat: Infinity, // Infinite repetition
      repeatType: 'loop', // Updated to a valid value
      ease: 'easeInOut',
    },
  };

  const generateRandomAnimation = () => {
    const yMovement = Math.floor(Math.random() * 20) - 10; // Random movement between -10px and 10px
    const xMovement = Math.floor(Math.random() * 20) - 10; // Random movement between -10px and 10px
    const duration = Math.random() * 2 + 4; // Random duration between 2 and 4 seconds

    return {
      x: [0, xMovement, 0], // Horizontal random float
      y: [0, yMovement, 0], // Vertical random float
      transition: {
        duration: duration,
        repeat: Infinity,
        repeatType: 'loop', // Updated to a valid value
        ease: 'easeInOut',
        delay: Math.random() * 2, // Random delay between 0 and 2 seconds
      },
    };
  };

  useEffect(() => {
    const loadData = async () => {
      const dataFromDB = await fetchAllData();
      const combinedData = [...initialData, ...dataFromDB];
      setTableData(combinedData);
    };

    loadData();
  }, []);

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

  const handleEdit = (app: FoodSafety, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setEditingData(app);
    setIsAddingNew(false);
    setIsModalOpen(true);
  };

  const handleAddNew = () => {
    setEditingData(null);
    setIsAddingNew(true);
    setIsModalOpen(true);
  };

  const handleToggleFilter = (letter: string) => {
    if (letter === filterLetter) {
      setFilterLetter('');
    } else {
      setFilterLetter(letter);
    }
  };

  const saveDataToDB = async (data: FoodSafety) => {
    if (isAddingNew) {
      const newData = await createData(data);
      setTableData((prevData) => [...prevData, newData]);
    } else if (editingData) {
      const updatedData = await updateData(data);
      setTableData((prevData) =>
        prevData.map((item) => (item.id === updatedData.id ? updatedData : item))
      );
    }
    setIsModalOpen(false);
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

    <div className="relative z-30 w-full h-screen overflow-">
      <motion.div
        className="absolute z- top-[-5px] left-[53dvw] w-[160px] h-[160px] lg:top-[-5px] lg:left-[53dvw] lg:w-[240px] lg:h-[240px] xl:top-[-5px] xl:left-[53dvw] xl:w-[370px] xl:h-[370px] bg-cover bg-center opacity-1"
        style={{ backgroundImage: "url('/images/petri3.png')" }}
        animate={generateRandomAnimation()}
      ></motion.div>

      <motion.div
        className="absolute z- top-[390px] right-64 w-[160px] h-[160px] lg:w-[240px] lg:h-[240px] xl:top-[390px] xl:right-64 xl:w-[370px] xl:h-[370px] bg-cover bg-center opacity-1"
        style={{ backgroundImage: "url('/images/petri2.png')" }}
        animate={generateRandomAnimation()}
      ></motion.div>

      <motion.div
        className="absolute bottom-[-5dvh] left-[50dvw] w-[160px] h-[160px] lg:left-[42dvw] lg:bottom-[-20dvh] lg:w-[240px]  lg:h-[240px] xl:bottom-[-16dvh] xl:left-[50dvw] xl:w-[370px] xl:h-[370px] bg-cover bg-center opacity-1"
        style={{ backgroundImage: "url('/images/petri1.png')" }}
        animate={generateRandomAnimation()}
      ></motion.div>

      <motion.div
        className="absolute !z-50 top-[-22dvh] right-28 w-[160px] h-[160px] lg:w-[240px] lg:h-[240px] xl:top-[-22dvh] xl:right-28 xl:w-[370px] xl:h-[370px] bg-cover bg-center opacity-1"
        style={{ backgroundImage: "url('/images/petri4.png')" }}
        animate={generateRandomAnimation()}
      ></motion.div>
      {/* Page Content */}
      <div className='relative flex flex-col sm:mt-24 rounded-md p-1 sm:px-8 w-full h-screen'>
        <div className='flex flex-col pt-4 mb-3 items-start pl-0 w-fit'>
          <h1 className='sm:text-6xl font-semibold dark:text-white-bg2 mb-2'>Foodborne Illness Checker</h1>
          <p className='text-2xl mb-4 dark:text-white-bg2'>Identify Symptoms, Uncover Causes, and Learn Prevention Strategies</p>
        </div>
        <AlphabetFilter
          onFilter={handleToggleFilter}
          onSearch={handleSearchFilter}
          onAddNew={handleAddNew}
        />

        <Table className=''>
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
                  className="border-dark border-b cursor-pointer hover:bg-[#e8f5f2] dark:hover:bg-black transition"
                  key={row.id}
                  onClick={(e) => handleEdit(row.original, e)}
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
                <TableCell colSpan={columns.length} className="h-96 text-center text-2xl">
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
          onSave={saveDataToDB}
        />
      </div>
    </div>

  );
};
