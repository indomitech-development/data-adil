import React from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "../pages/cart/Cart";
import Home from "../pages/home/Home";
import SignIn from "../pages/signin/SignIn";
import CartRoute from "../protectedRoute/CartRoute";
import SignInRoute from "../protectedRoute/SignInRoute";
import SignOutRoute from "../protectedRoute/SignOutRoute";
export default function route() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/Cart"
          element={
            <CartRoute>
              <Cart />
            </CartRoute>
          }
        />

        <Route
          path="/SignIn"
          element={
            <SignInRoute>
              <SignIn />
            </SignInRoute>
          }
        />

        <Route path="/SignOut" element={<SignOutRoute />} />
      </Routes>
    </div>
  );
}
