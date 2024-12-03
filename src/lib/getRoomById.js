import axios from "axios";
import { getURL } from "./getURL";

export const getRoomById = async ( id ) => {
    try {

        const url = await getURL();
        const res = await axios.get(`${url}/api/get-room-by-id/${id}`);
        return res.data.res;
    } catch (error) {
        console.log(error);
    }
}