<script>
  import { onMount } from "svelte";
  let items = [10, 15, 20, 25, 30, 35, 40, 45];
  export let concessionsRequirements;
  import RequiredButton from "./requiredButton.svelte";
</script>

<div class="w-full p-4">
  <div class="border border-round p-8 concessionBox">
    <h1 class="text-green-400 font-extrabold uppercase">
      Group Rate Available
    </h1>
    <p>
      {concessionsRequirements.groupRateAvailable ? 'included in RFP' : 'not in RFP'}
    </p>
    <RequiredButton type="groupRateAvailable" {concessionsRequirements} />
    <div class="flex flex-row items-center justify-center">
      <div class="w-full">
        <select
          name=""
          class="mt-5 shadow appearance-none border border-gray-500 rounded
          w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none
          focus:shadow-outline text-xs bg-white text-black"
          id="">
          {#each [1, 2, 3, 4, 5] as x, idx}
            <option value={x}>{x} day{x == 1 ? '' : 's'} pre</option>
          {/each}
        </select>
        <select
          name=""
          class="mt-5 shadow appearance-none border border-gray-500 rounded
          w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none
          focus:shadow-outline text-xs"
          id="">
          {#each [1, 2, 3, 4, 5] as x, idx}
            <option value={x}>{x} day{x == 1 ? '' : 's'} post</option>
          {/each}
        </select>
      </div>
    </div>
  </div>
</div>
