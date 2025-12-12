<script lang="ts">
	import Burger from './Hamburger.svelte';
	import routes from '$lib/NavRoutes';
	let opened = false;
	export let segment: string;
</script>

<header class="site-header">
	<div class="container header-inner">
		<a class="brand" href="/" aria-label="VOID TRADING home">
			<span>VOID TRADING</span>
		</a>

		<nav class="nav" aria-label="primary navigation">
			{#each routes as route}
				<a class:active={segment === route.href} href={route.href}>{route.label}</a>
			{/each}
		</nav>

		<div class="menu" aria-label="mobile menu">
			<Burger bind:open={opened} />
		</div>
	</div>
</header>

{#if opened}
	<nav class="menu-panel" aria-label="mobile navigation">
		{#each routes as route}
			<a
				class:active={segment === route.href}
				href={route.href}
				on:click={() => {
					opened = false;
				}}
			>
				{route.label}
			</a>
		{/each}
	</nav>
{/if}
