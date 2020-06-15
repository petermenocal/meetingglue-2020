<script>
  import { createEventDispatcher } from "svelte";
  let required = true;
  const dispatch = createEventDispatcher();
</script>

<style>
  .required {
    background: lightgreen;
  }
  .translateX {
    --transform-translate-x: 1.5rem !important;
  }
</style>

<span
  on:click={() => dispatch('required-toggle', (required = !required))}
  class:required
  role="checkbox"
  tabindex="0"
  aria-checked="false"
  class="bg-gray-200 relative inline-block flex-shrink-0 h-6 w-11 border-2
  border-transparent rounded-full cursor-pointer transition-colors ease-in-out
  duration-200 focus:outline-none focus:shadow-outline">
  <!-- On: "translate-x-5", Off: "translate-x-0" -->
  <span
    class:translateX={required}
    aria-hidden="true"
    class="translate-x-0 inline-block h-5 w-5 rounded-full bg-white shadow
    transform transition ease-in-out duration-200" />
</span>
