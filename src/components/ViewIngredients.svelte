<script>
  import { setRecipie } from '../services/store.js';
  import { onMount } from 'svelte';

  export let recipie;

  function handleClick() {
    if (recipie) {
      setRecipie(recipie);
      window.location.href = '/Eatsy/ingredients'; // Navigate to the Ingredients page
    } else {
      console.error('Recipie is not set');
    }
  }

    const updateRecipies = () => {
    setRecipie(recipie);
    window.location.href = '/Eatsy/ingredients'; // Navigate to the Ingredients page
  };

  onMount(() => {
    console.log('Component mounted');
  });
</script>

<button class="btn btn-primary" on:click={updateRecipies}>
  View Ingredients
</button>