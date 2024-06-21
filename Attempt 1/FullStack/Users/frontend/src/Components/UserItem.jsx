import { useContext } from "react";
import { usersContext } from "../Hooks/UserContext";
import { useNavigate } from "react-router-dom";

function UserItem() {
  const { data, removeUser } = useContext(usersContext);
  const navigate = useNavigate();

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
              <tr key={el._id}>
                <td className="border p-2 bg-gray-100">{el.firstName}</td>
                <td className="border p-2 bg-gray-100">{el.lastName}</td>
                <td className="border p-2 bg-gray-100">{el.emailId}</td>
                <td className="border p-2 bg-gray-100">{el.contactNumber}</td>
                <td>
                  <button
                    className="p-1 border-2 ml-2 rounded-lg text-white bg-green-400"
                    onClick={() => navigate(`edit/${el._id}`)}
                  >
                    Edit
                  </button>
                  <button
                    className="p-1 border-2 ml-2 rounded-lg text-white bg-red-400"
                    onClick={() => removeUser(el._id)}
                  >
                    delete
                  </button>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default UserItem;
