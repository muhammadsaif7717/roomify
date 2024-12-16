import { getRoomById } from '@/lib/getRoomById';
import Image from 'next/image';
import React from 'react';

const RoomDetailsPage = async ({ params }) => {
    const { id } = await params; // Destructure the id from params
    const room = await getRoomById(id); // Fetch room details using the id

    // Check if room data exists
    if (!room) {
        return (
            <div>
                <h1>Room not found</h1>
                <p>The requested room does not exist or could not be fetched.</p>
            </div>
        );
    }

    // Render room details
    return (
        <div className="flex items-center justify-center min-h-[calc(100vh-150px)] bg-gray-100">
            <div className="card p-10 bg-white shadow-xl">
                <figure>
                    <Image
                        height={1080}
                        width={1080}
                        src={room.image}
                        alt={`Apartment ${room.apartmentNo}`}
                        className='rounded-2xl'
                    />
                </figure>
                <div className="pt-10">
                    <p><strong>Apartment No:</strong> {room.apartmentNo}</p>
                    <p><strong>Block Name:</strong> {room.blockName}</p>
                    <p><strong>Floor No:</strong> {room.floorNo}</p>
                    <p><strong>Rent:</strong> ${room.rent}</p>
                    <p><strong>Status:</strong> {room.status}</p>
                    <div className='card-actions'>
                        <button className='btn'>
                            {room.agreementButton}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomDetailsPage;
