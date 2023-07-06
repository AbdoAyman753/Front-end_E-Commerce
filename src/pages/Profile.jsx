import React, { useEffect } from "react";
import ProfileSidebar from "../components/ProfileSidebar";
import { Outlet } from "react-router";
import { useSelector } from "react-redux";

const USER = {
  _id: 1,
  name: "user",
  email: "user@gmail.com",
  profilePic:
    "https://image.lexica.art/full_jpg/7515495b-982d-44d2-9931-5a8bbbf27532",
  games: [
    {
      _id: 1,
      product_name: "1st game",
      description:
        " minus animi vel alias corporis quibusdam tempore possimus quia voluptatibus!",
      price: 25,
      categoryId: 4,
      recently_added: true,
      imgs_links:
        "https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/qi3gqverqthxatrgu18v/fortnite-logo2?fimg-ssr-default",
    },
    {
      _id: 2,
      product_name: "2nd game",
      description: "us quia accusantium maiores saepe blanditiis enim quis ",
      price: 18,
      categoryId: 1,
      recently_added: false,
      imgs_links:
        "https://mg-static.prod-my.games/media/games/ca677b23226c02f5cdeedd4d532f4b61.jpg",
    },
    {
      _id: 3,
      product_name: "3rd game",
      description: "Lorem ipsum dolor sit amet consectetur",
      price: 37,
      categoryId: 3,
      recently_added: false,
      imgs_links:
        "https://assets-prd.ignimgs.com/2022/12/22/biggest-games-2023-1671751913499.jpg?width=1280",
    },
    {
      _id: 4,
      product_name: "4th game",
      description: " Optio ipsum, magni laudantium aspernatur atque minus ",
      price: 23,
      categoryId: 1,
      recently_added: true,
      imgs_links:
        "https://www.lifewire.com/thmb/vjMFGVMCiuNWuvxqlqarbBmOFkk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/offlinecars-asphalt8-5bf393bb46e0fb002650eb20.jpg",
    },
  ],
  orders: [
    { _id: 1, order_name: "order1", price: "150", date: "12-2-2023" },
    { _id: 2, order_name: "order2", price: "100", date: "21-2-2023" },
    { _id: 3, order_name: "order3", price: "250", date: "28-2-2023" },
  ],
};

const Profile = () => {
  const user = useSelector((state) => state.auth.user);
  console.log(user);
  useEffect(() => {}, []);
  return (
    <div className="container">
      <div className="sm:flex">
        <div className="sm:w-1/3">
          <ProfileSidebar userImg={user.profile_pic} />
        </div>
        <Outlet context={user} />
      </div>
    </div>
  );
};

export default Profile;
