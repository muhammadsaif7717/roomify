'use client'
import { getAllRooms } from "@/lib/getAllRooms";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const FeaturedRooms = () => {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchData = async () => {
            const fetchedRooms = await getAllRooms();
            const minRent = Math.min(...fetchedRooms.map((room) => room.rent));
            const featuredRooms = fetchedRooms.filter((room) => room.rent > minRent).slice(0, 6);
            setRooms(featuredRooms);
            setLoading(false)
        };
        fetchData();
    }, []);



    if (loading) {
        return (
            <div className='min-h-[calc(100vh-165px)] flex items-center justify-center'>
                <span className="loading loading-spinner text-info text-9xl"></span>
            </div>
        )
    }

    return (
        <div>
            {!loading && <div className="min-h-screen max-w-screen-2xl mx-auto flex flex-col items-center justify-center my-10">
                <h1 className="text-3xl font-bold mb-6">Featured Rooms</h1>

                {/* Rooms Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center p-5 lg:p-0 gap-5">
                    {
                        rooms.map((room) => (
                            <div
                                key={room._id}
                                className="p-5 border border-gray-300 rounded shadow hover:shadow-lg transition"
                            >
                                <Link href={`/room-details/${room._id}`}>
                                    <Image
                                        height={1080}
                                        width={1080}
                                        src={room.image}
                                        alt={`Room ${room.apartmentNo}`}
                                        className="w-full h-40 object-cover rounded mb-4"
                                    />
                                    <h2 className="text-lg font-semibold text-gray-800 mb-2">
                                        Block {room.blockName}, Apartment {room.apartmentNo}
                                    </h2>
                                    <p className="text-sm text-gray-600 mb-1">Floor No: {room.floorNo}</p>
                                    <p className="text-sm text-gray-600 mb-1">Rent: ${room.rent}</p>
                                    <p
                                        className={`text-sm font-semibold mb-2 ${room.status === "available" ? "text-green-600" : "text-red-600"
                                            }`}
                                    >
                                        Status: {room.status}
                                    </p>
                                </Link>
                            </div>
                        ))
                    }
                </div>
                <div className="mt-10">
                    <Link href={`/rooms`} className="btn btn-primary bg-blue-500 border-none text-white hover:bg-blue-600">Show more...</Link>
                </div>
            </div>}
        </div>
    );
};

export default FeaturedRooms;
