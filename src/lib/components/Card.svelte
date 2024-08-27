<script>
  import cardsData from '../cards.json';

  const cards = cardsData.cards;
</script>

<div class="card-container">
  {#each cards as card}
    <div class="card">
      <img src={card.imageUrl} alt={card.title} style="width: 10em; height: 100px;"/>
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
    background-color: var(--backOne);
    width: 14em;
    height: 20em;
    border: .2em solid var(--accentTwo);
    border-radius: 1em;
    padding-left: .5em;
    box-shadow:inset 2px;
    justify-content: flex-start;
  }

  button {
    background-color: var(--accentTwo);
    float: right;
    width: 6em;
    border-radius: 1em;
    box-shadow: inset;
    padding: .5em;
    color: white;
    transform: translate(0%, 100%);
  }

  img {
    max-width: 100%;
    object-fit:fill;
    height: auto;
  }
  
</style>