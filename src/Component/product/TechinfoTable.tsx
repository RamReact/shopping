import React, { useMemo } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from 'material-react-table';
import { HiOutlineExternalLink } from "react-icons/hi";
// Example data type for the table
type Pdf = {
  name: string;
  link: string;
};

type Person = {
  product_id: string;
  colorName: string;
  upcnumber: string;
  pdf: Pdf[]; // Update the data type to include the pdf array
};

// TechInfoTable component
const TechInfoTable = ({ data }: { data: Person[] }) => {
  // Memoize the columns
  const columns = useMemo<MRT_ColumnDef<Person>[]>(() => [
    {
      accessorKey: 'product_id',
      header: 'SKU#',
      size: 150,
    },
    {
      accessorKey: 'colorName',
      header: 'Color',
      size: 150,
    },
    {
      accessorKey: 'upcnumber',
      header: 'UPC',
      size: 200,
    },
    {
      accessorKey: 'pdf',  // Render the PDF column with a custom cell renderer
      header: 'Safety Data Sheets (SDS)',
      size: 250,
      Cell: ({ cell }) => {
        // Access the pdf array
        const pdfArray = cell.getValue<Pdf[]>();
        return (
          <div className='tbl-pdf-con'>
            {pdfArray?.map((pdfItem, index) => (
              <div key={index}  className='tbl-pdflist'>
                <a href={`${process.env.REACT_APP_BaseURL}${pdfItem.link}`} target="_blank" rel="noopener noreferrer" className='tblpdflist-link'>
                  {pdfItem.name}
                </a>
                <HiOutlineExternalLink className='tbl-pdflist-icon'/>
              </div>
            ))}
          </div>
        );
      }
    },
  ], []);

  // Create the table instance
  const table = useMaterialReactTable({
    columns,
    data,
    enableSorting: true, // Disable sorting for all columns
    enableHiding: false, // Disable column hiding
    enableGlobalFilter: true, // Enable global filter (search)
    enableColumnActions:false,
    enableDensityToggle:false,
    enableFullScreenToggle:false,
    enableColumnFilters:false,
  });

  return <MaterialReactTable table={table} />;
};

// TechInformation component
const TechInformation = ({ data }: { data: Person[] }) => {
  console.log(data);
  return (
    <div>
      <TechInfoTable data={data} />
    </div>
  );
};

export default TechInformation;
