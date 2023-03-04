import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./View.css";
import ViewUI from "./ViewUI.js";

const View = () => {
  const [item, setItem] = useState({});
  console.log(item);
  
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/blog/${id}`, {
        headers: {
          authorization: `Believe__${localStorage.getItem("token")}`,
        },
      })
      .then((response) => setItem(response.data.Blog));
  }, [id]);
  return (
    <div className="view">
      <ViewUI item={item} />
    </div>
  );
};

export default View;
