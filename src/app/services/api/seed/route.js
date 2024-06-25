import { connectDB } from "@/lib/connectDB";
import { services } from "@/lib/services";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const db = await connectDB();
    const serviceCollection = db.collection("services");
    await serviceCollection.deleteMany();
    await serviceCollection.insertMany(services);

    return NextResponse.json({ message: "Seeded successfully" });
  } catch (error) {
    console.error("Error seeding the database", error);
    return NextResponse.json(
      { error: "Failed to seed the database" },
      { status: 500 }
    );
  }
};
