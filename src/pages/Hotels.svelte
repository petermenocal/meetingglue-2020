<script>
  import Select from "svelte-select";
  import { Link } from "yrv";
  import { onMount } from "svelte";
  const items = [
    { value: "all", label: "🌆 All" },
    { value: "california", label: "🌆 California" },
    { value: "virginia", label: "🌆 Virginia" }
  ];

  let selectedValue = undefined;
  let hotels = [];

  async function hydrateHotelsData() {
    const response = await fetch("/api/hotels")
      .then(r => r.json())
      .catch(err => err);
    const data = await response.hotels;
    hotels = data;
    return response;
  }

  onMount(() => hydrateHotelsData());
</script>

<style>
  .border-gradient {
    border: 10px solid;
    border-image-source: linear-gradient(
      45deg,
      rgb(116, 0, 116),
      rgb(250, 224, 66)
    );
    border-image-slice: 1;
  }
</style>

<h1 class="text-center text-6xl font-bold color-azure_white">HOTELS</h1>
<div class="max-w-2xl mx-auto">
  <Select {items} bind:selectedValue />
</div>

<div class="flex flex-row flex-wrap justify-between color-azure_white w-full">
  {#each hotels as x}
    <div class="w-full md:w-1/2 p-5">
      <Link href="/hotel/{x.id}">
        <div class="rounded border-gradient w-full bg-black">
          <img
            src="images/uploads/{x.avatarFilename}"
            alt=""
            style="min-height: 200px; width: 100%; max-height: 300px; height:
            300px; object-fit: cover"
            class="border-b border-black w-full" />
          <div class="bg-gray-900 py-6 flex flex-col w-full">
            <div class="text-lg flex flex-row justify-between w-full p-5">
              <div class="w-3/4 text-md">{x.title}</div>
              <button
                class="bg-teal-500 font-semibold rounded text-black px-4 py-2
                w-1/4">
                Visit
              </button>
            </div>
          </div>
          <div class="bg-black p-5">{x.city}, {x.state}</div>
        </div>
      </Link>
    </div>
  {/each}
</div>
