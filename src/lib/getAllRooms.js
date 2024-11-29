import axios from "axios";
import { getUrl } from "../hooks/getUrl";

export const getAllRooms = async () => {
    try {
        const url = getUrl();
        const res = await axios.get(`${url}/api/get-all-rooms`);
        const data= await res.data;
        return data;
    } catch (error) {
        console.log(error);
        return [];
    }
}