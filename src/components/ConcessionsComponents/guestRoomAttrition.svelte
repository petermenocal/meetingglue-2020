<script>
  import { onMount } from "svelte";
  import RequiredButton from "./requiredButton.svelte";
  let required = true;
  function toggleRequirement(event) {
    required = event.detail;
  }
</script>

<div class="flex flex-row justify-between items-center pb-2">
  <label class="mr-2 block text-sm leading-5 font-medium text-gray-700">
    Guest Room Attrition
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
    {#each [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10] as x, idx}
      <option value={idx * x}>{idx * x}%</option>
    {/each}
  </select>
{/if}


