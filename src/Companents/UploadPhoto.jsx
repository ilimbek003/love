import React from "react";
import { FaArrowLeft } from "react-icons/fa6";

const UploadPhoto = () => {
  return (
    <div className="container">
      <div className="d-flex align-items-center justify-content-between pt-3">
        <FaArrowLeft size={24} />
        <div className="line" />
        <div className="icons-with" />
      </div>
      <div>
        <p className="pro-photo">Загрузите свою фотографию</p>
      </div>
    </div>
  );
};

export default UploadPhoto;
