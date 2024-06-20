import axios from "axios";
import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const usersContext = createContext();

function UserContext({ children }) {
  const [data, setData] = useState([]);

  const getData = async function () {
    try {
      const response = await axios.get("http://localhost:3000/users/");
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addUser = async function (newUser) {
    try {
      const add = await axios.post("http://localhost:3000/users/addUsers", {
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        emailId: newUser.emailId,
        contactNumber: newUser.contactNumber,
      });
      console.log(add);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <usersContext.Provider value={{ data, getData, addUser }}>
        {children}
      </usersContext.Provider>
    </>
  );
}

UserContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserContext;
