import { useEffect } from "react";
import "../../css/ApiUserList.css";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, fetchUsers } from "../../redux/actions";

const ApiUserList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { users, loading } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteUser(id)).then(() => {
      alert("User Deleted");
    });
  };

  const handleEdit = (id) => {
    navigate(`/users/editUser/${id}`);
  };

  const handleAdd = () => {
    navigate("/users/addUser");
  };

  return (
    <div className="min-h-screen bg-[#f5f7fb] p-10 box-border">
      <div className="max-w-300 m-0 bg-white rounder-[12px] overflow-hidden shadow-xs">
        {/* Header */}
        <div className="user-header">
          <div>
            <h1 className="user-title">User List</h1>
            <p className="user-subtitle">
              Manage all users from your application
            </p>
          </div>

          <button className="add-user-btn" onClick={handleAdd}>
            <span className="add-icon">+</span>
            Add User
          </button>
        </div>
        {/* Table Section */}

        <div className="table-wrapper">
          <div className="table-scroll">
            <table className="user-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Email</th>
                  <th className="action-column">Actions</th>
                </tr>
              </thead>

              <tbody>
                {loading ? (
                  <tr>
                    <td
                      colSpan="5"
                      className="border p-4 text-center text-gray-500"
                    >
                      Loading...
                    </td>
                  </tr>
                ) : users.length === 0 ? (
                  <tr>
                    <td
                      colSpan="5"
                      className="border p-4 text-center text-gray-500"
                    >
                      No users found
                    </td>
                  </tr>
                ) : (
                  users.map((user) => (
                    <tr key={user.id}>
                      <td className="user-id">#{user.id}</td>

                      <td>
                        <div className="user-name-wrapper">
                          <div className="user-avatar">
                            {user.name?.charAt(0)?.toUpperCase() || "U"}
                          </div>
                          <span className="user-name">{user.name}</span>
                        </div>
                      </td>

                      <td className="user-age">{user.age}</td>

                      <td className="user-email">{user.email}</td>

                      <td className="action-column">
                        <div className="action-buttons">
                          <button
                            className="edit-btn"
                            onClick={() => handleEdit(user.id)}
                          >
                            Edit
                          </button>

                          <button
                            className="delete-btn"
                            onClick={() => handleDelete(user.id)}
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiUserList;
