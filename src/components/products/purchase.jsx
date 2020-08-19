import React from "react"
import StripeCheckout from 'react-stripe-checkout';
import userService from "../../services/UserService";
import {  Button } from "@material-ui/core";
import productService from "../../services/ProductService";
import { toast } from "react-toastify";


const Purcahse = (props) => {
    let amount=props.amount
    let products=props.product
    const priceForStripe = amount * 100;
    const publishableKey = 'pk_test_51H2YSHBx7QxnH8iB2Asf4DFgrnBWKnA8SPxAWzLamx09XE0A6JaqTUn54lOQ8IwWPpKfQFHgSKub4mwmGWLpefaD00GwMciW4k';
    const onToken = token => {
        const data={token,amount,products}
        productService.purchase_product(data).then((data)=>{
            
            toast.success("Successfully purchase", {
                position: toast.POSITION.TOP_RIGHT,
              });
        }).catch((err)=>{
            
            toast.error(err.response.data, {
                position: toast.POSITION.TOP_RIGHT,
              });
        })
        props.delcart()
      
        window.location.reload()
        
        
       
    };

    return ( 
     <div>
         
         <StripeCheckout
            label='Pay Now'
        
            billingAddress
            shippingAddress
         
            description={`Your total is Rs.${amount}`}
            amount={priceForStripe}
            currency="pkr"
            email={userService.getLoggedInUser().email?userService.getLoggedInUser().email:""}
        
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}> 
            <Button  size="small" variant="outlined" fullWidth color="primary">Purchase</Button>
            
             </StripeCheckout>     

        
     </div>

     );
}
 
export default Purcahse;