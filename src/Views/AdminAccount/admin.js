import React, {Component,Fragment} from "react";
import NavbarAdmin from "../../Components/NavbarAdmin/navbarAdmin";
import OrderPaid from "../../Components/OrderPaid/orderPaid";

export default  class Admin extends Component {
  render()
  {
      return(
          <Fragment>
              <NavbarAdmin/>
              <div className="d-flex justify-content-between">
                    <OrderPaid/>
              </div>
          </Fragment>
      )
    }
}