import React, {Component,Fragment} from "react";
import NavbarAdmin from "../../component/NavbarAdmin/navbarAdmin";
import OrderPaid from "../../component/Order/OrderPaid/orderPaid";
import OrderShipped from "../../component/Order/OrderShipped/orderShipped";
import OrderWaiting from "../../component/Order/OrderWaiting/orderWaiting";
import './admin.css';

export default  class Admin extends Component {
  render()
  {
      return(
          <Fragment>
              <NavbarAdmin/>
              <div className="d-flex Admin_orders_preview container justify-content-around">
                    <OrderPaid/>
                    <OrderWaiting/>
                    <OrderShipped/>
              </div>
          </Fragment>
      )
    }
}
