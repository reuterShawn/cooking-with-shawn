<script>
    import meals from '../cards.json';
    let currentStep = $state(0);
    let familySize = $state(0);
    let selectedProducts = $state([1,2,3,4]);

    
    const products = [
      { id: 1, name: 'Pizza', price: 10 },
      { id: 2, name: 'Burger', price: 8 },
      { id: 3, name: 'Salad', price: 6 },
      { id: 4, name: 'Pasta', price: 9 },
    ];
    
    function nextStep() {
      currentStep += 1;
    }
    
    function prevStep() {
      currentStep -= 1;
    }
    
    /**
	 * @param {number} productId
	 */
    function toggleProduct(productId) {
      // @ts-ignore
      selectedproducts.update((/** @type {any[]} */ products) => {
        if (products.includes(productId)) {
          return products.filter((/** @type {any} */ id) => id !== productId);
        } else {
          return [...products, productId];
        }
      });
    }
    
    function submitForm() {
      console.log('Family size:', familySize);
      console.log('Selected products:', selectedProducts);
      // Here you would typically send the data to a server
    }
  </script>
<container class="background">


<form onsubmit={submitForm}>
    {#if currentStep == 0}
      <h2>Step 1: Family Size</h2>
      <label>
        Number of people eating:
        <input type="number" bind:value={familySize} min="1" required>
      </label>
      <button type="button" onclick={nextStep}>Next</button>
    {:else if currentStep == 1}
      <h2>Step 2: Product Selection</h2>
      <p>Select products for {familySize} {familySize === 1 ? 'person' : 'people'}:</p>
      {#each products as product}
        <label>
          <input 
            type="checkbox" 
            checked={selectedProducts.includes(product.id)}
            onchange={() => toggleProduct(product.id)}
          >
          {product.name} - ${product.price}
        </label>
      {/each}
      <dvi>
        <button type="button" onclick={prevStep}>Previous</button>
        <button type="submit">SUBMIT</button>
      </dvi>
    {/if}
</form>

<!-- <p>
    <input type="checkbox" bind:value={currentStep}>
    <input type="checkbox" >
    <input type="checkbox" >

</p> -->

<p>
    {#each [1, 2, 3] as step}
      {#if currentStep >= step}
        <input 
          type="checkbox" 
          checked={currentStep === step}
          onchange={() => currentStep +=(step)}
        >
      {:else}
        <span class="placeholder">□</span>
      {/if}
    {/each}
  </p>
</container>

  <style>

    p {
        position: relative;
        display: flex;
        justify-content: center;
        gap: 1em;
    }
    container {
        width: 75%;
        height: 25em;
        color: white;
        background-color: var(--darkMain);
        padding: 1em;
        border-radius: 1em;
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      max-width: 300px;
      margin: 0 auto;
    }
    
    label {
      display: flex;
      justify-content: space-between;
    }
    
    button {
      display: flex;
      flex-direction: row;;
      justify-content: center;
      background-color: #3f8efc;
      
      border-radius: 1em;
      padding: .5em;
      box-shadow: inset;
      width: 25%;
    }

  </style>