import { browser } from '$app/environment';
import { goto } from '$app/navigation';
import { redirect } from '@sveltejs/kit';

export async function load() {
  const location = '/sign-in';

  if (browser) return await goto(location);
  else throw redirect(302, location);
}
