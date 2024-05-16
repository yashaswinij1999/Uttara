import axios from "axios";
import React, { useEffect, useState } from "react";

function RandomUsers() {
  const [userData, setUserData] = useState([]);
  const [numOfContacts, setContacts] = useState();

  useEffect(() => {
    getData();
  });

  async function getData() {
    try {
      const response = await axios.get(
        `https://randomuser.me/api/?results=${numOfContacts}`
      );
      console.log(response.data.results);
      setUserData(response.data.results);
    } catch (error) {
      console.log("unable to get data");
    }
  }

  const handleChange = function (e) {
    setContacts(e.target.value);
  };

  return (
    <>
      {/* Input section */}
      <div>RandomUsers</div>
      <div className="m-6">
        <input
          className="p-1 text-sm "
          type="number"
          placeholder="no of contacts"
          value={numOfContacts}
          name="noOfContacts"
          onChange={handleChange}
        />
      </div>
    </>
  );
}

export default RandomUsers;
