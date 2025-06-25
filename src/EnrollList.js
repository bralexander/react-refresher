import "./EnrollList.css";
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';


// Columns for the detail list.
const columns = [
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
  },
    {
    field: 'program',
    headerName: 'Program',
    width: 150,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 150,
  },
//   {
//     key: "fname",
//     name: "First Name",
//     fieldName: "fname",
//     minWidth: 90,
//     maxWidth: 200,
//     isResizable: true,
//   },
//   {
//     key: "lname",
//     name: "Last Name",
//     fieldName: "lname",
//     minWidth: 90,
//     maxWidth: 200,
//     isResizable: true,
//   },
//   {
//     key: "program",
//     name: "Program",
//     fieldName: "program",
//     minWidth: 60,
//     maxWidth: 200,
//     isResizable: true,
//   },
//   {
//     key: "email",
//     name: "Email",
//     fieldName: "email",
//     minWidth: 130,
//     maxWidth: 200,
//     isResizable: true,
//   },
];

// Test items
let items = [];
for (let i = 1; i < 5; i++) {
  items.push({
    id: i,
    firstName: "FirstName " + i,
    lastName: "LastName " + i,
    program: "UG",
    email: "Email " + i,
  });
}

const EnrollList = () => {
  return (
    <>
        <DataGrid className="enrollList" columns={columns} rows={items}></DataGrid>
    </>
  );
};
export default EnrollList;