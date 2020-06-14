<script>
  import { onMount } from "svelte";
  export let concessionsRequirements;
  let items = [10, 15, 20, 25, 30, 35, 40, 45];
  import RequiredButton from "./requiredButton.svelte";
</script>

<div class="w-full p-4">
  <div class="border border-round p-8 concessionBox">
    <h1 class="text-green-400 font-extrabold uppercase">
      Guest Room Comp Ratio
    </h1>
    <p>
      {concessionsRequirements.guestRoomCompRatio ? 'included in RFP' : 'not in RFP'}
    </p>
    <RequiredButton type="guestRoomCompRatio" {concessionsRequirements} />
    <div class="flex flex-row items-center justify-center">
      <div class="w-1/4 text-right pr-4 pt-4">1 per</div>
      <div class="w-3/4">
        <select
          name=""
          class="mt-5 shadow appearance-none border border-gray-500 rounded
          w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none
          focus:shadow-outline text-xs bg-white text-black"
          id="">
          {#each items as x, idx}
            <option value={x}>{x}</option>
          {/each}
        </select>
      </div>
    </div>
  </div>
</div>
