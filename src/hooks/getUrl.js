export const getUrl = () => {
    try {
        return process.env.NEXT_PUBLIC_URL;
    } catch (error) {
        console.log(error);
        return [];
    }
}