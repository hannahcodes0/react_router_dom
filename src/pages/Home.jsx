import React from "react";
import { useNavigate } from "react-router-dom";

// src/pages/home.js

const Home = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        navigate("/works");
      }}
    >
      works로 이동
    </button>
  );
};

export default Home;
