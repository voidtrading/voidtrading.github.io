<script lang="ts">
	import { Email } from '$lib/Constants';
	import notices from '$lib/Notice';
</script>

<svelte:head>
	<title>VOID TRADING</title>
</svelte:head>

<section class="hero">
	<div class="container hero-inner">
		<div class="kicker">VOID TRADING</div>
		<h1>Exploring Market Inefficiencies Through Quantitative Systems</h1>
		<p class="hero-sub">정량적 시스템으로 시장의 비효율을 탐색합니다</p>
		<p class="lead">
			데이터와 알고리즘을 바탕으로 연구하고, 저지연 인프라에서 자동화된 방식으로 실행합니다
		</p>

		<div class="actions">
			<a class="btn btn--primary" href="/contact">Contact</a>
			<a class="btn btn--ghost" href="/about">About us</a>
		</div>
	</div>
</section>

<section class="section section--first">
	<div class="container">
		<div class="section-head">
			<div class="kicker">About us</div>
			<h2>데이터 중심의 정량 트레이딩</h2>
			<p class="lead">
				시장 데이터를 분석하고, 저지연 시스템으로 자동 집행합니다<br />
				빠른 반응과 일관된 실행을 추구합니다
			</p>
		</div>

		<div class="grid grid-3">
			<div class="card">
				<div class="card-title">
					<h3>Research</h3>
					<span class="muted2">데이터 · 모델</span>
				</div>
				<p class="muted">
					통계적 검증을 기반으로 예측 모델을 설계하고, 시장 적응력을 지속적으로 점검합니다.
				</p>
			</div>
			<div class="card">
				<div class="card-title">
					<h3>Engineering</h3>
					<span class="muted2">저지연 · 신뢰성</span>
				</div>
				<p class="muted">
					실거래 환경의 성능을 목표로, 로우레벨 최적화와 안정적인 운영 환경을 구축합니다.
				</p>
			</div>
			<div class="card">
				<div class="card-title">
					<h3>Execution</h3>
					<span class="muted2">자동화 · 일관성</span>
				</div>
				<p class="muted">
					규칙 기반의 자동 집행으로 일관된 리스크 관리와 실행 품질을 추구합니다.
				</p>
			</div>
		</div>
	</div>
</section>

<section class="section section--alt">
	<div class="container">
		<div class="section-head">
			<div class="kicker">What we do</div>
			<h2>연구부터 집행까지, 연결된 시스템</h2>
			<p class="lead">
				데이터 수집, 모델 검증, 저지연 실행까지 전 과정을 자체 시스템으로 통합 운영합니다
			</p>
		</div>

		<div class="grid grid-2">
			<div class="card">
				<div class="card-title">
					<h3>Dataset & Validation</h3>
					<span class="muted2">Research</span>
				</div>
				<ul>
					<li>데이터 품질 관리 및 피처 설계</li>
					<li>통계적 검증 및 재현 가능한 실험 환경</li>
					<li>성과 분석과 지속적인 보정</li>
				</ul>
			</div>
			<div class="card">
				<div class="card-title">
					<h3>Low-latency Trading System</h3>
					<span class="muted2">Engineering</span>
				</div>
				<ul>
					<li>저지연 네트워킹/실행 파이프라인</li>
					<li>백테스트·리서치 생산성 최적화</li>
					<li>실거래 기준의 모니터링/운영 안정성</li>
				</ul>
			</div>
		</div>
	</div>
</section>

<section class="section">
	<div class="container">
		<div class="section-head">
			<div class="kicker">Culture</div>
			<h2>자율, 탁월, 진실</h2>
			<p class="lead">
				시스템의 품질이 곧 경쟁력입니다<br />
				수평적 협업, 빠른 피드백, 재현 가능한 개선을 추구합니다
			</p>
		</div>

		<div class="actions">
			<a class="btn" href="/culture">Read more</a>
		</div>
	</div>
</section>

<section class="section section--alt">
	<div class="container">
		<div class="section-head">
			<div class="kicker">Career</div>
			<h2>함께 만들고, 함께 검증합니다</h2>
			<p class="lead">
				좋은 동료는 언제나 환영합니다<br />
				관심 있으시면 편하게 연락 주세요
			</p>
		</div>

		<div class="actions">
			<a class="btn" href="/career">Open positions</a>
			<a class="btn btn--light" href={`mailto:${Email}`}>Email us</a>
		</div>
	</div>
</section>

<section class="section">
	<div class="container">
		<div class="section-head">
			<div class="kicker">Notice</div>
			<h2>공지사항</h2>
			<p class="lead">최근 소식을 확인하세요</p>
		</div>

		<div class="grid">
			{#each notices.slice(0, 3) as notice}
				<div class="card">
					<div class="card-title">
						<h3>{notice.title}</h3>
						<span class="muted2">{notice.date}</span>
					</div>
					<p class="muted">{notice.description}</p>
					<div class="actions" style="margin-top: 12px">
						<a class="btn" href="/notice">View all</a>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
