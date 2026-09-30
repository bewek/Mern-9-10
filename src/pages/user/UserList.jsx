import { Link } from "react-router";

const UserList = () => {
  const userData = [
    { id: 1, name: "John" },
    { id: 2, name: "Sam" },
    { id: 3, name: "Harry" },
    { id: 4, name: "Ram" },
    { id: 5, name: "Shyam" },
  ];

  return (
    <div style={{ marginLeft: "20px" }}>
      <h1>User List Page</h1>

      {userData.map((user) => (
        <div
          style={{ display: "flex", alignItems: "center", columnGap: "10px" }}
          key={user.id}
        >
          <h2>{user.id}</h2>
          <h2>
            <Link to={`/users/${user.id}/${user.name}`}>{user.name}</Link>
          </h2>
        </div>
      ))}
    </div>
  );
};

export default UserList;
