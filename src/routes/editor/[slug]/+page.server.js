import { redirect } from '@sveltejs/kit';
import * as api from '$lib/api.js';
/** @type {import('./$types').PageServerLoad} */
export async function load({ locals, params }) {
	const response = await fetch(`https://location-app-back.onrender.com/locations/${params.slug}`, {
		method: 'GET',
		headers: { 'Authorization': `Bearer ${locals.user }`}


	}).then(res=>res.json());

	return{response}
}

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ locals, params, request }) => {
		const data = await request.formData();
		const location = {
			filmName: data.get('filmName').toString(),
			address: data.get('address'),
			district: data.get('district'),
			filmType: data.get('filmType'),
			filmProducerName: data.get('filmProducerName'),
			filmDirectorName: data.get('filmDirectorName'),
			sourceLocationId: data.get('sourceLocationId'),
			startDate: data.get('startDate'),
			endDate: data.get('endDate'),
			year: data.get('year')   };
		const body = await fetch(`https://location-app-back.onrender.com/locations/${params.slug}`,{
			method:'PATCH',
			headers:{
				'Content-Type':'application/json',
				'Authorization': `Bearer ${locals.user}`
			},
			body:JSON.stringify(location)
		}).then(res => res.json());
		if (body.errors) return fail(400, body);
		throw redirect(303, `/Locations`);}

};
