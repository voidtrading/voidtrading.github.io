<script>
	import skills from '$lib/Skills';
</script>

<svelte:head>
	<title>VOID TRADING — About</title>
</svelte:head>

<div class="container">
	<main>
		<h1>About</h1>
		<p>
			VOID TRADING is a quantitative-driven trading firm with an interest in various markets.
			<br/>
			<br/>

			We execute automated trading using machines, not human hands, through a precise understanding of the markets. Additionally, we develop low-latency in-house trading systems, primarily written in Rust, to respond quickly to market changes.

			<br/>
			<br/>
			“VOID” means an empty space or void, symbolizing the exploration and discovery of new possibilities. In other words, we strive to be an innovative trading company that fills existing gaps and pushes boundaries.
		</p>
<!--		<h2>Skills</h2>-->
<!--		{#each Object.entries(skills) as [section, technologies]}-->
<!--			<ul>-->
<!--				<li>-->
<!--					<h4>-->
<!--						{section}:-->
<!--					</h4>-->
<!--					<div class="list">-->
<!--						{#each technologies as technology}-->
<!--							<div>-->
<!--								{technology}-->
<!--							</div>-->
<!--						{/each}-->
<!--					</div>-->
<!--				</li>-->
<!--			</ul>-->
<!--		{/each}-->
	</main>
</div>

<style>
	.container {
		max-width: 900px;
		padding: 0;
		display: flex;
		justify-content: center;
	}

	main {
		max-width: 100%;
		min-height: 500px;
		text-align: left;
		margin: 0 auto;
		box-sizing: border-box;
	}

	h1 {
		font-weight: 700;
		margin: 0 0 50px 0;
		font-size: 36px;
		text-align: start;
	}

	h2 {
		margin-top: 50px;
	}

	.list {
		display: flex;
		flex-direction: column;
		gap: 30px;
	}

	@media (min-width: 900px) {
		.list {
			flex-direction: row;
		}
		main > h1 {
			font-size: 48px;
		}
	}
</style>
