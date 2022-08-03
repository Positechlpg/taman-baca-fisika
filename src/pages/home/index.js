import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import Navbar from "../../component/navbar/navbar.js";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className="container">
        <Navbar />
      </div>
      <button className="btn-login" onClick={() => navigate("/login")}>
        login page
      </button>
    </>
  );
}

export default Home;
