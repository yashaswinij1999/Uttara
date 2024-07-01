import axios from "axios";
import { useEffect, useState } from "react";
import Users from "./Users";

function RandomUserList({ inval }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, [inval]);

  const getUsers = async function () {
    console.log(inval);
    try {
      if (inval !== 0) {
        const response = await axios.get(
          `https://randomuser.me/api/?results=${inval}`
        );
        console.log(response.data.results);
        setUsers(response.data.results);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {inval === 0 ? (
        <div className="m-3">No users data</div>
      ) : (
        <div className=" min-h-screen grid lg:grid-cols-4 ">
          {users.map((el) => (
            <Users
              key={el.index}
              first={el.name.first}
              last={el.name.last}
              picture={el.picture.large}
              email={el.email}
              phone={el.phone}
              city={el.location.city}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default RandomUserList;
