import { useState } from "react";
import { Link } from "react-router-dom";
import { postSignIn } from "../utility/requests/post-sign-in";
import { setAuth } from "../redux/auth-reducer";
import { useDispatch } from "react-redux";

const SignIn = () => {
  const [data, setData] = useState({
    email: "khun@mail.com",
    password: "khun@123",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { value, name } = e.target;
    setData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // this respnose will reply me with a jwt token
      const response = await postSignIn(data);
      if (response) {
        dispatch(setAuth(response));
      }
    } catch (err) {
      if (err.response.data.length > 0) {
        // display error messages
        console.log(err.response.data);
      }
      console.log(err);
    }
  };
  return (
    <div>
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>SignIn</h2>
        <div className="form-group">
          <label>Email</label>
          <input
            className="form-control"
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            required={true}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            className="form-control"
            type="password"
            name="password"
            value={data.password}
            onChange={handleChange}
            required={true}
          />
        </div>
        <div className="form-group">
          <input
            className="form-control form-control btn btn-primary mt-2"
            type="submit"
          />
        </div>
        <div className="form-group">
          <Link to="/forgot-password">Forgot password?</Link>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
