<script lang="ts">
	import { Email } from '$lib/Constants';
</script>

<svelte:head>
	<title>VOID TRADING — Career</title>
</svelte:head>

<section class="page-hero page-hero--career">
	<div class="container">
		<div class="kicker">Career</div>
		<h1>함께 만들고, 함께 검증할 동료를 찾습니다</h1>
		<p class="lead">
			상시 채용 공고가 없더라도, 좋은 동료와의 만남은 언제나 환영합니다<br />
			이력서나 포트폴리오와 함께 연락 주세요
		</p>
	</div>
</section>

<section class="section">
	<div class="container">
		<div class="grid grid-3">
			<div class="card">
				<div class="card-title">
					<h3>Quant Researcher</h3>
					<span class="muted2">Research</span>
				</div>
				<ul>
					<li>데이터 분석 및 모델링</li>
					<li>실험 설계, 검증, 리스크 평가</li>
					<li>성과 분석 및 지속적 개선</li>
				</ul>
			</div>
			<div class="card">
				<div class="card-title">
					<h3>Quant Developer</h3>
					<span class="muted2">Research ↔ Engineering</span>
				</div>
				<ul>
					<li>백테스트/리서치 플랫폼 개발</li>
					<li>데이터 파이프라인 및 툴링</li>
					<li>실험/운영 환경의 안정화</li>
				</ul>
			</div>
			<div class="card">
				<div class="card-title">
					<h3>Software Engineer</h3>
					<span class="muted2">Engineering</span>
				</div>
				<ul>
					<li>저지연 트레이딩 시스템</li>
					<li>관측/모니터링 및 운영 자동화</li>
					<li>성능 최적화 및 안정성 강화</li>
				</ul>
			</div>
		</div>

		<div class="actions" style="margin-top: 24px">
			<a class="btn btn--light" href={`mailto:${Email}`}>Email: {Email}</a>
			<a class="btn" href="/contact">Contact</a>
		</div>
	</div>
</section>
