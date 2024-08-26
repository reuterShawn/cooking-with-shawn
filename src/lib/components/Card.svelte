<script>
  import cardsData from '../cards.json';

  const cards = cardsData.cards;
</script>

<div class="card-container">
  {#each cards as card}
    <div class="card">
      <img src={card.imageUrl} alt={card.title}/>
      <h2>{card.title}</h2>
      <p>{card.description}</p>
      <button>ADD ITEM</button>
    </div>
  {/each}
</div>

<style>
  .card-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .card {
    border: .5em solid orange;
    border-radius: 1em;
    padding: 1rem;
    box-shadow:inset 2px;
  }

  button {
    background-color: orange;
    width: 6em;
    float: right;
    border-radius: 1em;
    box-shadow: inset;
    padding: .5em;
  }

  img {
    max-width: 100%;
  
    height: auto;
  }
  
</style>