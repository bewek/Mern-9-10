import { useEffect, useState } from "react";

const ApiUserList = () => {
  const [data, setData] = useState([]);
  let url = "https://dummyjson.com/users";

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    let response = await fetch(url);
    response = await response.json();

    console.log(response.users);
    setData(response.users);
  };

  return (
    <div>
      <h1>User List from API</h1>

      {data.map((user) => {
        return (
          <div
            key={user.id}
            style={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <h2>{user.id}</h2>
            <h2>{user.firstName}</h2>
            <h2>{user.lastName}</h2>
            <h2>{user.age}</h2>
            <h2>{user.gender}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default ApiUserList;
