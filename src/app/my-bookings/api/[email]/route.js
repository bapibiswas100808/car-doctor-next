import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const db = await connectDB();
  const bookingsCollection = db.collection("bookings");
  try {
    const resp = await bookingsCollection
      .find({ email: params.email })
      .toArray();
    return NextResponse.json(resp);
  } catch (error) {
    console.log(error);
    return NextResponse.json({message:"something wrong"});
  }
};
