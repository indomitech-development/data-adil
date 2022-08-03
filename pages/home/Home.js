import React from "react";
import Card from "../../components/card/Card";
import Nav from "../../components/nav/Nav";

export default function Home() {
  return (
    <div>
      <Nav />
      <h1 className="my-2 text-center">cards</h1>
      <Card />
    </div>
  );
}
