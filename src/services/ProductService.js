import GenericService from "./GenericService";
class ProductsService extends GenericService {





    postcart=(_id)=> this.post("/cart/"+_id);


    getcarts=()=>  this.get("/cart")


    deletecart=(_id)=>   this.delete("/cart/delcarts/"+_id)


    removeacarts=()=>this.get("/cart/cartsallremove") 


    getorders=()=> this.get("/order/getorder")

    cartinc_qty=(_id)=> this.puts("/carts/cartqtyinc/"+ _id)
    cartdec_qty=(_id)=> this.puts("/carts/cartqtydec/"+ _id)

    purchase_product=(data) => this.post("/product/payment", data)   


}

let productService = new ProductsService();
export default productService;