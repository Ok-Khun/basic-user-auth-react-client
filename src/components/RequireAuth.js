import { Navigate } from "react-router-dom";

const RequireAuth = (props) => {
    return props.auth.token ?  props.children : <Navigate to = "/sign-in" />
}

export default RequireAuth;