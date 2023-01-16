import React from "react";
import Input from "./Input";

// login component: renders is isLoggedIn === false
function Login() {
  return (
    <div>
      <form className="form">
        // pass props to Input components
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
