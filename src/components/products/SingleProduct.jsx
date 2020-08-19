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
import productService from "../../services/ProductService"

import Purcahse from './purchase';
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



const SingleProduct = ({ product }) => {
  let path = []
   path = product.productimage.split("\\");
  let str = path[path.length-1]
  return (
    console.log(str),
    <Card style={cardStyle} >
      <CardActionArea>
        
          <img src={"http://localhost:4000/img/"+str} width="275" height="200"/>
        
        <CardContent>
          <Typography >
            <h1>{product.name}</h1>
          </Typography>
          <Typography>

          </Typography>
          <Typography gutterBottom  >
            <p>{product.description}</p>
          </Typography>
          <Typography variant="body2" >
          <h3> Price={product.price}  </h3>
          </Typography>
          <Typography variant="body2" >
          <h4> Quantity={product.quantity}  </h4>
          </Typography>
 
        </CardContent>
      </CardActionArea>
   
      <CardActions>
      {   userService.isLoggedIn()&&(
      <>
      <Purcahse amount={product.price} product={product} delcart={()=>{}}/>
      </>
    )
    }

   

<Button size="small" color="primary" variant="outlined"
onClick={(e)=>{

  productService.postcart(product._id)
  .then((data) => {
    console.log(data);
    window.location.reload();
   
  })
    .catch((err) => {
    console.log(err);
  });        
    window.location.assign("http://localhost:3000/product")    
}
}
>
  add to cart
</Button>

<div>
{userService.isAdmin() &&
        <Button size="small" color="primary" variant="outlined"
        onClick={(e) => {
        
          axios
            .delete("http://localhost:4000/product/"+product._id)
            .then((data) => {
              window.location.reload();
            })
            .catch((err) => {
              console.log(err);
            });
          }}
        >
          Delete
        </Button>
}

{userService.isAdmin() &&
        <Button size="small" color="primary" variant="outlined"
        onClick={(e) => {
        
        
              window.location.assign("http://localhost:3000/product/updateproduct/"+product._id);
            
          }}
        >
          Edit
        </Button>
}
</div>

      </CardActions>
    </Card>

  );
};

export default SingleProduct;