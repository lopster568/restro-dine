import connectDb from "@/utils/mongo-client";
import MenuItems from "@/models/menu-items";

export async function GET() {
  try {
    await connectDb();
    console.log("Connected to database");
    const items = await MenuItems.find({}, { category: 1 });
    const categories = items.map((item) => item.category);
    let uniqueCategories = categories.reduce((acc, cur) => {
      if (!acc.includes(cur)) {
        acc.push(cur);
      }
      return acc;
    }, []);
    const labelledCategories = uniqueCategories.map((category: string) => ({
      value: category,
      label: category,
    }));
    return Response.json(labelledCategories);
  } catch (err) {
    console.log(err);
  }
}

export async function POST(request: Request) {
  try {
    await connectDb();
    console.log("Connected to database");
    const items = await MenuItems.create(await request.json());
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
