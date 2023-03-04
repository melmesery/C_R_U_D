import React from "react";
import { Link } from "react-router-dom";

const UpdateUI = ({ content, year, handleSubmit, setContent, setYear }) => {
  return (
    <div>
      <form className="update-form" onSubmit={handleSubmit}>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Title"
          value={content || ""}
          onChange={(e) => setContent(e.target.value)}
        />
        <input
          type="text"
          id="year"
          name="year"
          placeholder="Year"
          value={year || ""}
          onChange={(e) => setYear(e.target.value)}
        />
        <br />
        <input type="submit" value={"Update"} />
      </form>
      <Link to="/blog" className="back-update">
        Back
      </Link>
    </div>
  );
};

export default UpdateUI;
