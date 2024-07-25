<!-- src/components/RandomItem.svelte -->
<script>
    let items = ['Steak Fahitjas', 'Beef Tacos', 'Roast Chicken', 'Chicken Curry'];
    let randomItem = '';
  
    function getRandomItem() {
      console.log('Button clicked');
      const randomIndex = Math.floor(Math.random() * items.length);
      randomItem = items[randomIndex];
      console.log('Random item:', randomItem);
    }
  </script>
   <div class="center-content">
  <button class="btn btn-primary btn-lg" on:click={getRandomItem}>Take Me to Random Recipie</button>
  </div>
  <br>
  <br>
  {#if randomItem}
    <p><b>Option:</b> {randomItem}</p>
  {/if}
  