<script lang="ts">
	import notices from '$lib/Notice';
</script>

<svelte:head>
	<title>VOID TRADING — Notice</title>
</svelte:head>

<section class="page-hero page-hero--notice">
	<div class="container">
		<div class="kicker">Notice</div>
		<h1>공지사항</h1>
		<p class="lead">회사 관련 공지사항을 게시합니다</p>
	</div>
</section>

<section class="section">
	<div class="container">
		<div class="grid">
			{#each notices as notice}
				<div class="card">
					<div class="card-title">
						<h3>{notice.title}</h3>
						<span class="muted2">{notice.date}</span>
					</div>

					<p class="muted" style="margin-top: 6px">
						<span class="muted2">작성:</span>
						{#each notice.author as author, idx}
							{author}{idx < notice.author.length - 1 ? ', ' : ''}
						{/each}
					</p>

					<div class="muted" style="margin-top: 12px">
						{@html notice.description}
					</div>

					{#if notice.appendix_path}
						<div class="actions" style="margin-top: 14px">
							<a class="btn" href={notice.appendix_path} target="_blank" rel="noreferrer">
								첨부파일{notice.appendix_name ? ` (${notice.appendix_name})` : ''}
							</a>
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>
