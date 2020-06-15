<script>
  import { onMount } from "svelte";
  let items = [10, 15, 20, 25, 30, 35, 40, 45];
  let required = true;
  function toggleRequirement(event) {
    required = event.detail;
  }
  import RequiredButton from "./requiredButton.svelte";
</script>

<div class="flex flex-row justify-between items-center pb-2">
  <label class="mr-2 block text-sm leading-5 font-medium text-gray-700">
    Group Rate Available
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
    {#each [1, 2, 3, 4, 5] as x, idx}
      <option value={x}>{x} day{x == 1 ? '' : 's'} pre</option>
    {/each}
  </select>
  <select
    name=""
     class="mt-1 form-select block w-full pl-3 pr-10 py-2 text-base leading-6
    border-gray-300 focus:outline-none focus:shadow-outline-blue
    focus:border-blue-300 sm:text-sm sm:leading-5"
    id="">
    {#each [1, 2, 3, 4, 5] as x, idx}
      <option value={x}>{x} day{x == 1 ? '' : 's'} post</option>
    {/each}
  </select>
{/if}
