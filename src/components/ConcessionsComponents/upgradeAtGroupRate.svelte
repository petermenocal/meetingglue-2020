<script>
  export let concessionsRequirements;
  import RequiredButton from "./requiredButton.svelte";
</script>

<div class="w-full p-4">
  <div class="border border-round p-8 concessionBox">
    <h1 class="text-green-400 font-extrabold uppercase">
      Upgrade at group rate
    </h1>
    <p>
      {concessionsRequirements.upgradeAtGroupRate ? 'included in RFP' : 'not in RFP'}
    </p>
    <RequiredButton type="upgradeAtGroupRate" {concessionsRequirements} />
    <select
      name=""
      class="mt-5 shadow appearance-none border border-gray-500 rounded w-full
      py-2 px-3 text-gray-700 leading-tight focus:outline-none
      focus:shadow-outline text-xs bg-white text-black"
      id="">
      {#each [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] as x, idx}
        <option value={x}>{x ? 'Yes' : 'No'}</option>
      {/each}
    </select>
    <select
      name=""
      class="mt-5 shadow appearance-none border border-gray-500 rounded w-full
      py-2 px-3 text-gray-700 leading-tight focus:outline-none
      focus:shadow-outline text-xs bg-white text-black"
      id="">
      <option value="1_bedroom_suite">1-BR suite</option>
      <option value="2_bedroom_suite">2-BR suite</option>
      <option value="3_bedroom_suite">3-BR suite</option>
      <option value="presidential">Presidential</option>
    </select>
  </div>
</div>
