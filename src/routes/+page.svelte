<script>
	import { goto, beforeNavigate, afterNavigate } from '$app/navigation';
	const handleClick = () => {
		// Navigate to the home page
		// $app comes from the sveltekit app
		// replaceState: true -> replace the current state in the browser history
		// goto('/products', { replaceState: true });
		goto('/products');
	};

	beforeNavigate((navigation) => {
		console.log({ before: navigation });
	});

	afterNavigate((navigation) => {
		console.log({ after: navigation });
	});
</script>

<h1>SvelteKit Tutorial for Beginners</h1>
<h2>Routing</h2>
<p>
	Visit <a href="https://www.youtube.com/playlist?list=PLC3y8-rFHvwjifDNQYYWI6i06D7PjF0Ua"
		>YouTube</a
	> for the tutorial.
</p>
<section>
	<p>Next: 12</p>
	<a href="/about">About</a>
</section>

<button on:click={handleClick}>Place order</button>

<section>
	<strong>Contents</strong>
	<p>8: Catch all routes -> <a href="/docs">docs</a></p>
	<p>9: Optional parameters -> <a href="/marketing">marketing</a></p>
	<p>10: Route navigation -> <a href="/products">products</a></p>
	<p>11: Navigating programmatically -> <a href="/">Home: place order</a></p>
</section>
