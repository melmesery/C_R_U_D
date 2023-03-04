import React from "react";
import { Link } from "react-router-dom";
import updateBlog from "../Update/Update.js";

const BlogUI = ({ blogs, deleteBlog }) => {
  console.log(blogs);
  return (
    <div>
      <Link to="/blog/add" className="btn-product-link">
        <button className="btn btn-product">New</button>
      </Link>
      <table className="styled-table shadow">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Author</th>
            <th>Year</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog, index) => {
            return (
              <tr key={blog.id}>
                <th scope="row">{index + 1}</th>
                <td className="data">{blog.content}</td>
                <td className="data">{blog.addedBy.name}</td>
                <td className="data">{blog.year}</td>
                <td>
                  <Link to={`/blog/update/${blog._id}`}>
                    <button
                      className="btn btn-edit"
                    >
                      Edit
                    </button>
                  </Link>
                  <button
                    className="btn btn-delete"
                    onClick={() => deleteBlog(blog._id)}
                  >
                    Delete
                  </button>
                  <Link to={`/blog/view/${blog._id}`}>
                    <button className="btn btn-view">View</button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default BlogUI;
