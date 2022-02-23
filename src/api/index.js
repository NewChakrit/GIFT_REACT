import axios from 'axios';
// require('dotenv').config();

export const getPlacesData = async (type, sw, ne) => {
    try {
        const {
            data: { data },
        } = await axios.get(
            `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
            {
                params: {
                    bl_latitude: sw.lat,
                    tr_latitude: ne.lat,
                    bl_longitude: sw.lng,
                    tr_longitude: ne.lng,
                },
                headers: {
                    'x-rapidapi-key':
                        '1a399d060fmsh6843822b67e300bp1eabb9jsn9716c0c4763a',
                    'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
                },
            }
        );

        return data;
    } catch (error) {
        console.log(error);
    }
};
