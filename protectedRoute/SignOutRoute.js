import React from "react";
import { Navigate } from "react-router-dom";
import {
  useCreateAuthDispatchContext,
  useCreateAuthStateContext,
} from "../context/context";

export default function SignOutRoute({ children }) {
  const handelChange = useCreateAuthDispatchContext();
  handelChange(false);
  return <Navigate to="/" />;

  return children;
}
