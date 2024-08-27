<script>
	import Header from './Header.svelte';
	import '../app.css';
	import Footer from './Footer.svelte';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<Footer/>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: grid;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	.footer-background {
		width: 100%;
		height: 15%;
		background-color: #434c5e;
		padding-top: .5em;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
