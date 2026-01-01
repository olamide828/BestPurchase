import axios from "axios";
import React, { useEffect } from "react";

const Api = () => {
  useEffect(() => {
    const handleApi = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/products");
        console.log(res);
      } catch (error) {
        console.log("This is our Error", error);
      }
    };
    handleApi();
  }, []);

  return <div>Api</div>;
};

export default Api;
