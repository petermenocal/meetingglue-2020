<script>
  import { eventDurationDays, spaceRequirements } from "../../stores.js";
  import { onMount } from "svelte";
  export let rowsArr = [
    {
      date: "day 1",
      type: "break",
      eventName: "Registration",
      start: "9:00am",
      end: "5:00pm",
      numberOfPeople: 0,
      setup: "8x10",
      av: false,
      notes: ""
    }
  ];
  export let mode;
  let selected;
  function addRows() {
    rowsArr = [
      ...rowsArr,
      {
        date: "day 1",
        type: "break",
        eventName: "Registration",
        start: "9:00am",
        end: "5:00pm",
        numberOfPeople: 0,
        setup: "8x10",
        av: false,
        notes: ""
      }
    ];
    const arrlength = rowsArr.length;
    eventDurationDays.set(arrlength);
  }
  let roomsType;
</script>

<div>

  <!-- 
  <table class="table-auto max-w-full">
    <thead>
      <tr class="text-xs text-white">
        <th class="px-4 py-2">Date</th>
        <th class="px-4 py-2">Type</th>
        <th class="px-4 py-2">Event name</th>
        <th class="px-4 py-2">Start</th>
        <th class="px-4 py-2">End</th>
        <th class="px-4 py-2"># of people</th>
        <th class="px-4 py-2">Setup</th>
        <th class="px-4 py-2">A/V</th>
        <th class="px-4 py-2">Notes</th>
      </tr>
    </thead>
    <tbody>
      {#each rowsArr as r, idx}
        <tr>
          <td class="border py-2 text-center text-xs color-azure_white">
            Day {idx + 1}
          </td>
          <td >
            <div class="inline-block relative w-40">
              <select
                bind:value={r.type}
                class="block appearance-none w-full bg-white text-black border
                text-xs border-gray-400 hover:border-gray-500 px-4 py-2 pr-8
                rounded shadow leading-tight focus:outline-none
                focus:shadow-outline">
                <option value="break">Break</option>
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="reception">Reception</option>
                <option value="dinner">Dinner</option>
                <option value="general_session">General Session</option>
                <option value="breakout">Breakout</option>
                <option value="exhibition">Exhibition</option>
                <option value="setup">Setup</option>
                <option value="teardown">Teardown</option>
                <option value="other">Other</option>
              </select>
              <div
                class="pointer-events-none absolute inset-y-0 right-0 flex
                items-center px-2 text-gray-700">
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20">
                  <path
                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828
                    5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>

          </td>
          <td >
            <input
              class="bg-gray-200 text-xs text-center shadow appearance-none
              border border-gray-500 rounded w-full py-1 px-2 text-gray-700
              leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              onfocus="this.value=''"
              value="Registration" />
          </td>
          <td >
            <input
              class="bg-gray-200 text-xs text-center shadow appearance-none
              border border-gray-500 rounded w-full py-1 px-2 text-gray-700
              leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              onfocus="this.value=''"
              bind:value={r.start} />
          </td>
          <td >
            <input
              class="bg-gray-200 text-xs text-center shadow appearance-none
              border border-gray-500 rounded w-full py-1 px-2 text-gray-700
              leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              onfocus="this.value=''"
              bind:value={r.end} />
          </td>
          <td >
            <input
              class="bg-gray-200 text-xs text-center shadow appearance-none
              border border-gray-500 rounded w-full py-1 px-2 text-gray-700
              leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              onfocus="this.value=''"
              bind:value={r.numberOfPeople} />
          </td>
          <td >
            <div class="inline-block relative w-40">
              <select
                class="block appearance-none w-full bg-white border text-black
                text-xs border-gray-400 hover:border-gray-500 px-4 py-2 pr-8
                rounded shadow leading-tight focus:outline-none
                focus:shadow-outline"
                bind:value={r.setup}>
                <option value="8x10">8' x 10' Exhibits</option>
                <option value="10x10">10' x 10' Exhibits</option>
                <option value="boardroom">Boardroom</option>
                <option value="chevron">Chevron</option>
                <option value="classroom">Classroom</option>
                <option value="conference">Conference Style</option>
                <option value="crescent">Crescent-Round</option>
                <option value="herringbone">Herringbone</option>
                <option value="hollowsquare">Hollow Square</option>
                <option value="reception">Reception</option>
                <option value="rounds8">Rounds for 8</option>
                <option value="rounds10">Rounds for 10</option>
                <option value="tabletop">Table Top Exhibits</option>
                <option value="theatre">Theatre</option>
                <option value="ushaped">U-Shaped</option>
                <option value="other">Other</option>
              </select>
              <div
                class="pointer-events-none absolute inset-y-0 right-0 flex
                items-center px-2 text-gray-700">
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20">
                  <path
                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828
                    5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>

          </td>
          <td >
            <div class="flex flex-row items-center justify-center">
              <input type="checkbox" class="text-left" bind:checked={r.av} />
              <label class="ml-3">A/V</label>
            </div>
          </td>
          <td class="border p-5">
            <div class="flex flex-row items-center justify-center">
              <textarea
                bind:value={r.notes}
                class="bg-gray-200 text-xs shadow appearance-none border
                border-gray-500 rounded w-full py-1 px-5 text-gray-700
                leading-tight focus:outline-none focus:shadow-outline" />
            </div>
          </td>
        </tr>
      {/each}
    </tbody>
  </table> -->

  <button
    class="inline-flex items-center px-2.5 py-1.5 border border-transparent
    text-xs leading-4 font-medium rounded text-indigo-700 bg-indigo-100
    hover:bg-indigo-50 focus:outline-none focus:border-indigo-300
    focus:shadow-outline-indigo active:bg-indigo-200 transition ease-in-out
    duration-150 cursor-pointer"
    on:click={addRows}>
    Add row
  </button>

  <div class="flex flex-col">
    <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
      <div
        class="align-middle inline-block min-w-full shadow overflow-hidden
        sm:rounded-lg border-b border-gray-200">
        <table class="min-w-full">
          <thead>
            <tr>
              <th
                class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left
                text-xs leading-4 font-medium text-gray-500 uppercase
                tracking-wider" />
              {#each rowsArr as d, idx}
                <th
                  class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left
                  text-xs leading-4 font-medium text-gray-500 uppercase
                  tracking-wider">
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
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white">
              <td
                class="px-6 py-4 whitespace-no-wrap text-sm leading-5
                font-medium text-gray-900">
                <select
                  name=""
                  class="mt-1 form-select block w-full pl-3 pr-10 py-2 text-base
                  leading-6 border-gray-300 focus:outline-none
                  focus:shadow-outline-blue focus:border-blue-300 sm:text-sm
                  sm:leading-5"
                  bind:value={roomsType}
                  id="">
                  <option value="1_bed">1 Bed</option>
                  <option value="2_beds">2 Beds</option>
                  <option value="run_of_the_house">Run of the house</option>
                  <option value="staff_room">Staff room</option>
                  <option value="bedroom_suite">
                    Bedroom suite (1-BR, 2-BR, 3-BR, 4-BR)
                  </option>
                  <option value="parlor_suite">
                    Parlor suite (1-BR, 2-BR, 3-BR, 4-BR)
                  </option>
                </select>
              </td>
              {#each rowsArr as d}
                <td>
                  <div class="mt-1 px-1 relative rounded-md shadow-sm">
                    <input
                      id="email"
                      bind:value={d.dailyPeople}
                      onfocus="this.value=''"
                      class="form-input block w-full sm:text-sm sm:leading-5"
                      placeholder="beds" />
                  </div>
                </td>
              {/each}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
