import React, { useEffect } from "react";
import axios from "axios";
function LandingPage() {
  useEffect(() => {
    axios.get("/api/hello").then((response) => console.log(response));
  }, []);
  return (
    <div className="m-5 bg-yellow-500 text-blue-500 font-bold">LandingPage</div>
  );
}

export default LandingPage;
