<script>
let sliderValue = $state(6);

// function handleChange(event) {
//     sliderValue.(event.target.value);
//   }

</script>
<!-- 
<div class="slider-container">
  <input 
    type="range" 
    min="1" 
    max="12" 
    value={sliderValue}
    oninput={handleChange}
    class="slider"
  > -->
  <!-- <div class="value-display">Selected value: {sliderValue}</div>
</div> -->

<style>
  .slider-container {
    width: 300px;
    margin: 20px auto;
  }

  .slider {
    width: 100%;
    -webkit-appearance: none;
    appearance: none;
    height: 15px;
    background: #ddd;
    outline: none;
    opacity: 0.7;
    transition: opacity .2s;
  }

  .slider:hover {
    opacity: 1;
  }

  .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    background: #4CAF50;
    cursor: pointer;
    border-radius: 50%;
  }

  .slider::-moz-range-thumb {
    width: 25px;
    height: 25px;
    background: #4CAF50;
    cursor: pointer;
    border-radius: 50%;
  }

  .value-display {
    text-align: center;
    margin-top: 10px;
  }
</style>