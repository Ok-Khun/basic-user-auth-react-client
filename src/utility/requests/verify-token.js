import axios from "axios";
import {server} from "./server-path";

async function verifyToken(data){
    const route = server + "/user/auth/verify-token";
    // doing post request
    const response = await axios({
        method : "post",
        url : route,
        data : data
    })
    return response.data
}

export { verifyToken }