import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import userService from "../../services/UserService";
import params from "react-router-dom";
import axios from "axios";
import { propTypes } from 'react-bootstrap/esm/Image';
var cardStyle = {
  display: 'block',
  width: '20vw',
  margin: 20,
  transitionDuration: '0.3s',
  height: '300',
  border:blue

   
}



const Order = ({ order }) => {
  
  return (

    <Card style={cardStyle} >
      <CardActionArea>
        
        
        <CardContent>
          <Typography >
            <h1>{order.product.name}</h1>
          </Typography>
          <Typography>

          </Typography>
          <Typography gutterBottom  >
            <p>{order.product.description}</p>
          </Typography>
          <Typography variant="body2" >
          <h3> Price={order.product.price}  </h3>
          </Typography>
          <Typography variant="body2" >
          <h4> Quantity={order.quantity}  </h4>
          </Typography>
 
        </CardContent>
      </CardActionArea>
   
      <CardActions>
   


      </CardActions>
    </Card>

  );
};

export default Order;