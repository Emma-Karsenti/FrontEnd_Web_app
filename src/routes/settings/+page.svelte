<script>
	import { enhance } from '$app/forms';
	import ListErrors from '$lib/ListErrors.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	/** @type {import('./$types').ActionData} */
	export let form;
</script>

<svelte:head>
	<title>Settings • Conduit</title>
</svelte:head>

<div class="settings-page">
	<div class="container page">

				<form use:enhance method="POST" action="?/logout">
					<button class="btn btn-outline-danger">Click here to logout</button>
				</form>
			</div>
		</div>
