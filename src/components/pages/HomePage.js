import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div>
    <h1>Home Page</h1>
    <Link id="link" to="/login">Login</Link>
  </div>
);

export default HomePage;
