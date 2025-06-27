import "./EnrollList.css";
import { DataGrid } from '@mui/x-data-grid';
import { useEffect} from "react";



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
];

// Test items

let items = []
const EnrollList = (props) => {
// const [items, setItems] = useState([])
    useEffect(() => {
        // const curItemKey = Object.keys(props.studentData).length === 0;
        const curItemKey = props.studentData.id
        if (curItemKey){
            items = [...items, props.studentData];
            // setItems(items => [...items, props.studentData]);
            console.log("i", items)
            props.setStudentData({});
        }
     } , [props]);
  return (
    <>
        <DataGrid className="enrollList" columns={columns} rows={items}></DataGrid>
    </>
  );
};
export default EnrollList;