import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button } from "@material-ui/core";
import productService from "../../services/ProductService";
import Purchase from "./purchase"
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import userService from "../../services/UserService";
import { toast } from "react-toastify";


const TAX_RATE = 0.07;
const useStyles = makeStyles((theme)=>({
  table: {
    minWidth: 700,
  },
  addbtn:{
    position:"absolute",
    bottom:theme.spacing(2),
    right:theme.spacing(2)

}
}));

function ccyFormat(num) {
    return `${num.toFixed(2)}`;
  }
  
  function subtotal(items) {
    return items.map(({ price,quantity }) => price*quantity).reduce((sum, i) => sum + i, 0);
  }

const Carts = (props) => {
    
  
  
    const[products,setproducts]=React.useState([]);
   
           
    const getdata=()=>{
        productService.getcarts().then(data=>{
            
            setproducts(data)
            
          
           
            
        }).catch((err)=>{console.log(err)})
    }


 //getdata()
 React.useEffect(getdata,[])
 const invoiceSubtotal = subtotal(products);
  const invoiceTotal =  invoiceSubtotal;
 const classes=useStyles()


 
    return (  
        <div>

      
            <Grid container spacing={3}>
                <Grid md={4}></Grid>
    <Grid md={5}>  <h1>Products in Cart</h1> </Grid>
            <Grid md={3}></Grid>
            </Grid>
        {products.length === 0 ? (<p>There is no products</p>) : ( 
        <Grid container spacing={3}>

<TableContainer component={Paper}>
      <Table className={classes.table} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={4}>
              Cart Details
            </TableCell>
           
          </TableRow>
          <TableRow>
            <TableCell>Product Name</TableCell>
            
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Sum</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>


        


  
  {products.map((product)=> (
       <TableRow key={product._id}>
       <TableCell>{product.name}</TableCell>
 
       <TableCell align="right">{product.price}</TableCell>
       
       <TableCell align="right">{ccyFormat(product.price*product.quantity)}</TableCell>

       <TableCell align="right"><Button variant="contained" color="primary" 
       onClick={(e)=>{


        productService
        .deletecart(product._id)
        .then((data) => {
          toast.success(data, {
            position: toast.POSITION.TOP_RIGHT,
          });
          console.log(data);

          getdata()
          
          window.location.reload()
          window.history.push ("/cart") ;
          
          

        })
        .catch((err) => {
          console.log(err);
          toast.error(err.response.data, {
            position: toast.POSITION.TOP_RIGHT,
          });
        });
      }}
        >Remove</Button></TableCell>
       
       
     </TableRow>
     
            
      ))}
    
    
          
          <TableRow>
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    <Grid item md={3}></Grid>
    <Grid item md={8}></Grid>
    
    


        
    </Grid>   
    ) }

{ userService.isLoggedIn()&&( <>
<Purchase  amount={ccyFormat(invoiceTotal)} product={products} delcart={()=>{  productService.removeallcarts().then(data=>{

}).catch(err=>console.log(err))}} />

</>  )}
        
      
    </div>
    );
}
 
export default Carts;