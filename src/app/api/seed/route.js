import { connectDb } from "@/lib/connectDB";
import { rooms } from "@/lib/rooms";
import { NextResponse } from "next/server";


export const GET = async () => {
    const db = await connectDb();
    const roomsCollection = db.collection('rooms');

    try {
        await roomsCollection.deleteMany();
        await roomsCollection.insertMany(rooms);
        return NextResponse.json({ message: 'Rooms seeded successfully' })
    } catch (error) {
        console.log(error
        )
    }
}