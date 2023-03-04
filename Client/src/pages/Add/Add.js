import axios from "axios";
import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./Add.css";
import AddUI from "./AddUI.js";

const Add = () => {
  const [content, setContent] = useState("");
  const [year, setYear] = useState("");

  const navigate = useNavigate();

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/blog/",
        { content, year },
        {
          headers: {
            authorization: `Believe__${localStorage.getItem("token")}`,
          },
        }
      );
      toast.success("Item Added Successfully");
      setTimeout(() => navigate("/blog"), 500);
    } catch (error) {
      toast.success(error.message);
    }
  };

  return (
    <div className="AddAndEdit">
      <AddUI
        content={content}
        year={year}
        handleSubmit={handleSubmit}
        handleYearChange={handleYearChange}
        handleContentChange={handleContentChange}
      />
    </div>
  );
};

export default Add;
