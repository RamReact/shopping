import React, { useMemo } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from 'material-react-table';

// Example data type for the table
type Person = {
  name: {
    firstName: string;
    lastName: string;
  };
  address: string;
  city: string;
  state: string;
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
      accessorKey: 'city',
      header: 'Safety Data Sheets (SDS)',
      size: 150,
    },
  ], []);

  // Create the table instance
  const table = useMaterialReactTable({
    columns,
    data,
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
