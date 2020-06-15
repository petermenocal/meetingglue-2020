<script>
  import { configuredDateOptions } from "../../stores.js";

  import moment from "moment";
  import Flatpickr from "svelte-flatpickr";

  // console.log($count);
  export let selectedDates = [];
  export let date = new Date();
  let dotwArr = [];
  var obj = {
    friday: false,
    monday: false,
    saturday: false,
    sunday: false,
    thursday: false,
    tuesday: false,
    wednesday: false
  };
  let calculatedDateEventOptions = [];
  let parsedDateString = "";
  const flatpickrOptions = {
    mode: "range",
    dateFormat: "Y-m-d",
    onClose: (selDates, dateStr, instance) => {
      if (selDates.length) {
        //prevents clearing of selection on close of picker.
        selectedDates = selDates;
        parsedDateString = dateStr;
      }
      getDateArray();
    }
  };
  function getDateArray() {
    var start = moment(selectedDates[0]);
    var end = moment(selectedDates[1]);
    var res = [];
    while (start.isBefore(end)) {
      var day = start.format("dddd").toLowerCase();
      if (obj[day]) {
        res.push(start.toDate());
      }
      start.add(1, "d");
    }
    calculatedDateEventOptions.length = 0;
    calculatedDateEventOptions = res;
    dotwArr = Object.keys(obj).filter(k => obj[k]);
    configuredDateOptions.set(calculatedDateEventOptions);
    return res;
  }
</script>

<div class="container p-4">
  <p class="text-gray-600 text-xs mb-2">Choose days of the week</p>

  <div class="flex flex-row justify-between mb-5">
    <label
      class="inline-flex items-center px-2.5 py-1.5 border border-transparent
      text-xs leading-4 font-medium rounded text-indigo-700 bg-indigo-100
      hover:bg-indigo-50 focus:outline-none focus:border-indigo-300
      focus:shadow-outline-indigo active:bg-indigo-200 transition ease-in-out
      duration-150 cursor-pointer">
      <input
        class="mr-2"
        type="checkbox"
        bind:checked={obj.sunday}
        value="Sunday" />
      Sun
    </label>
    <label
      class="inline-flex items-center px-2.5 py-1.5 border border-transparent
      text-xs leading-4 font-medium rounded text-indigo-700 bg-indigo-100
      hover:bg-indigo-50 focus:outline-none focus:border-indigo-300
      focus:shadow-outline-indigo active:bg-indigo-200 transition ease-in-out
      duration-150 cursor-pointer">
      <input
        class="mr-2"
        type="checkbox"
        bind:checked={obj.monday}
        value="Monday" />
      Mon
    </label>
    <label
      class="inline-flex items-center px-2.5 py-1.5 border border-transparent
      text-xs leading-4 font-medium rounded text-indigo-700 bg-indigo-100
      hover:bg-indigo-50 focus:outline-none focus:border-indigo-300
      focus:shadow-outline-indigo active:bg-indigo-200 transition ease-in-out
      duration-150 cursor-pointer">
      <input
        class="mr-2"
        type="checkbox"
        bind:checked={obj.tuesday}
        value="Tuesday" />
      Tue
    </label>
    <label
      class="inline-flex items-center px-2.5 py-1.5 border border-transparent
      text-xs leading-4 font-medium rounded text-indigo-700 bg-indigo-100
      hover:bg-indigo-50 focus:outline-none focus:border-indigo-300
      focus:shadow-outline-indigo active:bg-indigo-200 transition ease-in-out
      duration-150 cursor-pointer">
      <input
        class="mr-2"
        type="checkbox"
        bind:checked={obj.wednesday}
        value="Wednesday" />
      Wed
    </label>
    <label
      class="inline-flex items-center px-2.5 py-1.5 border border-transparent
      text-xs leading-4 font-medium rounded text-indigo-700 bg-indigo-100
      hover:bg-indigo-50 focus:outline-none focus:border-indigo-300
      focus:shadow-outline-indigo active:bg-indigo-200 transition ease-in-out
      duration-150 cursor-pointer">
      <input
        class="mr-2"
        type="checkbox"
        bind:checked={obj.thursday}
        value="Thursday" />
      Thu
    </label>
    <label
      class="inline-flex items-center px-2.5 py-1.5 border border-transparent
      text-xs leading-4 font-medium rounded text-indigo-700 bg-indigo-100
      hover:bg-indigo-50 focus:outline-none focus:border-indigo-300
      focus:shadow-outline-indigo active:bg-indigo-200 transition ease-in-out
      duration-150 cursor-pointer">
      <input
        class="mr-2"
        type="checkbox"
        bind:checked={obj.friday}
        value="Friday" />
      Fri
    </label>
    <label
      class="inline-flex items-center px-2.5 py-1.5 border border-transparent
      text-xs leading-4 font-medium rounded text-indigo-700 bg-indigo-100
      hover:bg-indigo-50 focus:outline-none focus:border-indigo-300
      focus:shadow-outline-indigo active:bg-indigo-200 transition ease-in-out
      duration-150 cursor-pointer">
      <input
        class="mr-2"
        type="checkbox"
        bind:checked={obj.saturday}
        value="Saturday" />
      Sat
    </label>
  </div>

  <p class="text-gray-600 text-xs">Choose date range</p>
  <div class="py-2">
    <label>
      <Flatpickr
        options={flatpickrOptions}
        bind:value={date}
        element="#date-picker">
        <div class="flatpickr" id="date-picker">
          <input
            type="text"
            class="shadow appearance-none border rounded w-full py-2 px-3
            text-black leading-tight focus:outline-none focus:shadow-outline"
            data-input />
        </div>
      </Flatpickr>
    </label>
    <div class="w-full py-4">
      {#if selectedDates.length}
        <p class="text-gray-600 text-xs">Chosen date range</p>
        {parsedDateString}
      {/if}
    </div>
  </div>
  {#if calculatedDateEventOptions.length}
    <p class="text-gray-600 text-xs">
      Query results ({calculatedDateEventOptions.length})
      <br />
    </p>
    {#each dotwArr as d}
      <span
        class="text-gray-600 bg-gray-100 border-1 rounded text-pink-700
        border-gray-200 shadow-md px-2 py-1 text-xs inline-block">
        {d}s&nbsp;
      </span>
    {/each}
    <span class="text-gray-600 text-xs inline-block">
      between
      <span
        class="text-gray-600 bg-gray-100 border-1 rounded text-pink-700
        border-gray-200 shadow-md px-2 py-1 text-xs inline-block">
        {parsedDateString}
      </span>
    </span>
  {/if}

  {#each calculatedDateEventOptions as cdeo}
    <div class="bg-gray-200 mt-2 mb-2 rounded text-black px-2 py-1 text-sm">
      {moment(cdeo).format('dddd, MMMM Do')}
    </div>
  {/each}
</div>
