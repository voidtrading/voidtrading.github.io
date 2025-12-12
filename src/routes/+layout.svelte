<script lang="ts">
	import Navbar from '$lib/components/NavBar.svelte';
	import { page } from '$app/stores';
	import '../app.css';
</script>

<div class="app-shell">
	<Navbar segment={$page.url.pathname} />

	<main class="page">
		<slot />
	</main>

	<footer class="site-footer">
		<div class="container footer-inner">
			<div class="footer-links">
				<a href="/about">About us</a>
				<a href="/culture">Culture</a>
				<a href="/career">Career</a>
				<a href="/contact">Contact</a>
				<a href="/notice">Notice</a>
				<a href="/privacy-policy">Privacy policy</a>
			</div>
			<div class="footer-meta">Copyright © VOID TRADING Ltd {new Date().getFullYear()}</div>
		</div>
	</footer>
</div>
