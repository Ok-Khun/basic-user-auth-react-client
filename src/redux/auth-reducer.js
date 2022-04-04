import {setCookie, getCookie, eraseCookie} from "../utility/cookie-handler";
import jwtDecode from "jwt-decode";

// actions
function setAuth(data){
    let tokenData = getCookie("auth-token");
    if(!tokenData || data !== tokenData) setCookie("auth-token",data);
    let decoded = jwtDecode(data);
    const issuedDate = new Date(decoded.iat * 1000)
    decoded.issuedDate = issuedDate;
    return {
        type: "SET_AUTH",
        payLoad : {
            token : data,
            ...decoded
        }
    }
}

function deleteAuth(){
    // delete cookie
    eraseCookie("auth-token");
    return {
        type: "DELETE_AUTH"
    }
}

// reducer
function authReducer(state = {}, action){
    switch(action.type){
        case "SET_AUTH":
            return {
                ...state,
                ...action.payLoad
            }
        case "DELETE_AUTH":
            return {}
        default:
            return state
    }
}

export {
    authReducer,
    setAuth,
    deleteAuth
}


