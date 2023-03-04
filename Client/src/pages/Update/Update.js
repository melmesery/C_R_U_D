import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Update.css";
import UpdateUI from "./UpdateUI.js";

const Update = () => {
  const { id } = useParams();
  const [year, setYear] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();

  const updateBlog = async (id) => {
    await axios
      .get(`http://localhost:5000/blog/${id}`)
      .then((response) => {
        console.log(response)
        setYear(response.data.year);
        setContent(response.data.content);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(
        `http://localhost:5000/blog/${id}`,
        { year, content },
        {
          headers: {
            authorization: `Believe__${localStorage.getItem("token")}`,
          },
        }
      )
      .then((response) => {
        setTimeout(() => navigate("/blog"), 500);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    updateBlog();
  }, [id]);

  return (
    <div className="update">
      <UpdateUI
        handleSubmit={handleSubmit}
        setYear={setYear}
        setContent={setContent}
        year={year}
        content={content}
      />
    </div>
  );
};

export default Update;
