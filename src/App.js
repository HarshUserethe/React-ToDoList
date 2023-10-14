import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './App.css'
import AddIcon from '@mui/icons-material/Add';
import Header from './Components/Header';
import React, { useState } from "react";
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';


 const App = () => {

  const [inputValue, setInput] = useState('');
  const [data, setData] = useState([]);


  
  const handelValue = (event) => {
    setInput(event.target.value);
  }

  const saveData = () => {
   setData([...data, inputValue]);
   setInput('');
  }

  const removeTask = (index) => {
   const newData = data.filter((_, i) => i !== index);
   setData([...newData])
  }



  return(
   <div className="main">
    .<Header />
    <div className="input">
    <TextField id="outlined-basic" name='name' value={inputValue}  onChange={handelValue} label="Enter Your Task" variant="outlined" />
    <Button id="btn" variant="contained" onClick={saveData} style={{background: "green"}}><AddIcon style={{color:"#fff"}} /></Button>
    </div>

    <div className="items">
     
      {
        data.length === 0 ? <h1 id='note'>No Data is Available</h1> : 

        data.map(function(elem, index){
           return(
            <div className='list' key={index}>
            <Checkbox color="success"/>
            <span className='taskName'>{elem}</span>
            <DeleteIcon id="deleteBtn" onClick={() => removeTask(index)} style={{marginRight:"1vw"}}/>
        </div>
           );
        })
      }
    
    </div>
  
   </div>
  );
 }
 
 export default App;
 