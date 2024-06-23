"use client";
import { getServicesDetails } from "@/Services/getServices";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Booking = ({ params }) => {
  const session = useSession();
  const [service, setService] = useState({});
  const loadData = async () => {
    const details = await getServicesDetails(params.id);
    setService(details);
  };

  const handleCheckOut = async (e) => {
    e.preventDefault();
    const newService = {
      firstName: e.target.fName.value,
      lastName: e.target.lName.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      message: e.target.message.value,
      price: e.target.price.value,
      date: e.target.date.value,
      service_name: service?.title,
      Service_id: service?._id,
      service_price: service?.price,
    };
    const resp = await fetch("http://localhost:3000/booking/api/new-booking", {
      method: "POST",
      body: JSON.stringify(newService),
      headers: {
        "content-type": "application/json",
      },
    });
    if (resp) {
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Your Booking has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  useEffect(() => {
    loadData();
  }, [params]);
  return (
    <div className="max-w-[1170px] mx-auto">
      <h2 className="text-center text-xl font-bold">
        Get Service:{service?.title}
      </h2>
      <div>
        <form onSubmit={handleCheckOut} action="">
          <div className="flex flex-col lg:flex-row gap-5">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">First Name</span>
              </div>
              <input
                type="text"
                name="fName"
                placeholder="First Name"
                defaultValue={session?.data?.user?.name.split(" ")[0]}
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Last Name</span>
              </div>
              <input
                type="text"
                name="lName"
                placeholder="Last Name"
                className="input input-bordered w-full"
                defaultValue={session?.data?.user?.name.split(" ")[1]}
              />
            </label>
          </div>
          {/* phone email */}
          <div className="flex flex-col lg:flex-row gap-5">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Phone</span>
              </div>
              <input
                type="number"
                name="phone"
                placeholder="Phone"
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Email</span>
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                defaultValue={session?.data?.user?.email}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          {/* due& address */}
          <div className="flex flex-col lg:flex-row gap-5">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Price</span>
              </div>
              <input
                type="number"
                name="price"
                placeholder="Price"
                defaultValue={service?.price}
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">date</span>
              </div>
              <input
                type="date"
                defaultValue={new Date().getDate()}
                name="date"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div>
            <textarea
              className="textarea textarea-bordered w-full mt-5"
              placeholder="Your Message"
              name="message"
            ></textarea>
          </div>
          <div>
            <button type="submit" className="btn btn-primary text-white w-full">
              Check Out
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Booking;
