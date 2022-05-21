import React from "react";

const UserSearch = ({ filter, handleChange }) => {
  return (
    <div className="mb-5 col-3 mx-auto">
      <select
        className="form-select"
        value={filter}
        onChange={(e) => handleChange(e.target.value)}
      >
        <option value="na">No Filter</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </div>
  );
};

export default UserSearch;
