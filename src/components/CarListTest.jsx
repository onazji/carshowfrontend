import { useEffect, useState } from "react"
import {SERVER_URL} from '../constants.jsx'
import { DataGrid } from '@mui/x-data-grid';
import Snackbar from '@mui/material/Snackbar';
import AddCar from "./AddCar.jsx";








const CarList = () => {
  
  const [cars, setCars] = useState([]);
  const [open,setOpen] = useState(false);


  //Adding a new Car 
const addCar = async (car)=>{
  try {
    const response = await fetch(SERVER_URL + 'api/v1/car',{'method':'POST', 
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(car)});
    if (!response.ok) {
      throw new Error('Something went wrong!');
        
                      }
                       await fetchData();
                      
    
  } catch (error) {
    console.error(error);
  }
  
  }

  useEffect(() => {
  
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch(SERVER_URL+'api/v1/car/all');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      setCars(result);
    } catch (error) {
      console.error('Error fetching car data:', error);
    }
  }

  const onDelClick = async (url) => {
    if(window.confirm("Are you sure to delete ❌ car ? ")){
          try {
              const response = await fetch(url, { method: 'DELETE' });
      
              if (!response.ok) {
                throw new Error('Network response was not ok');
                                }
              await fetchData();
                setOpen(true)
      
              } catch (error) {
              console.error(error);
                      }
            }
    }
  

    const columns = 
[
{field: 'brand', headerName: 'Brand', width: 200, color:'primary'},
{field: 'model', headerName: 'Model', width: 200},
{field: 'color', headerName: 'Color', width: 200},
{field: 'year', headerName: 'Year', width: 150},
{field: 'price', headerName: 'Price', width: 150},
{

  headerName: '',
  sortable: false,
  filterable: false,
  renderCell: (params) => (
    <button onClick={() => onDelClick(SERVER_URL + 'api/v1/car/' + params.row.id)}>
      Delete
    </button>
  ),
}


];

  

return (
  <>
  <AddCar addCar={addCar} />
 <div style={{height: 500, width:"100%"}}>
 
 <DataGrid  rows={cars} 
 columns={columns}
 disableRowSelectionOnClick={true}
  getRowId={row =>row.id} />
  <Snackbar 
    open={open}
    autoHideDuration={2000}
    onClose={()=> setOpen(false
    )}
    message="Car deleted"
    sx={{
  width: 400,
  color: "secondary",
  //backgroundColor: "green", This doesn't work
  "& .MuiSnackbarContent-root": { backgroundColor: "red" }
}}
  />

 </div>
 </>
)

  
}

export default CarList