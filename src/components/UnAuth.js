import { Navigate } from "react-router-dom";

const UnAuth = (props) => {
    return props.auth.token ? <Navigate to = "/" /> : props.children
}

export default UnAuth;