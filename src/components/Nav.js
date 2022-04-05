import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { deleteAuth } from "../redux/auth-reducer";

const Nav = () => {
  const auth = useSelector((state) => state.auth);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (Object.keys(auth).length !== 0) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [auth]);

  const signOut = () => {
    dispatch(deleteAuth());
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {!isLoggedIn ? (
          <>
            <li>
              <Link to="/sign-up">Sign Up</Link>
            </li>
            <li>
              <Link to="/sign-in">Sign In</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/protected-route">Protected</Link>
            </li>
            <li onClick={signOut}>Sign Out</li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
