import { NextResponse } from "next/server";
const { connectDb } = require("@/lib/connectDB");

export const GET = async () => {
    try {
        const db = await connectDb();
        const roomsCollection = db.collection('rooms');
        const res = await roomsCollection.find().toArray();
        return NextResponse.json(res); // Ensure a response is returned
    } catch (error) {
        console.error("Error fetching rooms:", error);
        return NextResponse.json(
            { error: "Failed to fetch rooms. Please try again later." },
            { status: 500 } // Return a 500 Internal Server Error status
        );
    }
};