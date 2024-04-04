import connectDb from "@/utils/mongo-client";
import MenuItems from "@/models/menu-items";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id");
  try {
    await connectDb();
    console.log("Connected to database");
    const item = await MenuItems.findById(id);
    return Response.json({ item });
  } catch (err) {
    console.log(err);
  }
}

export async function PATCH(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  try {
    await connectDb();
    console.log("Connected to database");
    const data = await request.json();
    const items = await MenuItems.updateOne({ _id: id }, data);
    return Response.json({ items });
  } catch (err) {
    console.log("Error", err);
  }
}
