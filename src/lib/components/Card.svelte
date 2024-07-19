<script>
  import cardsData from '../cards.json';

  const cards = cardsData.cards;
</script>

<div class="card-container">
  {#each cards as card}
    <div class="card">
      <img src={card.imageUrl} alt={card.title} />
      <h2>{card.title}</h2>
      <p>{card.description}</p>
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
    border: 1px solid #ccc;
    padding: 1rem;
    width: 200px;
  }

  img {
    max-width: 100%;
    height: auto;
  }
</style>