import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slices/authslice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const dispatch = useDispatch();

  const clearForm = () => {
    setEmail("");
    setPwd("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({email, pwd}))
      clearForm();
    } 
  

  return (
      <form 
       onSubmit={handleSubmit}
       className="dropdown-item"
      >
        <li className="">
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            name="user"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </li>
        <li className="">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="pwd"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required
          />
        </li>
        <li>
        <button type="submit" class="my-2 btn btn-primary">
          LogIn
        </button>
        </li>
      </form>
  );
};

export default Login;

