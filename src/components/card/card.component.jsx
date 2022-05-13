import { useState, useEffect } from "react";
import Description from "./description.component";
import "./card.styles.scss";

const Card = () => {
  const [query, setQuery] = useState("");
  const [res, setRes] = useState(null);
  useEffect(() => {}, []);
  const handleChange = event => {
    setQuery(event.target.value);
  };
  const handleSubmit = async event => {
    event.preventDefault();
    const response = await fetch(`https://api.github.com/users/${query}`);
    const data = await response.json();
    setRes(data);
    console.log(data);
  };
  return (
    <div>
      <h2 className="heading">This is the card component</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          required
          value={query}
          onChange={handleChange}
        />
        <button type="submit">Click to get info</button>
      </form>
      {res ? (
        <Description
          name={res.name}
          location={res.location}
          repos={res.public_repos}
        />
      ) : null}
    </div>
  );
};

export default Card;
