import { useContext } from "react";
import { usersContext } from "./Users";

function UserItem() {
  const data = useContext(usersContext);

  return (
    <>
      <table className="table-fixed border-collapse w-full mt-8">
        <thead>
          <tr>
            <th className="border p-2 bg-gray-200">FirstName</th>
            <th className="border p-2 bg-gray-200">LastName</th>
            <th className="border p-2 bg-gray-200">EmailID</th>
            <th className="border p-2 bg-gray-200">ContactNumber</th>
          </tr>
        </thead>
        <tbody>
          {data.map((el) => (
            <>
              <tr key={el._id} className="odd:bg-gray-100 even:bg-gray-200">
                <td className="border p-2">{el.firstName}</td>
                <td className="border p-2">{el.lastName}</td>
                <td className="border p-2">{el.emailId}</td>
                <td className="border p-2">{el.contactNumber}</td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default UserItem;
