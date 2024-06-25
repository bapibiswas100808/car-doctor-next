import { connectDB } from "@/lib/connectDB";
import { services } from "@/lib/services";
import { NextResponse } from "next/server";

export const GET = async () => {
  const db = await connectDB();
  const serviceCollection = db.collection("services");
  try {
    await serviceCollection.deleteMany();
    const resp = await serviceCollection.insertMany(services);
    return NextResponse.json({ message: "seeded successfully" });
  } catch (error) {
    console.log(error);
  }
};
