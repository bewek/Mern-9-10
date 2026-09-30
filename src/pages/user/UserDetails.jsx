import { Link, useParams } from "react-router";

const UserDetails = () => {
  const userId = useParams();

  console.log(userId.id);
  return (
    <div>
      <h1>User Details Page</h1>

      <h2>User Id is {userId.id}</h2>
      <h2>User Name is {userId.name}</h2>

      <Link to={"/users"}>Back</Link>
    </div>
  );
};

export default UserDetails;
