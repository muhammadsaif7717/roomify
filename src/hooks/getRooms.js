import axios from "axios"

export const getRooms = async () => {
    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/api/get-rooms`)
        return res.data
    } catch (error) {
        console.log(error);
        return [];
    }
}