import React from "react";


import axios from "axios";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import userService from "../../services/UserService";

import AddIcon from "@material-ui/icons/Add";
const useStyles = makeStyles((theme) => ({
  addBtn: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));



const Allorders = (props) => {
  const [orders, setOrders] = React.useState([]);
  
  const classes = useStyles();
  const getData = () => {
    axios
      .get("http://localhost:4000/order/5f3905477a68961894c1a24f")
      .then((res) => {
        setOrders(res.data);
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleNewProductClick = () => {
    
  };
  // getData();
  React.useEffect(getData, []);
  return (
    <div>
      <h1>Orders</h1>
      {userService.isAdmin() && 
      <Fab color="primary" aria-label="add" className={classes.addBtn} onClick={handleNewProductClick}>
       
        <AddIcon />
      </Fab>}
      {orders.length == 0 ? (
        <p>There are no orders.</p>
      ) : (
        <Grid container spacing={3}>
            
          {orders.map((order, index) => (
            console.log(orders)
          
          )
          )}
             
 
        </Grid>
      )}
    </div>
  );
};

export default Allorders;