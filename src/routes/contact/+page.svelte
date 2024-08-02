<script>
	import skills from '$lib/Skills';
</script>

<svelte:head>
	<title>VOID TRADING — Contact</title>
</svelte:head>

<div class="container">
	<main>

		<h1>Contact</h1>
					<ul>
						<li>
							<h2>
								Address
							</h2>
							<div class="list">
								<div>
										VOID TRADING, 6F, 114 Bongeunsa-ro, Gangnam-gu, Seoul, Korea
								</div>
							</div>
						</li>
					</ul>

					<ul>
						<li>
							<h2>
								Email
							</h2>
							<div class="list">
								<div>
									void@void-trading.com
								</div>
							</div>
						</li>
					</ul>
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
