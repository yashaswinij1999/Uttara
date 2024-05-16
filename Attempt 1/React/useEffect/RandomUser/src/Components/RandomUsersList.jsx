import React from "react";
import ContactCard from "./ContactCard";

function RandomUsersList({ userData, numOfContacts }) {
  return (
    <div>
      {numOfContacts === 0 ? (
        <div> No Users Data </div>
      ) : (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  m-4 p-6 gap-3">
          <ContactCard userData={userData} />
        </div>
      )}
    </div>
  );
}

export default RandomUsersList;
