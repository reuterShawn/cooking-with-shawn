<script>
  import jsonData from '../cards.json';
  import logo from '$lib/images/svelte-logo.svg';
  import github from '$lib/images/github.svg';
  let cards = jsonData.cards;
</script>

{#each cards as card (card.id)}
  <div class="card">
    <div class="image-container">
        <img src={card.imageUrl} alt={card.title} />
    </div>

    <div class="text-container">
        <h2 class="title">{card.title}</h2>
        <p class="description">{card.description}</p>
    </div>

  </div>
{/each}
<!-- 
<img src={logo} alt="svelte logo"> -->
<style>
    /* .card {
        display: flex;
        background: #fff;
        width: 25%;
        height: 40%;
        padding: 20px;
        justify-content: space-between;
        border-radius: 12px;
        border-color: orangered;
        border-width: 5em;
        box-shadow: 0px 2px 4px rgba(0,0,0,0.1);
        flex-wrap: wrap;
    } */


    .card {
  position: absolute;
  width: 100%;
  height: 100%;
}

.image-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.text-container {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.8);
}

.text-container h2 {
  margin-top: 0;
}
</style>