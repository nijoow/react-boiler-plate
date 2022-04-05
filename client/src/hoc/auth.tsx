import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../_action/user_action";
import { useNavigate } from "react-router-dom";

export default function (
  SpecificComponent: any,
  option: boolean | null = false,
  adminRoute = null
) {
  function AuthenticationCheck() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(auth()).payload.then((response) => {
        console.log(response);
        if (!response.isAuth) {
          if (option) {
            navigate("/login");
          }
        } else {
          if (adminRoute && !response.isAdmin) {
            navigate("/");
          } else {
            if (!option) {
              navigate("/");
            }
          }
        }
      });
    }, []);

    return <SpecificComponent />;
  }
  return AuthenticationCheck;
}
