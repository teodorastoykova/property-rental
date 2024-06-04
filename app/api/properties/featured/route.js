import connectDB from "@/config/database";
import Property from "@/models/Property";

//get api/properties/featured
export const GET = async (request) => {
  try {
    await connectDB();

    const properties = await Property.find({
      is_Featured: true,
    });

    return new Response(JSON.stringify(properties), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("sth went wrong", { status: 500 });
  }
};
