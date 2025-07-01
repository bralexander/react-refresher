import "./EnrollList.css";

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import { useEffect, useState, useCallback, useMemo} from "react";



// Columns for the detail list.



const EnrollList = (props) => {
    const [items, setItems] = useState([])
    useEffect(() => {
        //const curItemExists = Object.keys(props.studentData).length === 0;
        const curItemExists = props.studentData.id
        if (curItemExists){
            //items = [...items, props.studentData];
            setItems(items => [...items, props.studentData]);
            props.setStudentData({});
        }
    // Execute deletion on the selected item.
        //if (props.action === "delete") {
    // filter the selected item
      //const deleteItem = items.filter(
        //(item) => item.id === props.selectedItemId
      //)[0];
      // Remove from the list
      //items = items.filter((item) => item !== deleteItem);
      // update seats
      //props.restoreSeats(deleteItem.program);
    //}
    }, [props]);
    // nested arrow function      >
    const deleteUser = useCallback((id) => 
        () => 
            {
        // setTimeout(()=>{
            setItems((prevItems) => prevItems.filter((row) => row.id !==id));
            // });
        },
    [],
    );

    const columns = useMemo(() => [
        {
          field: 'firstName',
          headerName: 'First name',
          width: 100,
        },
        {
          field: 'lastName',
          headerName: 'Last name',
          width: 100,
        },
          {
          field: 'program',
          headerName: 'Program',
          width: 80,
        },
        {
          field: 'email',
          headerName: 'Email',
          width: 70,
        },
        {
          field: 'edit',
              type: 'actions',
              headerName: 'Edit',
              width: 70,
              getActions: (props) => [
                <GridActionsCellItem
                  icon={<EditIcon />}
                  label="Delete"
                  onClick={console.log('edit')}
                />,
              ],
           },
          {
          field: 'delete',
              type: 'actions',
              headerName: 'Delete',
              width: 80,
              getActions: (props) => [
                <GridActionsCellItem
                  icon={<DeleteIcon />}
                  label="Delete"
                  onClick={deleteUser(props.id)}
                />,
              ],
          }
        ],      
    [deleteUser ]
    );


  return (
    <>
        <DataGrid className="enrollList" columns={columns} rows={items}></DataGrid>
    </>
  );
};
export default EnrollList;