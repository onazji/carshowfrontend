import { Box,Dialog,DialogTitle,DialogContent,DialogActions,Button } from '@mui/material';
import React, { useState } from 'react'

const AddCar = (props) => {
    const [open, setOpen] = useState(false);
    const [car,setCar] = useState({
     brand: '',
     model: '',
     color: '',
     year: '',
     price: ''
    });
   
    const handleClickOpen =()=>{
     setOpen(true);
    }
    const handleClickClose =()=>{
     setOpen(false);
    }
   
    const handleChange = (event)=>{
     setCar({...car,[event.target.name]:event.target.value});
    }
    const handleSave =()=> {
        props.addCar(car);
        handleClickClose();
      
       }
   
       return (
        <div>
           <Box   m={1}
      display="flex"
      justifyContent="center"
      alignItems="center"
      >
            <Button onClick={handleClickOpen} color="success" variant="contained"  sx={{height:40}}>
              New Car 🎁
            </Button>
            </Box>
            <Dialog open={open} onClose={handleClickClose}>
                <DialogTitle> Addd New Car 🚘</DialogTitle>
                  <DialogContent>
                      <input placeholder="Brand" name="brand" value={car.brand}  onChange={handleChange}/><br/>
                      <input placeholder="Model" name="model" value={car.model}  onChange={handleChange}/><br/>
                      <input placeholder="color" name="color" value={car.color}  onChange={handleChange}/><br/>
                      <input placeholder="Year" name="year" value={car.year}  onChange={handleChange}/><br/>
                      <input placeholder="Price" name="price" value={car.price}  onChange={handleChange}/><br/>
                     <DialogActions>
                      <Button onClick={handleClickClose}>Cancel</Button>
                      <Button onClick={handleSave}>Save</Button>
                      </DialogActions>
                  </DialogContent>
               
            </Dialog>
        </div>
      )
   }
export default AddCar
////racfe