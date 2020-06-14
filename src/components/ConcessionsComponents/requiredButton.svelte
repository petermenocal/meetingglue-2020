<script>
  export let concessionsRequirements;
  export let type;
  $: concessionsRequirements = concessionsRequirements;
  function required(key, value) {
    concessionsRequirements[key] = value;
    console.log(concessionsRequirements);
  }
</script>

<button class="text-xs" on:click={() => required(type, false)}>
  Remove from RFP
</button>

<button class="text-xs" on:click={() => required(type, true)}>
  Add to RFP
</button>
