import { useState } from "react";
import "../../css/AddUser.css";
import { useNavigate } from "react-router";
import axios from "axios";

const AddUser = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const url = "http://localhost:3000/users";

  // const handleAdd = async () => {
  //   let response = await fetch(url, {
  //     method: "POST",
  //     body: JSON.stringify({ name, age, email }),
  //   });
  //   response = await response.json();

  //   if (response) {
  //     //   alert("User added");
  //     console.log("user created");
  //     navigate("/users");
  //   }
  // };
  const handleAdd = async () => {
    let response = await axios.post(url, {
      name,
      age,
      email,
    });

    if (response) {
      console.log("user created");
      navigate("/users");
    }
  };
  return (
    <div className="add-user-page">
      <div className="add-user-card">
        <div className="add-user-header">
          <h1>Add User</h1>
          <p>Enter the details below to create a new user.</p>
        </div>

        <form className="add-user-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Enter name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              id="age"
              type="number"
              placeholder="Enter age"
              onChange={(e) => setAge(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button type="submit" className="add-user-submit" onClick={handleAdd}>
            Add User
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
