import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { fetchUserById, updateUser } from "../../redux/actions";

const EditUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const currentUser = useSelector((state) => state.user.currentUser);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    dispatch(fetchUserById(id));
  }, [dispatch, id]);

  // once currentUser shows up in the store, fill the form fields with it
  useEffect(() => {
    if (currentUser) {
      setName(currentUser.name);
      setAge(currentUser.age);
      setEmail(currentUser.email);
    }
  }, [currentUser]);

  const handleEdit = async () => {
    const result = await dispatch(
      updateUser({ id, userData: { name, age, email } }),
    );

    if (result) {
      alert("user updated");
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
