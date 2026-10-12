import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const EditUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);

  const url = `http://localhost:3000/users/${id}`;

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    getUserData();
  }, []);

  //   const getUserData = async () => {
  //     let response = await fetch(url);
  //     response = await response.json();
  //     console.log(response);
  //     setName(response.name);
  //     setAge(response.age);
  //     setEmail(response.email);
  //   };

  const getUserData = async () => {
    let response = await axios.get(url);

    console.log(response.data);
    setName(response.data.name);
    setAge(response.data.age);
    setEmail(response.data.email);
  };

  //   const handleEdit = async () => {
  //     let response = await fetch(url, {
  //       method: "Put",
  //       body: JSON.stringify({ name, age, email }),
  //     });
  //     response = await response.json();

  //     if (response) {
  //       console.log("User Updated");
  //       navigate("/users");
  //     }
  //   };
  const handleEdit = async () => {
    let response = await axios.put(url, {
      name,
      age,
      email,
    });

    if (response) {
      console.log("User Updated");
      navigate("/users");
    }
  };
  return (
    <div className="add-user-page">
      <div className="add-user-card">
        <div className="add-user-header">
          <h1>Edit User</h1>
          <p>Update user data here.</p>
        </div>

        <form className="add-user-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              id="age"
              type="number"
              placeholder="Enter age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="add-user-submit"
            onClick={handleEdit}
          >
            Edit User
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
