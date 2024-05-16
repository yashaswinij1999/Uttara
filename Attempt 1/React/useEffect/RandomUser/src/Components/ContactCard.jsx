import React from "react";

function ContactCard({ userData }) {
  return (
    <>
      {userData.map((el, index) => {
        return (
          <div key={index} className="h-80 rounded-lg shadow-md bg-white  p-4">
            <img className="m-auto rounded-full " src={el.picture.large} />
            <div className="text-center mt-4">
              <div className="text-xl font-semibold">
                {el.name.first} {el.name.last}
              </div>
              <p className="text-gray-500 mt-5 text-sm">
                <span>email : {el.email}</span>
              </p>
              <p className="text-gray-500 text-sm">
                <span>phone : {el.phone}</span>
              </p>
              <p className="text-gray-500 text-sm">
                <span>city : {el.location.city}</span>
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ContactCard;
