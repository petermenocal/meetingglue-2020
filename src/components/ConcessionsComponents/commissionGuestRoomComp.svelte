<script>
  import { onMount } from "svelte";
  import RequiredButton from "./requiredButton.svelte";
  let items = [];
  export let concessionsRequirements;
  onMount(() => {
    // create an array of integers
    for (var i = 1; i <= 15; i++) {
      items = [...items, i];
    }
  });
</script>

<div class="w-full p-4">
  <div class="border border-round p-8 concessionBox">
    <h1 class="text-yellow-400 font-extrabold uppercase">
      Commission - Guest Room
    </h1>
    <p>
      {concessionsRequirements.commissionGuestRoomComp ? 'included in RFP' : 'not in RFP'}
    </p>
    <RequiredButton type="commissionGuestRoomComp" {concessionsRequirements} />
    <div class="flex flex-row items-center justify-center">
      <div class="w-full">
        <select
          name=""
          class="mt-5 shadow appearance-none border border-gray-500 rounded
          w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none
          focus:shadow-outline text-xs bg-white text-black"
          id="">
          {#each items as x, idx}
            <option value={x + 5}>{x + 5}%</option>
          {/each}
        </select>
        <input
          type="text"
          placeholder="Paid to"
          class="p-2 w-full rounded text-xs mt-3 bg-white text-black" />
      </div>
    </div>
  </div>
</div>
