import React, { useEffect } from "react";
import ProfileSidebar from "../components/profile/ProfileSidebar";
import { Outlet } from "react-router";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="container">
      <div className="sm:flex">
        <div className="sm:w-1/3 py-6 mr-5">
          <ProfileSidebar userImg={user.profile_pic} />
        </div>
        <div className="flex-1">
          <Outlet context={user} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
