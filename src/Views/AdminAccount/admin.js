import React, {Component,Fragment} from "react";
import NavbarAdmin from "../../Components/NavbarAdmin/navbarAdmin";
import OrderPaid from "../../Components/OrderPaid/orderPaid";
import OrderShipped from "../../Components/OrderShipped/orderShipped";
import OrderWaiting from "../../Components/OrderWaiting/orderWaiting";
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