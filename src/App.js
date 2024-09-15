import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./Companents/Main";
import UploadPhoto from "./Companents/UploadPhoto";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/upload-photo" element={<UploadPhoto />} />
      </Routes>
    </div>
  );
};

export default App;
