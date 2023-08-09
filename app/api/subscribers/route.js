import connectMongoDB from "@/libs/mongodb";
import EmailSubscriber from "@/models/EmailSubscriber";
import { NextResponse } from "next/server";

export async function POST(request) {

    // Get the IP Address
    const ip = request.headers.get("x-real-ip") || request.headers.get("x-forwarded-for") || request.headers.get("cf-connecting-ip") || request.headers.get("fastly-client-ip") || request.headers.get("x-cluster-client-ip") || request.headers.get("x-forwarded") || request.headers.get("forwarded-for") || request.headers.get("forwarded");

    // Get the subscriberEmail and date
    const { subscriberEmail } = await request.json();

    await connectMongoDB();
    await EmailSubscriber.create({ subscriberEmail, ip });
    return NextResponse.json({ message: "Email Subscribed" }, { status: 201 });
}

// export async function GET() {
//     await connectMongoDB();
//     const emailSubscribers = await EmailSubscriber.find();
//     return NextResponse.json({ emailSubscribers });
// }

// export async function DELETE(request) {
//   const id = request.nextUrl.searchParams.get("id");
//   await connectMongoDB();
//   await Topic.findByIdAndDelete(id);
//   return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
// }