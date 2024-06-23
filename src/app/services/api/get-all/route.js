import { connectDB } from "@/lib/connectDB";

export const GET = async () => {
  const db = await connectDB();
  const serviceCollection = db.collection("services");
  try {
    const resp = await serviceCollection.find().toArray();
    return Response.json(resp);
  } catch (error) {
    console.log(error);
  }
};
