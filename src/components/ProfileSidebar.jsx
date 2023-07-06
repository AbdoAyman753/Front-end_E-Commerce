/* eslint-disable react/prop-types */
"use client";

import { Sidebar } from "flowbite-react";
import { HiArrowSmLeft, HiShoppingBag, HiUser } from "react-icons/hi";
import { BsBagCheckFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import { MdNoEncryption } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import useLogout from "../utils/useLogout";

function ProfileSidebar({ userImg }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logout = useLogout();
  return (
    <Sidebar aria-label="Default sidebar example" className="w-full">
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
          {/* <Sidebar.Item
            icon={HiArrowSmLeft}
            onClick={() => logout()}
            className="cursor-pointer"
          >
            Sign Out
          </Sidebar.Item> */}
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
export default ProfileSidebar;
