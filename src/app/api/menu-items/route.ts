import connectDb from "@/utils/mongo-client";
import MenuItems from "@/models/menu-items";

export async function GET() {
  try {
    await connectDb();
    console.log("Connected to database");
    const items = await MenuItems.find({});
    return Response.json({ items });
  } catch (err) {
    console.log(err);
  }
}

export async function POST(request: Request) {
  const { category, itemName, eta } = await request.json();
  try {
    await connectDb();
    console.log("Connected to database");
    const items = await MenuItems.create({
      category,
      name: itemName,
      eta,
    });
    return Response.json({ items });
  } catch (err) {
    console.log("Error", err);
  }
}

export async function DELETE(request: Request) {
  const { id } = await request.json();
  try {
    await connectDb();
    console.log("Connected to database");
    const deletedItem = await MenuItems.findByIdAndDelete(id);
    return Response.json({ deletedItem });
  } catch (err) {
    console.log("Error", err);
  }
}
