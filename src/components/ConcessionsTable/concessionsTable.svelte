<script>
  let concessions = [1, 1, 1, 1, 1, 1, 1, 1, 1];
</script>

<style>
  .row {
    min-height: 35px;
    height: 35px;
    max-height: 35px;
  }
</style>

<div class="bg-gray-500 w-full max-w-4xl mx-auto">
  <div
    class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t
    lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4
    flex flex-row justify-between leading-normal">
    <div class="flex flex-col">
      <p class="text-sm text-gray-600 text-left mb-3 text-green-500">
        Negotiable concessions
      </p>
      {#each concessions as c}
        <div class="row flex items-center">Concession name</div>
      {/each}
    </div>
    <div class="mb-8">
      <p class="text-sm text-gray-600 flex items-center mb-3 text-green-500">
        Response
      </p>
      {#each concessions as c}
        <div class="text-center row flex items-center">0%</div>
      {/each}
    </div>
    <div class="mb-8">
      <p class="text-sm text-gray-600 flex items-center mb-3 text-green-500">
        Your reply
      </p>
      <div class="flex flex-col items-center justify-center">
        {#each concessions as c}
          <div class="row items-center justify-center flex">
            <div class="inline-flex">
              <button
                class="bg-blue-300 hover:bg-gray-400 text-gray-800 font-bold
                rounded-l py-2 px-4">
                Accept
              </button>
              <button
                class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold
                py-2 px-4">
                Reject
              </button>
              <button
                class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold
                rounded-r py-2 px-4">
                Message
              </button>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>
