<script lang="ts">
	export let href: string | undefined = undefined;
	export let target: string | undefined = undefined;
	export let rel: string | undefined = undefined;
	export let variant: 'light' | 'default' = 'default';
	export let ariaLabel: string | undefined = undefined;
	export let type: 'button' | 'submit' | 'reset' = 'button';
</script>

{#if href}
	<a
		class={`btn ${variant === 'light' ? 'btn--light' : ''}`}
		{href}
		{target}
		{rel}
		aria-label={ariaLabel}
	>
		<slot />
	</a>
{:else}
	<button class={`btn ${variant === 'light' ? 'btn--light' : ''}`} {type} aria-label={ariaLabel}>
		<slot />
	</button>
{/if}
