import React from "react";
import { Link } from "react-router-dom";

const AddUI = ({
  content,
  year,
  handleSubmit,
  handleContentChange,
  handleYearChange,
}) => {
  return (
    <div>
      <form className="AddAndEdit-form" onSubmit={handleSubmit}>
        <input
          type="text"
          id="content"
          name="content"
          placeholder="Content"
          value={content || ""}
          onChange={handleContentChange}
        />
        <input
          type="text"
          id="year"
          name="year"
          placeholder="Year"
          value={year || ""}
          onChange={handleYearChange}
        />
        <br />
        <input type="submit" value={"Add"} />
      </form>
      <Link to="/blog" className="back-add">
        Back
      </Link>
    </div>
  );
};

export default AddUI;
