import { getRooms } from "@/hooks/getRooms";
import React from "react";

const FeaturedRooms =  () => {
    const rooms =  getRooms(); // Fetch rooms
console.log(rooms);
    return (
        <div className="min-h-screen max-w-screen-2xl mx-auto flex items-center justify-center">
            {/* <div>
                <h1 className="text-3xl font-bold mb-6">Featured Rooms</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center p-5 lg:p-0 gap-5">
                    {rooms.length > 0 ? (
                        rooms.map((room) => (
                            <div
                                key={room._id}
                                className="p-5 border border-gray-300 rounded shadow hover:shadow-lg transition"
                            >
                                <h2 className="text-lg font-semibold text-gray-800">
                                    Room Status: {room.status}
                                </h2>
                                <p className="text-sm text-gray-500">
                                    Room ID: {room._id}
                                </p>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500">No rooms available.</p>
                    )}
                </div>
            </div> */}
        </div>
    );
};

export default FeaturedRooms;
