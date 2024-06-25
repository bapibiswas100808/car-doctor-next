import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const db = await connectDB();
    if (!db) {
      throw new Error("Database connection failed");
    }

    const serviceCollection = db.collection("services");
    const services = await serviceCollection.find().toArray();

    return NextResponse.json(services);
  } catch (error) {
    console.error("Error fetching services", error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
};
