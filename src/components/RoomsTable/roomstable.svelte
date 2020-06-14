<script>
  import { eventDurationDays } from "../../stores.js";

  import { onMount } from "svelte";
  export let mode;
  export let days = [];
  // export let duration = 1;
  onMount(() => {
    days.length = 1;
  });
</script>

<div>
  <button>Add day</button>
  <button>Remove day</button>
  <table class="table-auto max-w-full">
    <thead>
      <tr>
        <th class="px-4 py-2" />
        {#each days as d, idx}
          <th class="px-4 py-2">
            <!-- named days -->
            {#if idx === 0 && mode === 'single'}Sun{/if}
            {#if idx === 1 && mode === 'single'}Mon{/if}
            {#if idx === 2 && mode === 'single'}Tues{/if}
            {#if idx === 3 && mode === 'single'}Wed{/if}
            {#if idx === 4 && mode === 'single'}Thu{/if}
            {#if idx === 5 && mode === 'single'}Fri{/if}
            {#if idx === 6 && mode === 'single'}Sat{/if}
            <!-- generic day -->
            {#if mode !== 'single'}Day {idx + 1}{/if}
          </th>
        {/each}
        <th class="px-4 py-2">Notes</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border px-4 py-2">
          <select
            name=""
            class="shadow appearance-none border border-gray-500 rounded w-full
            py-2 px-3 text-gray-700 leading-tight focus:outline-none
            focus:shadow-outline text-xs"
            id="">
            <option value="">1 Bed</option>
            <option value="">2 Beds</option>
            <option value="">Run of the house</option>
            <option value="">Staff room</option>
            <option value="">Bedroom suite (1-BR, 2-BR, 3-BR, 4-BR)</option>
            <option value="">Parlor suite (1-BR, 2-BR, 3-BR, 4-BR)</option>
            <option value="">Bedroom suite (1-BR, 2-BR, 3-BR, 4-BR)</option>
          </select>
        </td>
        {#each days as d}
          <td class="border px-4 py-2">
            <div class="flex flex-row items-center justify-center">
              <input
                class="bg-gray-200 text-xs text-center shadow appearance-none
                border border-gray-500 rounded w-full py-1 px-2 text-gray-700
                leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                onfocus="this.value=''"
                value="0" />
            </div>
          </td>
        {/each}
        <td class="border p-5">
          <div class="flex flex-row items-center justify-center">
            <textarea
              class="bg-gray-200 text-xs shadow appearance-none border
              border-gray-500 rounded w-full py-1 px-5 text-gray-700
              leading-tight focus:outline-none focus:shadow-outline" />
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <!-- debug -->
  <!-- <div class="p-5 flex flex-col">
    <div>
      <strong>Selected mode:</strong>
      <span class="text-gray-800">
        {mode.charAt(0).toUpperCase() + mode.slice(1)}
      </span>
    </div>
    <div>
      <strong>Event length:</strong>
      <span class="text-gray-800">{duration}</span>
    </div>
  </div> -->
</div>
