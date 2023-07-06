import React from "react";
import { useOutletContext } from "react-router";

const UserOrders = () => {
  const { orders } = useOutletContext();

  if (orders.length == 0) return <h2>empty</h2>;
  return (
    <>
      {orders?.length && (
        <div className=" w-full mt-3 sm:ml-2 mb-4">
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 border">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  {/* <th scope="col" className="px-6 py-3">
                    Order name
                  </th> */}
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr
                    key={order._id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    {/* <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {order.order_name}
                    </th> */}
                    <td className="px-6 py-4">${order.totalPrice}</td>
                    <td className="px-6 py-4">{order.createdAt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      ;
    </>
  );
};

export default UserOrders;
