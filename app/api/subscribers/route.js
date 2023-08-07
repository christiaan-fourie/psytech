import connectMongoDB from "@/libs/mongodb";
import EmailSubscriber from "@/models/EmailSubscriber";
import { NextResponse } from "next/server";

export async function POST(request) {
    console.log(request);

    const { subscriberEmail } = await request.json();
    await connectMongoDB();
    await EmailSubscriber.create({ subscriberEmail });
    return NextResponse.json({ message: "Email Added" }, { status: 201 });
}

export async function GET() {
    await connectMongoDB();
    const emailSubscribers = await EmailSubscriber.find();
    return NextResponse.json({ emailSubscribers });
}

// export async function DELETE(request) {
//   const id = request.nextUrl.searchParams.get("id");
//   await connectMongoDB();
//   await Topic.findByIdAndDelete(id);
//   return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
// }