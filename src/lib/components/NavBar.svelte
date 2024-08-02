<script lang="ts">
	import Burger from './Hamburger.svelte';
	import Logo from '$lib/assets/icons8-circled-v-50.png';
	import routes from '$lib/NavRoutes';
	let opened = false;
	export let segment: string;
</script>

<div class={opened ? 'NavBar open' : 'NavBar'}>
	<div class="innerContainer">
		<a href="/" class="innerContainerText">
<!--			<img src={Logo} alt="logo" class="logo"/>-->
			VOID TRADING
		</a>
		<div class="burger">
			<Burger bind:open={opened} />
		</div>
		<div class="buttons">
			{#each routes as route}
				<a class={`button ${segment === route.href ? 'selected' : ''}`} href={route.href}
					>{route.label}</a
				>
			{/each}
		</div>
	</div>
	<div class="responsiveButtons buttons">
		{#each routes as route}
			<a class={`button ${segment === route.href ? 'selected' : ''}`} href={route.href}
				>{route.label}</a
			>
		{/each}
	</div>
</div>

<style>
	:global(.logo) {
		cursor: pointer;
		height: 30px;
		width: 30px;
	}

	.open {
		flex-direction: column !important;
		align-items: center !important;
		height: 330px !important;
		transition: height 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955);
	}

	.selected {
		position: relative;
		color: white;
	}

	.button:hover::after {
		content: '';
		background: #ca3c25;
		display: block;
		height: 3px;
		width: 100%;
		position: absolute;
		bottom: 0;
	}

	.button.selected:after {
		content: '';
		background: #ca3c25;
		display: block;
		height: 3px;
		width: 100%;
		position: absolute;
		bottom: 0;
	}

	.innerContainer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		max-width: 900px;
		box-sizing: border-box;
	}

	.innerContainer :global(a) {
		height: 30px;
		color: white;
	}

	.innerContainerText {
      display: inline-flex; /* 플렉스 박스로 설정 */
      align-items: center; /* 세로 가운데 정렬 */
      justify-content: center; /* 가로 가운데 정렬 */
      font-size: 24px; /* 글자 크기 */
      font-family: 'Arial', sans-serif; /* 글꼴 */
      color: #f5f5f5; /* 글자 색상 */
      text-decoration: none; /* 밑줄 제거 */
      font-weight: bold; /* 글자 굵기 */
      padding: 10px 15px; /* 안쪽 여백 */
      border-radius: 5px; /* 모서리 둥글게 */
      transition: background-color 0.3s, color 0.3s; /* 호버 효과 전환 시간 */
	}

  .innerContainerText:hover {
      background-color: #e0e0e0; /* 호버 시 배경색 */
      color: #000; /* 호버 시 글자 색상 */
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2); /* 글자 그림자 */
  }

	.NavBar {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		max-width: 900px;
		box-sizing: border-box;
		padding: 20px;
		height: 80px;
		overflow: hidden;
		transition: height 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955);
	}

	.buttons {
		display: none;
		justify-content: space-between;
		align-items: center;
		font-weight: 500;
	}

	.responsiveButtons {
		margin-top: 20px;
		width: 100%;
		display: flex !important;
		flex-direction: column;
	}

	.responsiveButtons .button {
		max-width: 100px;
		width: 100%;
		text-align: center;
	}

	.buttons .button {
		padding: 0;
		cursor: pointer;
		transition: color 0.2s ease-in-out;
		text-decoration: none;
		position: relative;
		margin: 10px;
		color: hsla(0, 0%, 100%, 0.4);
	}

	.button.selected {
		color: white;
	}

	.burger :global(button) {
		margin: 0;
	}

	@media (min-width: 900px) {
		.NavBar {
			padding: 20px 0;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			max-width: 900px;
			margin: 0 auto;
		}

		.buttons {
			display: flex;
		}

		.NavBar .burger {
			display: none !important;
		}
		.responsiveButtons {
			display: none !important;
		}
	}
</style>
