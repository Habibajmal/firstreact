import React from "react";
import axios from "axios";
import { Grid, TextareaAutosize } from "@material-ui/core";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Button from '@material-ui/core/Button';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

var useStyles ={
   
    margin: 25,

};


const NewProduct=(props) =>
{
  const[name,setName]=React.useState("");
    const[price,setPrice]=React.useState(0);
    const[description,setDescription]=React.useState("");
    const[quantity,setQuanity]=React.useState("");
    const [productimage, setselectedFile] =React.useState();
    
  const onChangeHandler = (e) => {


     

    setselectedFile(e.target.files[0]);


};

    

    
    return(

       <Grid>

          <Grid item xs={6}  style={useStyles}>
            <TextField
              required
              label="Product Name"
              value={name}
              fullWidth
              onChange={(e)=>{
                setName(e.target.value);             
              }}
            />
            <TextField
              label="Price"
              value={price}
              fullWidth
              onChange={(e)=>{
                setPrice(e.target.value);             
              }}

            />
            <TextField
              label="Quantity"
              value={quantity}
              fullWidth
              onChange={(e)=>{
                setQuanity(e.target.value);             
              }}

            />
         
          </Grid >
              

          <Grid item xs={6} style={useStyles}>
            <textarea  label="Description" 
             value={description}
             fullWidth 
             onChange={(e)=>{
              setDescription(e.target.value);             
            }}
             rows="4" cols="75"/>
            </Grid>
            
          <Grid item xs={9} style={useStyles}>
          <input
                  accept="*"

                  id="contained-button-file"
                  name="productimage"
                  onChange={onChangeHandler}
                  type="file"
                />  
      
      
            </Grid>
            
          <Grid item xs={12} style={useStyles}>
            
             <button type="submit"
             onClick={(e)=>{
               console.log(name);
               console.log(price);
               console.log(description);
               console.log(productimage);
               const data = new FormData();
          data.append("name", name);
          data.append("price", price);
          data.append("quantity",quantity);
          data.append("description", description);
          data.append("productimage",productimage)
               
                axios.post("http://localhost:4000/product",data)
                  .then ((res)=>{
                      console.log('upd')
                  })
                  .catch((err)=>
                  {
                      console.log(err)
                  })
                  props.history.push("/product");             
                }
              }
             >Submit</button>
          </Grid>

          </Grid>
      
    );
    
}
export default NewProduct;