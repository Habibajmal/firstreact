import GenericService from "./GenericService";
class ProductsService extends GenericService {


    purchase_product=(data) => this.post("/product/payment", data)   



    postcart=(_id)=> this.post("/cart/"+_id);


    getcarts=()=>  this.get("/cart")


    deletecart=(_id)=>   this.delete("/cart/delcarts/"+_id)


    removeacarts=()=>this.get("/cart/cartsallremove") 


    getorders=()=> this.get("/order/getorder")
}

let productService = new ProductsService();
export default productService;