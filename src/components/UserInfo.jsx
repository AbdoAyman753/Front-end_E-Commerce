import React from "react";
import { useOutletContext } from "react-router";

const UserInfo = () => {
  const user = useOutletContext();
  return (
    <div className="ml-5  pt-10">
      {/* <ul>
        <li>
          name: <span className="ml-1">{user.name}</span>
        </li>
        <li>
          email: <span className="ml-1">{user.email}</span>
        </li>
      </ul> */}
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 border">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr className="border">
            <th scope="col" className="px-6 py-3 border">
              User name
            </th>
            <th scope="col" className="px-6 py-3 border">
              Email
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope="col" className="px-6 py-3 border">
              {user.name}
            </td>
            <td scope="col" className="px-6 py-3 border">
              {user.email}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserInfo;
