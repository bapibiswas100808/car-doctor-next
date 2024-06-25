"use client";
import { useSession } from "next-auth/react";
import React from "react";
import Swal from "sweetalert2";

const Page = ({ params }) => {
  const session = useSession();
  const handleUpdate = async (e) => {
    e.preventDefault();
    const newService = {
      firstName: e.target.fName.value,
      lastName: e.target.lName.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      message: e.target.message.value,
      date: e.target.date.value,
    };
    const resp = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/my-bookings/update/${params.id}`,
      {
        method: "PATCH",
        body: JSON.stringify(newService),
        headers: {
          "content-type": "application/json",
        },
      }
    );
    if (resp) {
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Your Booking has been updated",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
    <div className="max-w-[1170px] mx-auto px-3 lg:px-0">
      <div>
        <form onSubmit={handleUpdate} action="">
          <div className="flex flex-col lg:flex-row gap-5">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">First Name</span>
              </div>
              <input
                type="text"
                name="fName"
                readOnly
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
                readOnly
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
                readOnly
                placeholder="Email"
                defaultValue={session?.data?.user?.email}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          {/* due& address */}
          <div className="flex flex-col lg:flex-row gap-5">
            {/* <label className="form-control w-full">
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
            </label> */}
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
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
