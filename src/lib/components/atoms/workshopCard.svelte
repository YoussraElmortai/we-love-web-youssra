<script>
	export let data;
	console.log(data);
</script>

<section class="card-wrapper">
	{#each data.workshops as workshop}
		<article>
			<h2>{workshop.workshopTitle}</h2>
			<a href={workshop.workshopSlug}>Learn more</a>	
			<img src={workshop.workshopImg.url} alt="{workshop.workshopTitle}">
		</article>
	{/each}
</section>
<style>
	.card-wrapper {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 1.5rem;
		justify-content: center;
		padding: 2rem;
	}

	.card-wrapper h2{
		position: relative;
		color: aliceblue;
		height: 7.5rem;
		z-index: 3;
		padding: 0.3rem;
	}

	.card-wrapper article {
		height: 15rem;
		width: 10rem;
		background-color: var(--Light-grey);
		border: solid 2px var(--accent-color);
		border-radius: 5px;
		overflow: hidden;
	}

	.card-wrapper img{
		position: relative;
		height: 15rem;
		width: 10rem;
		top: -9rem;
	}

	a {
		position: relative;
		text-decoration: none;
		font-size: 18px;
		color: white;
		background-color: var(--accent-color);
		border: 2px solid var(--accent-color);
		padding: 0.4rem;
		top: 5rem;
		left: 2.5rem;
		z-index: 2;
	}

	a:hover{
		border: 2px solid aliceblue;
	}
</style>
