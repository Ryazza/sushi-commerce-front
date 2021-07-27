import React, {Component,Fragment} from "react";
import NavbarAdmin from "../../Components/Navigation/NavbarAdmin/navbarAdmin";
import OrderPaid from "../../Components/Order/OrderPaid/orderPaid";
import OrderShipped from "../../Components/Order/OrderShipped/orderShipped";
import OrderWaiting from "../../Components/Order/OrderWaiting/orderWaiting";
import './admin.css';
import Navbar from "../../Components/Navigation/Navbar/navbar";

export default  class Admin extends Component {
  render()
  {
      return(
          <Fragment>
              <Navbar/>
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