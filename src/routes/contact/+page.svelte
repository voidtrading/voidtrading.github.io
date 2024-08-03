<script>
	import skills from '$lib/Skills';
</script>

<svelte:head>
	<title>VOID TRADING — Contact</title>
</svelte:head>

<div class="container">
	<main>
		<h1>Contact</h1>
		<div class="projectContainer">
			<div class="projects">
				<div class="project">
					<div class="header">
						<h2>
							Address
						</h2>
					</div>
					<p>
							VOID TRADING, 6F, 114 Bongeunsa-ro, Gangnam-gu, Seoul, Korea
					</p>
				</div>

				<div class="project">
					<div class="header">
						<h2>
							Email
						</h2>
					</div>
					<p>
						void@void-trading.com
					</p>
				</div>
			</div>
		</div>

		<div class="line"></div>
		<h2>Join our journey</h2>
		We are not actively hiring, but we will look at applications. Feel free to contact us anytime.
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
		/*padding: 15px;*/
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
        margin-top: 5px;
    }

    .list {
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

	.projectContainer {
		width: 100%;
		max-width: 900px;
		display: flex;
		justify-content: center;
		box-sizing: border-box;
		text-align: center;
		padding: 1em;
		margin: 0 auto;
		text-align: center;
	}

	.note {
		opacity: 0.5;
		margin: 0;
		max-width: 900px;
		text-align: left;
	}

	a {
		text-decoration: none;
	}

	.projectContainer .projects {
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 20px;
		margin-top: 1px;
	}

	.project {
		text-align: start;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		color: white;
		/*background: #555555;*/
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

	.projects {
		width: 100%;
		margin: 10px auto;
		display: grid;
		grid-gap: 1rem;
		grid-template-columns: 1fr;
		margin-bottom: 10px;
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
	}
</style>
