<script lang="ts">
	import { Email } from '$lib/Constants';
</script>

<svelte:head>
	<title>VOID TRADING — Contact</title>
</svelte:head>

<section class="page-hero page-hero--contact">
	<div class="container">
		<div class="kicker">Contact</div>
		<h1>연락처</h1>
		<p class="lead">문의나 협업 제안은 이메일로 연락 주세요</p>
	</div>
</section>

<section class="section">
	<div class="container">
		<div class="grid grid-2">
			<div class="card">
				<div class="card-title">
					<h3>Address</h3>
					<span class="muted2">Seoul</span>
				</div>
				<p class="muted">
					서울시 강남구 봉은사로 125, 217호<br />
					(스파크플러스)
				</p>
			</div>

			<div class="card">
				<div class="card-title">
					<h3>Email</h3>
					<span class="muted2">Primary</span>
				</div>
				<p class="muted">{Email}</p>
				<div class="actions" style="margin-top: 12px">
					<a class="btn btn--light" href={`mailto:${Email}`}>Send email</a>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="section section--alt">
	<div class="container">
		<div class="section-head">
			<div class="kicker">Career</div>
			<h2>함께할 동료를 찾습니다</h2>
			<p class="lead">상시 채용을 진행하지 않더라도, 지원서는 항상 확인합니다</p>
		</div>
		<div class="actions">
			<a class="btn" href="/career">Open positions</a>
		</div>
	</div>
</section>
