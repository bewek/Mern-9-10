import { useEffect, useState } from "react";
import "../../css/ApiUserList.css";
import { useNavigate } from "react-router";

const ApiUserList = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const url = "http://localhost:3000/users";

  useEffect(() => {
    setLoading(true);
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    const response = await fetch(url);
    const result = await response.json();
    setData(result);
    setLoading(false);
  };

  const handleAdd = () => {
    navigate("/users/addUser");
  };

  return (
    <div className="user-page">
      <div className="user-container">
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
          {loading ? (
            <div className="loading-container">
              <div className="loading-title">Loading users...</div>
              <div className="loading-text">
                Please wait while we fetch the data.
              </div>
            </div>
          ) : (
            <>
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
                    {data.map((user) => (
                      <tr key={user.id}>
                        {/* ID */}
                        <td className="user-id">#{user.id}</td>

                        {/* Name */}
                        <td>
                          <div className="user-name-wrapper">
                            <div className="user-avatar">
                              {user.name?.charAt(0)?.toUpperCase() || "U"}
                            </div>

                            <span className="user-name">{user.name}</span>
                          </div>
                        </td>

                        {/* Age */}
                        <td className="user-age">{user.age}</td>

                        {/* Email */}
                        <td className="user-email">{user.email}</td>

                        {/* Actions */}
                        <td className="action-column">
                          <div className="action-buttons">
                            <button className="edit-btn">Edit</button>

                            <button className="delete-btn">Delete</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApiUserList;
