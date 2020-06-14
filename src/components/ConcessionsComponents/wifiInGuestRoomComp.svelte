<script>
  export let concessionsRequirements;
  import RequiredButton from "./requiredButton.svelte";
</script>

<div class="w-full p-4">
  <div class="border border-round p-8 concessionBox">
    <h1 class="text-green-400 font-extrabold uppercase">
      Wifi In Guest Room - Comp
    </h1>
    <p>
      {concessionsRequirements.wifiInGuestRoomComp ? 'included in RFP' : 'not in RFP'}
    </p>
    <RequiredButton type="wifiInGuestRoomComp" {concessionsRequirements} />
    <select
      name=""
      class="mt-5 shadow appearance-none border border-gray-500 rounded w-full
      py-2 px-3 text-gray-700 leading-tight focus:outline-none
      focus:shadow-outline text-xs bg-white text-black"
      id="">
      {#each [true, false] as x, idx}
        <option value={x}>{x ? 'Yes' : 'No'}</option>
      {/each}
    </select>
  </div>
</div>
