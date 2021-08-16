import React, {Component,Fragment} from "react";
import NavbarAdmin from "../../../Components/Admin/NavbarAdmin/navbarAdmin";
import OrderPaid from "../../../Components/Order/OrderPaid/orderPaid";
import OrderShipped from "../../../Components/Order/OrderShipped/orderShipped";
import OrderWaiting from "../../../Components/Order/OrderWaiting/orderWaiting";
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
