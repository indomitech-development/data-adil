import React from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../../components/nav/Nav";
import { useCreateAuthDispatchContext } from "../../context/context";

export default function SignIn() {
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");

  const navigate = useNavigate();
  const handelChange = useCreateAuthDispatchContext();

  const handelClick = () => {
    if (userName !== "admin" && password !== "admin123") {
      return;
    }

    handelChange(true);
    navigate("/cart");
  };
  return (
    <div>
      <Nav />
      <h1>SignIn</h1>
      <label>Name:</label>
      <input
        type="name"
        name="userName"
        placeholder="Enter userName"
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
      <label>Password:</label>
      <input
        type="password"
        name="password"
        placeholder="Enter Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={handelClick}>SignIn</button>
    </div>
  );
}
