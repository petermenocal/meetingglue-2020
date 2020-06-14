<script>
  import { onMount } from "svelte";
  export let concessionsRequirements;
  import RequiredButton from "./requiredButton.svelte";
</script>

<div class="w-full p-4">
  <div class="border border-round p-8 concessionBox">
    <h1 class="text-green-400 font-extrabold uppercase">
      Guest room attrition
    </h1>
    <p>
      {concessionsRequirements.guestRoomAttrition ? 'included in RFP' : 'not in RFP'}
    </p>
    <RequiredButton type="guestRoomAttrition" {concessionsRequirements} />
    {#if concessionsRequirements.guestRoomAttrition}
      <select
        name=""
        class="mt-5 shadow appearance-none border border-gray-500 rounded w-full
        py-2 px-3 text-gray-700 leading-tight focus:outline-none
        focus:shadow-outline text-xs bg-white text-black"
        id="">
        {#each [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10] as x, idx}
          <option value={idx * x}>{idx * x}%</option>
        {/each}
      </select>
    {/if}
  </div>
</div>
