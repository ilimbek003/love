import React from "react";
import { FaFaceKissWinkHeart } from "react-icons/fa6";
import { IoHeart } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  return (
    <div className="main">
      <div className="container">
        <div className="d-flex justify-content-center align-items-center pt-5 plus_I_u">
          <IoHeart color="#9d3333" size={120} />
        </div>
        <div className="d-flex justify-content-center align-items-center flex-column margin">
          <p className="project">
            <span className="best">
              Самый лучший подарок который у меня есть, это ты .
            </span>
            <br />
            <span className="best-one d-flex align-items-center gap-2">
              Спасибо за то что ты у меня есть{" "}
              <FaFaceKissWinkHeart color="#9d3333" size={20} />
            </span>
          </p>
          <button
            className="btn-btn-button"
            onClick={() => navigate("/upload-photo")}
          >
            Далее
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
