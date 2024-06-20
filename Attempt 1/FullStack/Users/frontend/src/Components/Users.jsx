import { usersContext } from "../Hooks/UserContext";
import UsersList from "./UsersList";
import { useContext, useEffect } from "react";

function Users() {
  const { getData } = useContext(usersContext);

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <UsersList />
    </>
  );
}

export default Users;
