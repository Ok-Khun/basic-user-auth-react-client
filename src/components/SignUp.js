import { useState } from "react";
import { Link } from "react-router-dom";
import { postSignUp } from "../utility/requests/post-sign-up";

const SignUp = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

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
      const responseData = await postSignUp(data);
      if (responseData.success) {
        alert("Account Created!");
        setData({
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
      }
    } catch (err) {
      // err.response.data returns array
      if (err.response.data.length > 0) {
        // display error messages
      }
    }
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>SignUp</h2>
      <div className="form-group">
        <label>User Name</label>
        <input
          className="form-control"
          type="text"
          name="username"
          value={data.username}
          onChange={handleChange}
        />
      </div>
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
        <label>Confirm Password</label>
        <input
          className="form-control"
          type="password"
          name="confirmPassword"
          value={data.confirmPassword}
          onChange={handleChange}
          required={true}
        />
      </div>

      <div className="form-group">
        <input
          className="form-control btn btn-primary mt-2"
          type="submit"
          value="Sign Up"
        />
      </div>
      <div className="form-group">
        <span>
          Already have an account?<Link to="/sign-in">Sign In</Link>
        </span>
      </div>
    </form>
  );
};

export default SignUp;
