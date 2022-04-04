import { getCookie } from "./cookie-handler";
import { verifyToken } from "./requests/verify-token";
import { setAuth, deleteAuth } from "../redux/auth-reducer";

const checkCookieAndUpdateState = async (dispatch) => {
  let cookie = getCookie("auth-token");
  if (cookie) {
    let response = await verifyToken({ token: cookie });
    if (response.isValid === true) {
      dispatch(setAuth(cookie));
    } else {
      deleteAuth();
    }
  }
};

export {
    checkCookieAndUpdateState
}
