<script>
  import Flatpickr from "svelte-flatpickr";
  export let selectedDates = [];
  export let date = null;
  const flatpickrOptions = {
    enableTime: false,
    minDate: "today",
    dateFormat: "Y-m-d",
    onChange: (selDates, dateStr, instance) => {
      selectedDates.length = 0;
      selDates.forEach(el => {
        let newElement = { date: el, attendance: 0 };
        selectedDates.push(newElement);
      });
      selectedDates.sort(function(a, b) {
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return new Date(a.date) - new Date(b.date);
      });
      selected = selectedDates;
    }
  };
</script>

<div class="p-4">
  <label>
    Choose a date
    <Flatpickr
      options={flatpickrOptions}
      bind:value={date}
      element="#date-picker">
      <div class="flatpickr" id="date-picker">
        <input
          type="text"
          class="shadow appearance-none border rounded w-full py-2 px-3
          text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          data-input />
        <!-- svelte-ignore a11y-missing-attribute -->
        <a
          class="inline-block float-right cursor-pointer mt-3 px-3 py-2 w-auto
          border rounded text-white border-teal-400 hover:text-teal-200
          hover:border-white bg-teal-900"
          data-clear>
          Reset selections
        </a>
      </div>
    </Flatpickr>
  </label>
  <div class="w-full py-4">
    {#if selectedDates.length}
      <p class="text-gray-600">Selected dates:</p>
    {/if}
    {#each selectedDates as d}{d.date}{/each}
  </div>
</div>
