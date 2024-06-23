"use client";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

const Page = () => {
  const session = useSession();
  const [booking, setBooking] = useState([]);
  const loadData = async () => {
    const resp = await fetch(
      `http://localhost:3000/my-bookings/api/${session?.data?.user?.email}`
    );
    const data = await resp.json();
    console.log(data);
    setBooking(data);
    return data;
  };
  useEffect(() => {
    loadData();
  }, [session]);
  return (
    <div className="max-w-[1170px] mx-auto">
      <h2 className="text-center text-3xl font-bold py-10">My Bookings</h2>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Service Name</th>
                <th>Price</th>
                <th>Booking Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {booking?.length > 0 &&
                booking?.map((book, idx) => (
                  <tr key={idx} className="bg-base-200">
                    <th>{idx + 1}</th>
                    <td>{book?.service_name}</td>
                    <td>{book?.service_price}</td>
                    <td>{book?.date}</td>
                    <td>
                      <div className="flex gap-5">
                        <button className="btn btn-primary text-white bg-green-500 border-0">
                          Update
                        </button>
                        <button className="btn btn-primary text-white bg-red-500 border-0">
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Page;
