import React from "react";
import { useState } from "react";
import Button from "../button/button.component";
import "./search-bar.styles.scss";

const SearchBar = () => {
  const [username, setUsername] = useState("");
  const handleChange = ({ target }) => {
    setUsername(target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    /* call github api here */
    console.log(username);
    //at the end
    setUsername("");
  };
  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          required
          name="username"
          value={username}
          placeholder="Enter your username"
          onChange={handleChange}
        />
        <Button />
      </form>
    </div>
  );
};

export default SearchBar;
