import axios from "axios";
import {server} from "./server-path";

async function postSignIn(data){
    const route = server + "/user/auth/sign-in";
    // doing post request
    const response = await axios({
        method : "post",
        url : route,
        data : data
    })
    return response.data
}

export {
    postSignIn
}