<script>
  import { onMount } from "svelte";
  let cvbs = [];
  onMount(async function() {
    const response = await fetch("/api/cvbs");
    const data = await response.json();
    cvbs = data.cvbs;
  });
</script>

<style>
  .border-gradient {
    border: 10px solid;
    border-image-source: linear-gradient(
      45deg,
      rgb(223, 87, 9),
      rgb(66, 250, 179)
    );
    border-image-slice: 1;
  }
</style>

<h1 class="text-center text-6xl font-bold color-azure_white">CVBs</h1>

<div class="flex flex-row flex-wrap justify-between color-azure_white">
  {#each cvbs as x}
    <div class="w-full md:w-1/2 p-5">
      <div class="rounded border-gradient w-full">
        <!-- <img src="//placehold.it/500x500" alt="" class="border-b w-full" /> -->
        <div class="bg-gray-900 py-6 flex flex-col w-full">
          <div class="text-lg flex flex-row justify-between w-full p-5">
            <div class="w-1/4">Entity Name</div>
            <button
              class="bg-teal-500 font-semibold rounded text-black px-4 py-2
              w-1/4">
              Visit
            </button>
          </div>
        </div>
        <div class="bg-black p-5">1 new update</div>
      </div>
    </div>
  {/each}
</div>
