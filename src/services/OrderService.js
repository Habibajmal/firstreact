import GenericService from './GenericService';
class OrderService extends GenericService {

    
  getorders=()=> this.get("/order/getorder")// get all orders request
  
}


export default OrderService;