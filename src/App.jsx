import React, { useEffect, useState } from "react";
import Search from "./components/Search";
import "./App.css";
import CardList from "./components/CardList";
import MonsterSearch from "./components/MonsterSearch";

function App() {
  const [users, setUsers] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [image, setImage] = useState(0);
  console.log(users);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((result) => setUsers(result));
  }, []);

  const onSearchChange = (event) => {
    const searchData = event.target.value.toLocaleLowerCase();
    setSearchField(searchData);
  };
  const onImageChange = (event) => {
    const imageData = event.target.value;
    setImage(imageData);
  };
  const filteredUser = users.filter((user) => {
    return user.name.toLocaleLowerCase().includes(searchField);
  });
  return (
    <div>
      <h1>FRIENDS</h1>
      <Search onSearchChange={onSearchChange} />
      <MonsterSearch onImageChange={onImageChange} />
      <CardList filteredUser={filteredUser} image={image} />
    </div>
  );
}

export default App;
