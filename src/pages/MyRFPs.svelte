<script>
  import { Link } from "yrv";

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

<div class="bg-white shadow overflow-hidden sm:rounded-md">
  <ul>
    {#if rfps && rfps.length}
      {#each rfps as x, idx}
        <li>
          <Link
            href="/rfp/1"
            class="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50
            transition duration-150 ease-in-out">
            <div class="px-4 py-4 sm:px-6">
              <div class="flex items-center justify-between">
                <div
                  class="text-sm leading-5 font-medium text-indigo-600 truncate">
                  {idx}
                </div>
                <div class="ml-2 flex-shrink-0 flex">
                  <span
                    class="px-2 inline-flex text-xs leading-5 font-semibold
                    rounded-full bg-green-100 text-green-800">
                    {x._id}
                  </span>
                </div>
              </div>
              <div class="mt-2 sm:flex sm:justify-between">
                <div class="sm:flex">
                  <div
                    class="mr-6 flex items-center text-sm leading-5
                    text-gray-500">
                    <svg
                      class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3
                        0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0
                        00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015
                        5v1H1v-1a5 5 0 015-5z" />
                    </svg>
                    HOTEL_NAME
                  </div>
                  <div
                    class="mt-2 flex items-center text-sm leading-5
                    text-gray-500 sm:mt-0">
                    <svg
                      class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        fill-rule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0
                        010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clip-rule="evenodd" />
                    </svg>
                    Las Vegas, NV
                  </div>
                </div>
                <div
                  class="mt-2 flex items-center text-sm leading-5 text-gray-500
                  sm:mt-0">
                  <svg
                    class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                      fill-rule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2
                      2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0
                      00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clip-rule="evenodd" />
                  </svg>
                  <span>
                    Last response
                    <time datetime="2020-01-07">January 7, 2020</time>
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </li>
      {/each}
    {:else}
      <div class="rounded-md bg-blue-50 p-4">
        <div class="flex">
          <div class="flex-shrink-0">
            <svg
              class="h-5 w-5 text-blue-400"
              viewBox="0 0 20 20"
              fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0
                012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0
                00-1-1H9z"
                clip-rule="evenodd" />
            </svg>
          </div>
          <div class="ml-3 flex-1 md:flex md:justify-between">
            <p class="text-sm leading-5 text-blue-700">Loading RFPs...</p>
          </div>
        </div>
      </div>
    {/if}
  </ul>
</div>
