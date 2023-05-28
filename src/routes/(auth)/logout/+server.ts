import { error, redirect, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ locals }) => {
	const { error: err } = await locals.supabase.auth.signOut();
	if (err) {
		throw error(500, err.message);
	}
	throw redirect(303, '/');
};
