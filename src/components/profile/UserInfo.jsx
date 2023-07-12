import React from "react";
import { useOutletContext } from "react-router";

const UserInfo = () => {
  const user = useOutletContext();
  return (
    <div className="mb-10 sm:pt-36">
      {/* <ul>
        <li>
          name: <span className="ml-1">{user.name}</span>
        </li>
        <li>
          email: <span className="ml-1">{user.email}</span>
        </li>
      </ul> */}
      {/* <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 border">
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
              {user.user_name}
            </td>
            <td scope="col" className="px-6 py-3 border">
              {user.email}
            </td>
          </tr>
        </tbody>
      </table> */}
      <p className="text-white pb-3">
        <span className="w-[95px] inline-block">User Name: </span>
        <span>{user.user_name}</span>
      </p>
      <p className="text-white">
        <span className="w-[95px] inline-block">Email: </span>
        <span>{user.email}</span>
      </p>
    </div>
  );
};

export default UserInfo;
