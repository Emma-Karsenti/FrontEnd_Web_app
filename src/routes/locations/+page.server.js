import * as api from '$lib/api';
import {redirect} from "@sveltejs/kit";


/** @type {import('./$types').PageServerLoad} */
export async function load({ locals, cookies }) {
    let token = cookies.get('jwt')
    console.log(token)
    if (token) {

        const [articles, user] = await Promise.all([
            api.get(`locations`, token),
            api.get('users/me',token)
        ]);
        return {
            roger: articles,
            token,
            user
        };
    }
    else {
        throw redirect(307, '/login');
    }
}
export const actions = {
    createLocation: async ({ cookies, request }) => {

        let token = cookies.get('jwt')
        const data = await request.formData();
        const location = {
            geolocation:{
                coordinates: [parseFloat(data.get('lattitude')),parseFloat(data.get('longitude'))],
                type: "Point"
            },
            filmType: data.get('filmType'),
            filmProducerName: data.get('filmProducerName'),
            endDate: data.get('endDate'),
            filmName: data.get('filmName'),
            district: data.get('district'),
            sourceLocationId: data.get('sourceLocationId'),
            filmDirectorName: data.get('filmDirectorName'),
            address: data.get('address'),
            startDate: data.get('startDate'),
            year: data.get('year'),

        };
        console.log(location)
        await api.post(
            `locations/`,
            location,
            cookies.get('jwt')
        );
    },

    editLocation: async ({ cookies,url,request }) => {
        const id = url.searchParams.get('id');
        let token = cookies.get('jwt')
        const data = await request.formData();
        const location = {
            geolocation:{
                coordinates: [parseFloat(data.get('lattitude')),parseFloat(data.get('longitude'))],
                type: "Point"
            },
            filmType: data.get('filmType'),
            filmProducerName: data.get('filmProducerName'),
            endDate: data.get('endDate'),
            filmName: data.get('filmName'),
            district: data.get('district'),
            sourceLocationId: data.get('sourceLocationId'),
            filmDirectorName: data.get('filmDirectorName'),
            address: data.get('address'),
            startDate: data.get('startDate'),
            year: data.get('year')
        };
        console.log(id)
        console.log(token)
        console.log(location)
        await api.patch(`locations/${id}`, token,location);
    },

    deleteLocation: async ({ cookies,url }) => {
        const id = url.searchParams.get('id');
        await api.del(`locations/${id}`, cookies.get('jwt'));
    },

};