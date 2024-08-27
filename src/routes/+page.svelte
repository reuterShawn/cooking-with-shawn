<script>
	import Step from '$lib/components/Step.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Card from "$lib/components/Card.svelte";
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	
	<dvi class="hero-text">
		<Hero/>
		<h2 class="centered">Cooking From Scratch</h2>
		<h3 class="centeredTwo">With Families</h3>
	</dvi>

</section>


	<section>
		<h2>Different Cuisine Meals To Choose From</h2>
		<div class="background-one">
			<Card/>
		</div>
	</section>

<section>
	<Step/>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.background-one {
		background-color: var(--backOne);
	}

	.hero-text {
		position: relative;
		justify-content: center;
		color: var(--backOne)
	}

	.centeredTwo {
	position: absolute;
	top: 20%;
	left: 50%;
  transform: translate(-50%, -50%);
}
	.centered {
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
}


</style>
