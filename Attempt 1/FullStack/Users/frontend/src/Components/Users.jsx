import axios from "axios";
import { createContext, useEffect, useState } from "react";
import UsersList from "./UsersList";

export const usersContext = createContext();

function Users() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async function () {
    try {
      const response = await axios.get("http://localhost:3000/users/");
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <usersContext.Provider value={data}>
        <UsersList />
      </usersContext.Provider>
    </>
  );
}

export default Users;
