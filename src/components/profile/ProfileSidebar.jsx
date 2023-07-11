/* eslint-disable react/prop-types */
"use client";

import { Sidebar } from "flowbite-react";
import { HiShoppingBag, HiUser } from "react-icons/hi";
import { BsBagCheckFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import { MdNoEncryption } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import useAuthenticate from "../../utils/useAuthenticate";

function ProfileSidebar({ userImg }) {
  const navigate = useNavigate();
  const { isAdmin } = useAuthenticate();

  return (
    <Sidebar aria-label="Default sidebar example" className="w-full h-[78vh]">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <div className="w-20 h-20 m-2 rounded-full">
            <img
              className="w-full h-full ring-2 ring-cyan-300 dark:ring-cyan-500 rounded-full"
              src={userImg}
              alt=""
            />
          </div>
          <Sidebar.Item
            icon={HiUser}
            className="cursor-pointer"
            onClick={() => navigate("info")}
          >
            <p>Information</p>
          </Sidebar.Item>
          <Sidebar.Item
            icon={AiFillEdit}
            className="cursor-pointer"
            onClick={() => navigate("edit")}
          >
            <p>Edit Information</p>
          </Sidebar.Item>
          <Sidebar.Item
            icon={MdNoEncryption}
            className="cursor-pointer"
            onClick={() => navigate("edit-password")}
          >
            <p>Edit Password</p>
          </Sidebar.Item>
          {!isAdmin && (
            <>
              <Sidebar.Item
                icon={HiShoppingBag}
                className="cursor-pointer"
                onClick={() => navigate("games")}
              >
                <p>Games</p>
              </Sidebar.Item>
              <Sidebar.Item
                icon={BsBagCheckFill}
                className="cursor-pointer"
                onClick={() => navigate("orders")}
              >
                <p>Orders</p>
              </Sidebar.Item>
            </>
          )}
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
export default ProfileSidebar;
