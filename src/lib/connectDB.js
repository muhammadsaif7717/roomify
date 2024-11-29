import { MongoClient, ServerApiVersion } from "mongodb";

let db;

export const connectDb = async () => {
    if (db) return db;

    try {
        const uri = process.env.NEXT_PUBLIC_MONGODB_URI;
        const client = new MongoClient(uri, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            }
        });
        const db = client.db('RoomiFyDB')
        console.log(`Connected to mongoDB`);
        return db;
    } catch (error) {
        console.log(error);
    }
}