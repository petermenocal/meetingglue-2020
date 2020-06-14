<script>
  import { onMount } from "svelte";
  let items = [];
  export let concessionsRequirements;
  import RequiredButton from "./requiredButton.svelte";

  onMount(() => {
    // create an array of integers
    for (var i = 1; i <= 20; i++) {
      items = [...items, i];
    }
  });
</script>

<div class="w-full p-4">
  <div class="border border-round p-8 concessionBox">
    <h1 class="text-pink-500 font-extrabold uppercase">
      Welcome Amenity - Comp
    </h1>
    <p>
      {concessionsRequirements.welcomeAmenityComp ? 'included in RFP' : 'not in RFP'}
    </p>
    <RequiredButton type="welcomeAmenityComp" {concessionsRequirements} />
    <div class="flex flex-row items-center justify-center">
      <div class="w-full">
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
