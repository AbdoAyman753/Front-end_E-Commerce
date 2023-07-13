import React from "react";
import { useOutletContext } from "react-router";

const UserInfo = () => {
  const user = useOutletContext();
  return (
    <div className="mb-10 sm:pt-36">
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
