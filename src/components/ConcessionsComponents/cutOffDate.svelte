<script>
  import { onMount } from "svelte";
  let items = [];
  import RequiredButton from "./requiredButton.svelte";
  let required = true;
  function toggleRequirement(event) {
    required = event.detail;
  }
  onMount(() => {
    // create an array of integers
    for (var i = 1; i <= 4; i++) {
      items = [...items, i];
    }
  });
</script>

<div class="flex flex-row justify-between items-center pb-2">
  <label class="mr-2 block text-sm leading-5 font-medium text-gray-700">
    Cutoff Date
  </label>
  <RequiredButton on:required-toggle={toggleRequirement} />
</div>
{#if required}
  <select
    name=""
    class="mt-1 form-select block w-full pl-3 pr-10 py-2 text-base leading-6
    border-gray-300 focus:outline-none focus:shadow-outline-blue
    focus:border-blue-300 sm:text-sm sm:leading-5"
    id="">
    {#each items as x, idx}
      <option value={x}>{x} weeks</option>
    {/each}
  </select>
{/if}
