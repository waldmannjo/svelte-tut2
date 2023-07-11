<script>
	import { page } from '$app/stores';
	// productId is the name of the folder
	const { productId, reviewId } = $page.params;
</script>

<h1>Review {reviewId} of Product {productId}</h1>
