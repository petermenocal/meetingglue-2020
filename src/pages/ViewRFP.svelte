<script>
  let popup = false;
  let concessions = [
    { name: "airport Transfer Comp", value: "20", status: 0 },
    { name: "boxDrayageComp", value: 0, status: 1 },
    { name: "clubLoungeAccessComp", value: 0, status: 2 },
    {
      name: "commissionGuestRoomComp",
      value: "10% paid to planner",
      status: 1
    },
    { name: "compRoom", value: "20 - 1 BR Suite", status: 1 },
    { name: "cutOffDate", value: "2 weeks", status: 0 },
    { name: "discountedStaffRoom", value: "20", status: 0 },
    { name: "groupRateAvailable", value: "1 day pre, 2 days post", status: 1 },
    { name: "guestRoomAttrition", value: "10%", status: 0 },
    { name: "guestRoomCompRatio", value: "1 per 10", status: 1 },
    { name: "parkingPassComp", value: "10 per day", status: 1 },
    { name: "plannerPointsGroup", value: "2x", status: 1 },
    { name: "plannerPointsOther", value: 0, status: 1 },
    { name: "rebateGuestRoom", value: "$1000 paid to planner", status: 1 },
    { name: "upgradeAtGroupRate", value: "20 - 1Br Suite", status: 1 },
    { name: "welcomeAmenityComp", value: "20", status: 1 },
    { name: "wifiInGuestRoomComp", value: "Yes", status: 1 }
  ];
</script>

{#if popup}

  <div
    class="bg-white shadow sm:rounded-lg fixed top-0 left-0 right-0 bottom-0">
    <div class="px-4 py-5 sm:p-6">
      <h3 class="text-lg leading-6 font-medium text-gray-900">
        Negotiation popup
      </h3>
      <div class="mt-2 max-w-xl text-sm leading-5 text-gray-500">
        <p>
          Here planners/suppliers can change values of concessions and go back
          and forth
        </p>
      </div>
      <div
        class="mt-5"
        on:click={() => {
          popup = !popup;
        }}>
        <button
          type="button"
          class="inline-flex items-center justify-center px-4 py-2 border
          border-transparent font-medium rounded-md text-green-700 bg-green-100
          hover:bg-green-50 focus:outline-none focus:border-green-300
          focus:shadow-outline-green active:bg-green-200 transition ease-in-out
          duration-150 sm:text-sm sm:leading-5">
          Accept
        </button>
        <button
          type="button"
          class="inline-flex items-center justify-center px-4 py-2 border
          border-transparent font-medium rounded-md text-blue-700 bg-blue-100
          hover:bg-blue-50 focus:outline-none focus:border-blue-300
          focus:shadow-outline-blue active:bg-blue-200 transition ease-in-out
          duration-150 sm:text-sm sm:leading-5">
          Counter
        </button>
        <button
          type="button"
          class="inline-flex items-center justify-center px-4 py-2 border
          border-transparent font-medium rounded-md text-red-700 bg-red-100
          hover:bg-red-50 focus:outline-none focus:border-red-300
          focus:shadow-outline-red active:bg-red-200 transition ease-in-out
          duration-150 sm:text-sm sm:leading-5">
          Reject
        </button>
      </div>
    </div>
  </div>
{/if}

<div class="lg:flex lg:items-center lg:justify-between">
  <div class="flex-1 min-w-0">
    <h2
      class="text-2xl font-bold leading-7 text-gray-300 sm:text-3xl sm:leading-9
      sm:truncate">
      RFP Event Title
    </h2>
    <div class="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap">
      <div
        class="mt-2 flex items-center text-sm leading-5 text-gray-500 sm:mr-6">
        <svg
          class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor">
          <path
            fill-rule="evenodd"
            d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952
            22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0
            011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0
            01-1-1z"
            clip-rule="evenodd" />
          <path
            d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0
            0110 15c-2.796 0-5.487-.46-8-1.308z" />
        </svg>
        Negotiating
      </div>
      <div
        class="mt-2 flex items-center text-sm leading-5 text-gray-500 sm:mr-6">
        <svg
          class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor">
          <path
            fill-rule="evenodd"
            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10
            11a2 2 0 100-4 2 2 0 000 4z"
            clip-rule="evenodd" />
        </svg>
        Las Vegas, NV
      </div>
      <div class="mt-2 flex items-center text-sm leading-5 text-gray-500">
        <svg
          class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor">
          <path
            fill-rule="evenodd"
            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0
            002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0
            000 2h8a1 1 0 100-2H6z"
            clip-rule="evenodd" />
        </svg>
        Last response on January 9, 2020
      </div>
    </div>
  </div>
</div>

<div class="bg-white shadow overflow-hidden sm:rounded-md mt-4">
  <ul>
    {#each concessions as c}
      <li
        class="border-t border-gray-200"
        on:click={() => {
          popup = !popup;
        }}>
        <div
          class="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50
          transition duration-150 ease-in-out">
          <div class="flex items-center px-4 py-4 sm:px-6">
            <div class="min-w-0 flex-1 flex items-center">
              <div class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                <div>
                  <div
                    class="text-sm leading-5 font-medium text-indigo-600
                    truncate">
                    {c.name}
                  </div>
                  <div
                    class="mt-2 flex items-center text-sm leading-5
                    text-gray-500">
                    <span>requested: {c.value}</span>
                  </div>
                </div>
                <div class="hidden md:block">
                  <div>
                    <div
                      class="mt-2 flex items-center text-sm leading-5
                      text-gray-500">
                      <svg
                        class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                        viewBox="0 0 20 20"
                        fill="currentColor">
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0
                          00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414
                          1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd" />
                      </svg>
                      {#if c.status == 0}In negotiation{/if}
                      {#if c.status == 1}Accepted{/if}
                      {#if c.status == 2}Rejected{/if}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <svg
                class="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor">
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0
                  011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </li>
    {/each}
  </ul>
</div>
