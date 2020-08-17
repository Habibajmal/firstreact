import React from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import axios from "axios";
import Admin from "../auth/Admin";

var useStyles ={
   
  margin: 25,

};


const UpdateProduct = (props) => {
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState(0);
  const [description,setDescription]= React.useState("");
  const [quantity, setQuantity] = React.useState(0);
  const id = props.match.params.id;
  React.useEffect(() => {
    console.log(id);
    axios.get("http://localhost:4000/product/"+id)
    .then((data) => {
      setName(data.name);
      setPrice(data.price);
      setQuantity(data.quantity);
      setDescription(data.description)
    
    }
    
    
    );
  }, []);
  return (
    <Admin>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1>Update Product</h1>
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <TextField
            label="Name"
            fullWidth
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <TextField
            label="Price"
            fullWidth
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
           <Grid item xs={6} style={useStyles}>
            <textarea  label="Description" 
             value={description}
             fullWidth 
             onChange={(e)=>{
              setDescription(e.target.value);             
            }}
             rows="4" cols="65"/>
            </Grid>
            
           <TextField
            label="Quantity"
            fullWidth
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={9}>
          <Button
            variant="contained"
            color="primary"
            onClick={(e) => {
            
                axios.put("http://localhost:4000/product/"+id, { name, price, quantity,description })
                .then((data) => {
                  console.log(data);
                  props.history.push("/product");
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
          >
            Update
          </Button>
        </Grid>
      </Grid>
      </Admin>
  );
};

export default UpdateProduct;