<script>
  let required = true;
  function toggleRequirement(event) {
    required = event.detail;
  }
  import RequiredButton from "./requiredButton.svelte";
</script>

<div class="flex flex-row justify-between items-center pb-2">
  <label class="mr-2 block text-sm leading-5 font-medium text-gray-700">
    Upgrade at Group Rate
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
    {#each [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] as x, idx}
      <option value={x}>{x ? 'Yes' : 'No'}</option>
    {/each}
  </select>
  <select
    name=""
      class="mt-1 form-select block w-full pl-3 pr-10 py-2 text-base leading-6
    border-gray-300 focus:outline-none focus:shadow-outline-blue
    focus:border-blue-300 sm:text-sm sm:leading-5"
    id="">
    <option value="1_bedroom_suite">1-BR suite</option>
    <option value="2_bedroom_suite">2-BR suite</option>
    <option value="3_bedroom_suite">3-BR suite</option>
    <option value="presidential">Presidential</option>
  </select>
{/if}
