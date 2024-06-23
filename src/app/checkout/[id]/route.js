import { connectDB } from "@/lib/connectDB";

export const POST = async (request) => {
  const booking = request.json();
  const db = await connectDB();
  const bookingsCollection = db.collection("bookings");
  try {
    const resp = await bookingsCollection.insertOne(booking);
    return Response.json({ message: "Service Added Successfully" });
  } catch (error) {
    console.log(error);
  }
};
