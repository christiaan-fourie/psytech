import connectMongoDB from "@/libs/mongodb";
import ContactForm from "@/models/ContactForm";
import { NextResponse } from "next/server";

export async function POST(request) {

    // Get the IP Address
    const ip = request.headers.get("x-real-ip") || request.headers.get("x-forwarded-for") || request.headers.get("cf-connecting-ip") || request.headers.get("fastly-client-ip") || request.headers.get("x-cluster-client-ip") || request.headers.get("x-forwarded") || request.headers.get("forwarded-for") || request.headers.get("forwarded");

    // Get the name, email, interest, subscription        

    // Put together the data
    const { name, email, interest } = await request.json();

    await connectMongoDB();
    // Create a new ContactForm document
    await ContactForm.create({ name, email, interest, ip });
    console.log("Added to DB");
    // Return a 201 response
    return NextResponse.json({ message: "Details Received" }, { status: 201 });
}
