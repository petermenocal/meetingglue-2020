<script>
  import { onMount } from "svelte";
  let items = [];
  let required = true;
  function toggleRequirement(event) {
    required = event.detail;
  }
  import RequiredButton from "./requiredButton.svelte";

  onMount(() => {
    // create an array of integers
    for (var i = 1; i <= 31; i++) {
      items = [...items, i];
    }
  });
</script>

<div class="flex flex-row justify-between items-center pb-2">
  <label class="mr-2 block text-sm leading-5 font-medium text-gray-700">
    Rebate Guest Rooms
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
      <option value={idx}>${idx}</option>
    {/each}
  </select>

  <div class="mt-3 flex rounded-md shadow-sm">
    <span
      class="inline-flex items-center px-3 rounded-l-md border border-r-0
      border-gray-300 bg-gray-50 text-gray-500 text-sm">
      Paid to
    </span>
    <input
      id="company_website"
      class="form-input flex-1 block w-full rounded-none rounded-r-md transition
      duration-150 ease-in-out sm:text-sm sm:leading-5"
      placeholder="" />
  </div>
{/if}
