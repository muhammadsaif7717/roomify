'use client'
import { getAllRooms } from "@/lib/getAllRooms";
import Image from "next/image";
import { useState, useEffect } from "react";

const FeaturedRooms = () => {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sortedRooms, setSortedRooms] = useState([]);
    const [sortOrder, setSortOrder] = useState("lowToHigh");

    useEffect(() => {
        const fetchData = async () => {
            const fetchedRooms = await getAllRooms();
            // const minRent = Math.min(...fetchedRooms.map((room) => room.rent));
            // const featuredRooms = fetchedRooms.filter((room) => room.rent > minRent).slice(0, 6);
            setRooms(fetchedRooms);
            setSortedRooms(fetchedRooms); // Initialize sortedRooms
            setLoading(false)
        };
        fetchData();
    }, []);

    // Sort rooms when sortOrder changes
    useEffect(() => {
        const sorted = [...rooms].sort((a, b) =>
            sortOrder === "lowToHigh" ? a.rent - b.rent : b.rent - a.rent
        );
        setSortedRooms(sorted);
    }, [sortOrder, rooms]);


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

                {/* Sorting Buttons */}
                <div className="flex space-x-4 mb-6">
                    <button
                        onClick={() => setSortOrder("lowToHigh")}
                        className={`px-4 py-2 text-sm font-medium rounded ${sortOrder === "lowToHigh"
                            ? "bg-blue-500 text-white"
                            : "bg-gray-200 text-gray-800"
                            }`}
                    >
                        Rent: Low to High
                    </button>
                    <button
                        onClick={() => setSortOrder("highToLow")}
                        className={`px-4 py-2 text-sm font-medium rounded ${sortOrder === "highToLow"
                            ? "bg-blue-500 text-white"
                            : "bg-gray-200 text-gray-800"
                            }`}
                    >
                        Rent: High to Low
                    </button>
                </div>

                {/* Rooms Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center p-5 lg:p-0 gap-5">
                    {
                        sortedRooms.map((room) => (
                            <div
                                key={room._id}
                                className="p-5 border border-gray-300 rounded shadow hover:shadow-lg transition"
                            >
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
                                <button
                                    className={`px-4 py-2 text-sm font-medium text-white rounded ${room.status === "available"
                                        ? "bg-blue-500 hover:bg-blue-600"
                                        : "bg-gray-400 cursor-not-allowed"
                                        }`}
                                    disabled={room.status !== "available"}
                                >
                                    {room.agreementButton}
                                </button>
                            </div>
                        ))
                    }
                </div>
            </div>}
        </div>
    );
};

export default FeaturedRooms;
