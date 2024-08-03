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
		padding: 20px;
		display: flex;
		justify-content: center;
	}

	main {
		max-width: 100%;
		/*padding: 20px;*/
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
		width: 80%;
		max-width: 900px;
		display: flex;
		flex-wrap: wrap; /* 자동 줄 바꿈을 허용 */
		justify-content: space-between; /* 요소를 가로 중앙으로 정렬 */
		box-sizing: border-box;
		text-align: center;
		padding: 2px;
		margin: 0 auto;
		/*text-align: center;*/
	}

	a {
		text-decoration: none;
	}

	.project {
		text-align: start;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		color: white;
		/*background: #111;*/
		background: #4169E1;
		padding: 2rem;
		width: calc(33.33% - 10px); /* 3개를 한 줄에 놓을 수 있도록 설정 */
		margin: 8px; /* 요소 간의 여백 */
		/*width: 100%;*/
		border-radius: 25px;
		transition: transform 0.2s ease-in-out;
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
		.container {
			padding: 0;
		}
		.project {
			width: calc(30% - 16px); /* 2개를 한 줄에 놓도록 조정 */
		}
	}

	/* 작은 화면에 대한 반응형 조정 */
	@media (max-width: 768px) {
		.project {
			width: calc(50% - 16px); /* 2개를 한 줄에 놓도록 조정 */
		}
	}

	@media (max-width: 480px) {
		.project {
			width: calc(100% - 16px); /* 1개를 한 줄에 놓도록 조정 */
		}
	}
</style>
