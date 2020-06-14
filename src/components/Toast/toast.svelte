<script>
  export let message;
  export let visible = true;
  import { fly } from "svelte/transition";

  import { quadOut } from "svelte/easing";
  import { onMount } from "svelte";
  onMount(() => {
    setTimeout(() => {
      visible = false;
    }, 3500);
  });
  function toggle() {
    visible = !visible;
  }
  function demoToggle() {
    visible = true;
    setTimeout(() => {
      visible = false;
    }, 3500);
  }
</script>

<button class="border-teal-900 border px-2 my-2 rounded" on:click={demoToggle}>
  Show Toast
</button>
{#if visible}
  <div
    transition:fly={{ easing: quadOut, y: 20 }}
    class="shadow-lg left-0 right-0 h-15 bg-teal-300 px-1 py-2 text-center
    text-teal-900 font-semibold">
    {message}
    <button class="border-teal-900 border px-2 ml-5 rounded" on:click={toggle}>
      OK
    </button>
  </div>
{/if}
