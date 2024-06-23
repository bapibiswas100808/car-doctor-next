import { connectDB } from "@/lib/connectDB";

export const GET = async (request, { params }) => {
  const db = await connectDB();
  const bookingsCollection = db.collection("bookings");
  try {
    const resp = await bookingsCollection
      .find({ email: params.email })
      .toArray();
    return Response.json(resp);
  } catch (error) {
    console.log(error);
  }
};
