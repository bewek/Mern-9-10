import { useState } from "react";
import "../../css/AddUser.css";
import { useNavigate } from "react-router";

const AddUser = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const url = "http://localhost:3000/users";

  const handleAdd = async () => {
    const response = await fetch(url, {
      method: "Post",
      body: JSON.stringify({ name, age, email }),
    });
    const result = await response.json();

    if (result) {
      //   alert("User added");
      navigate("/users");
      console.log("user created");
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
