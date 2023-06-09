import { useState, useContext } from "react";
import { login } from "../../components/context/authContext/apiCalls";
import { AuthContext } from "../../components/context/authContext/AuthContext";
import "./login.css";
export const Login = () => {
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  const { isFetching, dispatch } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch);
  };
  return (
    <div className="login">
      <form className="loginForm">
        <input
          type="text"
          placeholder="email"
          className="loginInput"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="password"
          className="loginInput"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button
          className="loginButton"
          onClick={handleLogin}
          disable={isFetching}
        >
          Login
        </button>
      </form>
    </div>
  );
};
