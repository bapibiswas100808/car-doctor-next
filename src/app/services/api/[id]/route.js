import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const db = await connectDB();
  const serviceCollection = await db.collection("services");
  try {
    const resp = await serviceCollection.findOne({ _id: params.id });
    return NextResponse.json(resp);
  } catch (error) {
    console.log(error);
  }
};
