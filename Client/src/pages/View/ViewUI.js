import React from "react";
import { Link } from "react-router-dom";

const ViewUI = ({ item }) => {
  console.log(item);
  return (
    <div>
      <div className="card rounded-0">
        <div className="container">
          <h6>ID</h6>
          <div className="card-data">
            <span>{item._id}</span>
          </div>
          <h6>Title</h6>
          <div className="card-data">
            <span>{item.content}</span>
          </div>
          <h6>Year</h6>
          <div className="card-data">
            <span>{item.year}</span>
          </div>
        </div>
      </div>
      <Link to="/blog" className="vieW">
        <input type="button" value="Back" className="view-back" />
      </Link>
    </div>
  );
};

export default ViewUI;
