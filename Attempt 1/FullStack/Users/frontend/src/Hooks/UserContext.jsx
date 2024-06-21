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

  const editUser = async function (id, editTask) {
    try {
      const response = await axios.patch(
        `http://localhost:3000/users/editUser/${id}`,
        {
          firstName: editTask.firstName,
          lastName: editTask.lastName,
          emailId: editTask.emailId,
          contactNumber: editTask.contactNumber,
        }
      );
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const removeUser = async function (id) {
    try {
      const remove = await axios.delete(
        `http://localhost:3000/users/removeUser/${id}`
      );
      setData(remove.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <usersContext.Provider
        value={{ data, getData, addUser, editUser, removeUser }}
      >
        {children}
      </usersContext.Provider>
    </>
  );
}

UserContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserContext;
