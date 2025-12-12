<script lang="ts">
	import members from '$lib/Members';
</script>

<svelte:head>
	<title>VOID TRADING — About</title>
</svelte:head>

<section class="page-hero page-hero--about">
	<div class="container">
		<div class="kicker">About</div>
		<h1>데이터와 시스템으로 일관된 의사결정을 만듭니다</h1>
		<p class="lead">
			VOID TRADING은 다양한 시장을 대상으로 정량적 연구를 수행하고<br />
			저지연 트레이딩 시스템을 기반으로 자동 집행합니다
		</p>
	</div>
</section>

<section class="section">
	<div class="container">
		<div class="grid grid-2">
			<div class="card">
				<div class="card-title">
					<h3>What "VOID" means</h3>
					<span class="muted2">Philosophy</span>
				</div>
				<p class="muted">
					"VOID"는 빈 공간을 의미합니다<br />
					시장의 빈틈을 발견하고, 기존의 한계를 넘어서는 시스템을 만듭니다
				</p>
			</div>
			<div class="card">
				<div class="card-title">
					<h3>How we build</h3>
					<span class="muted2">Execution</span>
				</div>
				<p class="muted">
					사람의 판단 편향을 줄이기 위해 실험과 검증을 자동화하고<br />
					운영 환경의 성능과 안정성을 함께 최적화합니다
				</p>
			</div>
		</div>
	</div>
</section>

<section class="section section--alt">
	<div class="container">
		<div class="section-head">
			<div class="kicker">Team</div>
			<h2>Members</h2>
			<p class="lead">연구와 엔지니어링을 함께 이해하는 작은 팀입니다</p>
		</div>

		<div class="grid grid-3">
			{#each members as member}
				<div class="card">
					<div class="card-title">
						<h3>{member.name}</h3>
						<span class="muted2">{member.responsibility}</span>
					</div>
					<p class="muted">{member.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
