<script>
  import { onMount } from "svelte";
  let rfps = [];
  onMount(async () => {
    const res = await fetch("/api/rfps");
    const p = await res.json();
    let newRfps = p.rfps;
    rfps = [...rfps, ...newRfps];
  });

  async function refreshRFPList() {
    rfps.length = 0;
    const res = await fetch("/api/rfps");
    const p = await res.json();
    let newRfps = p.rfps;
    rfps = [...rfps, ...newRfps];
  }

  async function removeRFP(id) {
    await fetch("/api/removeRFP?id=" + id).then(() => {
      refreshRFPList();
    });
  }
</script>

<div>
  <h1>My RFPS</h1>
  <div class="w-full p-4 bg-black">
    {#if rfps && rfps.length}
      {#each rfps as x, idx}
        <div
          class="border border-round p-8 concessionBox mb-5 color-azure_white">
          <h1 class="text-green-400 font-extrabold uppercase">
            RFP TEST {idx}
          </h1>
          <h1 class="text-green-400 text-xs font-extrabold uppercase">
            DATABASE ID IS = {x._id}
          </h1>
          <p
            class="text-xs"
            on:click={() => {
              removeRFP(x._id);
            }}>
            Delete RFP
          </p>
        </div>
      {/each}
    {:else}loading{/if}
  </div>
</div>
