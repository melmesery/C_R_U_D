import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "./Blog.css";
import BlogUI from "./BlogUI.js";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  const loadData = () => {
    fetch("http://localhost:5000/blog", {
      method: "GET",
      headers: {
        authorization: `Believe__${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data.Blogs);
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  useEffect(() => {
    loadData();
  }, []);

  const deleteBlog = async (id) => {
    try {
      if (window.confirm("Are You Sure ??")) {
        const response = await axios.delete(
          `http://localhost:5000/blog/${id}`,
          {
            headers: {
              authorization: `Believe__${localStorage.getItem("token")}`,
            },
          }
        );
        if (response.data.message == "Not Authenticated") {
          toast.error(response.data.message);
        } else {
          toast.success(response.data.message);
          loadData();
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="home">
      <BlogUI blogs={blogs} deleteBlog={deleteBlog} />
    </div>
  );
};

export default Blog;
