




















import { useState } from 'react';
import { SERVER_URL } from '../constants';
import { Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
const EditCar = ({data,updateCar}) => {



  const [open, setOpen] = useState(false);
  const [car,setCar] = useState({
   brand: data.brand,
   model: data.model,
   color: data.color,
   year: data.year,
   price: data.price
  });
/////////////////////////////////////////
  const handleClickOpen =()=>{
    setOpen(true);
   }
   const handleClickClose =()=>{
    
    setOpen(false);
   }

   const handleChange = (event)=>{
    setCar({...car,[event.target.name]:event.target.value});
   }
                                  
   const handleSave = async () => {
     updateCar(car, SERVER_URL + 'api/v1/car/' + data.id);
    handleClickClose();
  };
///////////////////////////////////////////
      return (
        <div>
        <IconButton onClick={handleClickOpen}>
          <EditIcon/>
          </IconButton>
        <Dialog open={open} onClose={handleClickClose}>
          <DialogTitle>Edit Car</DialogTitle>
          <DialogContent >
            <input placeholder="Brand" name="brand" value={car.brand} onChange={handleChange} /><br />
            <input placeholder="Model" name="model" value={car.model} onChange={handleChange} /><br />
            <input placeholder="Color" name="color" value={car.color} onChange={handleChange} /><br />
            <input placeholder="Year" name="year" value={car.year} onChange={handleChange} /><br />
            <input placeholder="Price" name="price" value={car.price} onChange={handleChange} /><br />
            <DialogActions>
              <button onClick={handleClickClose}>Cancel</button>
              <button onClick={handleSave}>Confirm</button>
            </DialogActions>
          </DialogContent>
        </Dialog>
      </div>
      );


}
export default EditCar