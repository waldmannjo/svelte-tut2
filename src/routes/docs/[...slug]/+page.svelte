<script>
	import { page } from '$app/stores';
	console.log($page.params.slug);

	//
	const slugArray = $page.params.slug.split('/');
</script>

<!-- catch all route -->
<h1>docs home page</h1>
{#if slugArray.length === 1}
	<h1>Viewing docs for feature {slugArray[0]}</h1>
{:else if slugArray.length === 2}
	<h1>Viewing docs for feature {slugArray[0]} and concept {slugArray[1]}</h1>
{/if}
