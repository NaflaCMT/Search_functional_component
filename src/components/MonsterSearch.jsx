import React from "react";

const MonsterSearch = ({ onImageChange }) => {
  return (
    <div>
      <input
        type="number"
        className="number"
        placeholder="enter 1 to 5"
        onChange={onImageChange}
      />
    </div>
  );
};

export default MonsterSearch;
