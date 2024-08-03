<script>
	import members from '$lib/Members';
	import projects from '$lib/Projects';
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

		<div class="line"></div>
		<h1>Members</h1>
		<div class="projectContainer">
			{#each members as member}
				<div class="project">
					<div class="header">
						<h2>
							{member.name}
						</h2>
						<div class="techsContainer">
							<div class="techs">
								<ul>
									<li>
										{member.responsibility}
									</li>
									<li>
										{member.description}
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				&nbsp; &nbsp;
			{/each}
		</div>
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
		padding: 20px;
		min-height: 500px;
		text-align: left;
		margin: 0 auto;
		box-sizing: border-box;
	}

	h1 {
		font-weight: 700;
		margin: 0 0 35px 0;
		font-size: 36px;
		text-align: start;
	}

	h2 {
		margin-top: 20px;
	}

	.projectContainer {
		width: 100%;
		max-width: 900px;
		display: flex;
		justify-content: center;
		box-sizing: border-box;
		text-align: center;
		padding: 2px;
		/*margin: 0 auto;*/
		text-align: center;
	}

	a {
		text-decoration: none;
	}

	.projectContainer .projects {
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 40px;
		margin-top: 30px;
	}

	.project {
		text-align: start;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		color: white;
		background: #111;
		padding: 2rem;
		width: 100%;
		border-radius: 5px;
		transition: transform 0.2s ease-in-out;
		border-radius: 25px;
	}

	.project p {
		font-weight: 100;
		color: #708090;
	}

	.techsContainer {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
	}

	.techs {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.techs > div {
		margin: 0 0 0 10px;
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
