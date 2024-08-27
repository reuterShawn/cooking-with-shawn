

<script>
  let sliderValue = 6;
</script>

  <div style="width: 100%; height: 100%;">
    <label>
      <p>
        Family Size {sliderValue}
      </p>
      <input type="range" bind:value={sliderValue} min="1" max="12" />
    </label>
  </div>

  <style>
    div {
      position: relative;
      display: flex;
      justify-content: center;
      padding: 0.5rem;
      /* background:hsla(15, 100%, 50%, 0.1); */
      border: 1px solid var(--accentTwo);
      border-radius: 1em;
      box-shadow: inset;
    }
  
  </style>