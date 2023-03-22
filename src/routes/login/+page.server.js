import {fail, redirect} from '@sveltejs/kit';
import * as api from '$lib/api.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({locals}) {
    if (locals.user) throw redirect(307, '/');
}

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({cookies, request}) => {
        const data = await request.formData();

        const body = await api.post('users/login', {

            username: data.get('username'),
            password: data.get('password')
        });

        if (body.errors) {
            return fail(401, body);
        }

        const value = body.jwt;
        cookies.set('jwt', value);

        throw redirect(307, '/Home');
    }
};
