import { Redirect, Route} from "react-router-dom";
import AuthService from "../../services/auth.service";

function PrivateRoute({ component: Component, ...restOfProps }) {

    return (
        <Route
            {...restOfProps}
            render={(props) =>
                AuthService.isAdmin() ? <Component {...props} /> : <Redirect to="/"/>
            }
        />
    );
}

export default PrivateRoute;
