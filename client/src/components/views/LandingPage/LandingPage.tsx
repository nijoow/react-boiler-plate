import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Auth from "../../../hoc/auth";

function LandingPage() {
  // const navigate = useNavigate();

  const onClickHandler = () => {
    axios.get(`/api/users/logout`).then((response) => {
      console.log(response.data);
      //if (response.data.success) navigate("/login");
    });
  };
  return (
    <div className="m-5 bg-yellow-500 text-blue-500 font-bold">
      LandingPage
      <button onClick={onClickHandler}>Logout</button>
    </div>
  );
}

export default Auth(LandingPage, false);
