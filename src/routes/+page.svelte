<script>
	import { page } from '$app/stores';
	import ArticleList from '$lib/ArticleList/index.svelte';
	import Pagination from './Pagination.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	$: tag = $page.url.searchParams.get('tag');
	$: tab = $page.url.searchParams.get('tab') ?? 'all';
	$: page_link_base = tag ? `tag=${tag}` : `tab=${tab}`;
</script>

<svelte:head>
	<title>Web App</title>
</svelte:head>

<html>
<head>
	<link href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" rel="stylesheet">
	<style>
		body {
			margin: 0;
			padding: 0;
			font-family: Arial, sans-serif;
		}

		.hero-section {
			background: antiquewhite;
			background-size: cover;
			height: 600px;
			display: flex;
			justify-content: center;
			align-items: center;
			margin-bottom: 50px;
			padding-top: 600px;

		}

		.hero-section h1 {
			color: white;
			font-family: 'Playfair Display', serif;
			font-size: 3em;
		}


	</style>
</head>
</html>
