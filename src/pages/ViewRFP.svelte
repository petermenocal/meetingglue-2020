<script>
  let popup = false;
  let counter = false;
  let popupContent = {};
  let concessions = [
    { name: "Airport Transfer - Comp", value: "20", status: 0 },
    { name: "Box Drayage - Comp", value: 0, status: 1 },
    { name: "Club Lounge Access - Comp", value: 0, status: 2 },
    {
      name: "Commission Guest Room - Comp",
      value: "10% paid to planner",
      status: 1
    },
    { name: "Comp Room", value: "20 - 1 BR Suite", status: 1 },
    { name: "Cut Off Date", value: "2 weeks", status: 0 },
    { name: "Discounted Staff Room", value: "20", status: 0 },
    {
      name: "Group Rate Available",
      value: "1 day pre, 2 days post",
      status: 1
    },
    { name: "Guest Room Attrition", value: "10%", status: 0 },
    { name: "Guest Room Comp Ratio", value: "1 per 10", status: 1 },
    { name: "Parking Pass - Comp", value: "10 per day", status: 1 },
    { name: "Planner Points - Group", value: "2x", status: 1 },
    { name: "Planner Points - Other", value: 0, status: 1 },
    { name: "Rebate Guest Room", value: "$1000 paid to planner", status: 1 },
    { name: "Upgrade At Group Rate", value: "20 - 1Br Suite", status: 1 },
    { name: "Welcome Amenity - Comp", value: "20", status: 1 },
    { name: "Wifi In Guest Room - Comp", value: "Yes", status: 1 }
  ];

  // Example POST method implementation:
  async function postData(url = "/api/editRFP", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json"
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  // postData('https://example.com/answer', { answer: 42 })
  //   .then(data => {
  //     console.log(data); // JSON data parsed by `data.json()` call
  //   });
</script>

<style>
  /* [CONTAINER] */
  .vtl {
    /* Relative is necessary to properly position the child elements within */
    position: relative;
    /* More space for the vertical line to the left */
    padding: 10px 10px 10px 50px;
    /* Width restriction if you want */
    max-width: 320px;
  }

  /* [VERTICAL LINE] */
  .vtl::before {
    content: "";
    width: 5px;
    background-color: #de421a;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 15px;
  }

  /* [EVENT WRAPPER] */
  div.ewrap {
    padding: 10px 0;
    position: relative;
    width: 100%;
  }

  /* [EVENT ITSELF] */
  div.event {
    padding: 20px 30px;
    background-color: #d3b4fc;
    position: relative;
    border-radius: 6px;
  }

  /* [THE DATE & TEXT] */
  strong.date {
    font-size: 1.1em;
    font-weight: bold;
    color: #333;
  }
  p.text {
    margin: 0;
  }

  /* [ADD SPEECH BUBBLE TRIANGLE] */
  div.ewrap::before {
    content: "";
    border: 10px solid transparent;
    border-right-color: #d3b4fc;
    border-left: 0;
    position: absolute;
    top: 20%;
    left: -10px;
  }

  /* [ADD CIRCLE ON VERTICAL LINE] */
  div.ewrap::after {
    content: "";
    background: #fff;
    border: 4px solid #de421a;
    width: 16px;
    height: 16px;
    border-radius: 20px;
    position: absolute;
    top: 20%;
    left: -44px;
  }
</style>

{#if popup}
  <div
    class="fixed top-0 bottom-0 left-0 right-0 bg-white shadow sm:rounded-lg">
    <div class="px-4 py-5 sm:p-6">
      <div class="flex flex-col items-center justify-center">
        <!-- popup content -->
        <h3 class="text-lg font-medium leading-6 text-gray-900">
          Negotiation popup
        </h3>
        <div class="max-w-xl mt-2 text-sm leading-5 text-gray-500">
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
            on:click={() => {
              postData();
            }}
            type="button"
            class="inline-flex items-center justify-center px-4 py-2 font-medium text-green-700 transition duration-150 ease-in-out bg-green-100 border border-transparent rounded-md hover:bg-green-50 focus:outline-none focus:border-green-300 focus:shadow-outline-green active:bg-green-200 sm:text-sm sm:leading-5">
            Accept
          </button>
          <button
            type="button"
            class="inline-flex items-center justify-center px-4 py-2 font-medium text-red-700 transition duration-150 ease-in-out bg-red-100 border border-transparent rounded-md hover:bg-red-50 focus:outline-none focus:border-red-300 focus:shadow-outline-red active:bg-red-200 sm:text-sm sm:leading-5">
            Reject
          </button>
        </div>
        <button
          type="button"
          on:click={() => {
            counter = !counter;
          }}
          class="inline-flex items-center justify-center px-4 py-2 mt-3 font-medium text-blue-700 transition duration-150 ease-in-out bg-blue-100 border border-transparent rounded-md hover:bg-blue-50 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-blue-200 sm:text-sm sm:leading-5">
          Counter
        </button>

        {#if counter}
          <div class="py-4">
            <div>
              <label
                for="email"
                class="block text-sm font-medium leading-5 text-gray-700">
                {popupContent.name}
              </label>
              <div class="relative mt-1 rounded-md shadow-sm">
                <input
                  class="block w-full form-input sm:text-sm sm:leading-5"
                  value={popupContent.value} />
              </div>
            </div>
          </div>
          <button
            on:click={() => {
              popup = !popup;
            }}
            class="inline-flex items-center justify-center px-4 py-2 mt-3 font-medium text-blue-700 transition duration-150 ease-in-out bg-blue-100 border border-transparent rounded-md hover:bg-blue-50 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-blue-200 sm:text-sm sm:leading-5">
            Save counter offer
          </button>
        {/if}
        <!-- end popup content -->
      </div>
    </div>
  </div>
{/if}

<div class="flex flex-row flex-wrap">

  <div class="lg:flex lg:items-center lg:justify-between">
    <div class="flex-1 w-full min-w-0">
      <h2
        class="text-2xl font-bold leading-7 text-gray-300 sm:text-3xl sm:leading-9 sm:truncate">
        RFP Event Title
      </h2>
      <div class="flex flex-col mt-1 sm:mt-0 sm:flex-row sm:flex-wrap">
        <div
          class="flex items-center mt-2 text-sm leading-5 text-gray-500 sm:mr-6">
          <svg
            class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor">
            <path
              fill-rule="evenodd"
              d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952
              22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1
              0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1
              1 0 01-1-1z"
              clip-rule="evenodd" />
            <path
              d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0
              0110 15c-2.796 0-5.487-.46-8-1.308z" />
          </svg>
          Negotiating
        </div>
        <div
          class="flex items-center mt-2 text-sm leading-5 text-gray-500 sm:mr-6">
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
        <div class="flex items-center mt-2 text-sm leading-5 text-gray-500">
          <svg
            class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor">
            <path
              fill-rule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0
              002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1
              0 000 2h8a1 1 0 100-2H6z"
              clip-rule="evenodd" />
          </svg>
          Last response on January 9, 2020
        </div>
      </div>
    </div>
  </div>

  <div class="w-2/3 mt-4 overflow-hidden bg-white shadow sm:rounded-md">
    <ul>
      {#each concessions as c}
        <li
          class="border-t border-gray-200"
          on:click={() => {
            popup = !popup;
            popupContent = c;
          }}>
          <div
            class="block transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus:bg-gray-50">
            <div class="flex items-center px-4 py-4 sm:px-6">
              <div class="flex items-center flex-1 min-w-0">
                <div
                  class="flex-1 min-w-0 px-4 md:grid md:grid-cols-2 md:gap-4">
                  <div>
                    <div
                      class="text-sm font-medium leading-5 text-indigo-600 truncate">
                      {c.name}
                    </div>
                    <div
                      class="flex items-center mt-2 text-sm leading-5 text-gray-500">
                      <span
                        class="px-2 py-1 font-bold text-black bg-gray-200 rounded">
                        {c.value}
                      </span>
                    </div>
                  </div>
                  <div class="hidden md:block">
                    <div>
                      <div
                        class="flex items-center mt-2 text-sm leading-5 text-gray-500">
                        <svg
                          class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                          viewBox="0 0 20 20"
                          fill="currentColor">
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1
                            0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414
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
                  class="w-5 h-5 text-gray-400"
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

  <div class="w-1/3 p-5 mt-4">
    <h1 class="text-2xl text-white">Timeline</h1>

    <div class="vtl">
      <div class="ewrap">
        <div class="event">
          <strong class="date">{new Date().toDateString()}</strong>
          <p class="text-sm italic text">Comission Guest Room Comp</p>
          <p class="text-xs font-bold text">10% agreed by both parties</p>
        </div>
      </div>
      <div class="ewrap">
        <div class="event">
          <strong class="date">{new Date().toDateString()}</strong>
          <p class="text-sm italic text">Comission Guest Room Comp</p>
          <p class="text-xs font-bold text">10% agreed by both parties</p>
        </div>
      </div>
      <div class="ewrap">
        <div class="event">
          <strong class="date">{new Date().toDateString()}</strong>
          <p class="text-sm italic text">Comission Guest Room Comp</p>
          <p class="text-xs font-bold text">10% agreed by both parties</p>
        </div>
      </div>
      <div class="ewrap">
        <div class="event">
          <strong class="date">{new Date().toDateString()}</strong>
          <p class="text-sm italic text">Comission Guest Room Comp</p>
          <p class="text-xs font-bold text">10% agreed by both parties</p>
        </div>
      </div>
      <div class="ewrap">
        <div class="event">
          <strong class="date">{new Date().toDateString()}</strong>
          <p class="text-sm italic text">Comission Guest Room Comp</p>
          <p class="text-xs font-bold text">10% agreed by both parties</p>
        </div>
      </div>
      <div class="ewrap">
        <div class="event">
          <strong class="date">{new Date().toDateString()}</strong>
          <p class="text-sm italic text">Comission Guest Room Comp</p>
          <p class="text-xs font-bold text">10% agreed by both parties</p>
        </div>
      </div>
    </div>

  </div>
</div>
