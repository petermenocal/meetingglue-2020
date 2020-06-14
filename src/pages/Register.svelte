<style>
  .border-gradient {
    border: 10px solid;
    border-image-source: linear-gradient(
      45deg,
      rgb(223, 87, 9),
      rgb(0, 88, 170)
    );
    border-image-slice: 1;
  }
</style>

<h1 class="text-center text-6xl font-bold color-azure_white">Register</h1>
<h1 class="text-center text-sm font-bold color-azure_white">
  Let's get started!
</h1>

<div class="flex flex-row flex-wrap justify-between color-azure_white">
  <div class="w-full lg:w-1/2 p-5 mx-auto">
    <div class="rounded border-gradient w-full">
      <div class="bg-gray-900 lg:py-6 flex flex-col w-full">
        <div class="text-lg flex flex-col justify-between w-full p-5">
          <div class="flex flex-row items-center">
            <div class="w-1/3 text-sm text-right pr-4">Username</div>
            <input
              type="text"
              placeholder="hansolo"
              class="w-full p-5 mb-3 color-sea_serpent bg-purple-900 rounded
              shadow-lg" />
          </div>
          <div class="flex flex-row items-center">
            <div class="w-1/3 text-sm text-right pr-4">Password</div>
            <input
              type="password"
              placeholder="******"
              class="w-full p-5 mb-3 color-sea_serpent bg-purple-900 rounded
              shadow-lg" />
          </div>
          <div class="flex flex-row items-center">
            <div class="w-1/3 text-sm text-right pr-4">Password (repeat)</div>
            <input
              type="password"
              placeholder="******"
              class="w-full p-5 mb-3 color-sea_serpent bg-purple-900 rounded
              shadow-lg" />
          </div>

          <button class="bg-purple-800 px-2 py-3 rounded text-purple-300">
            Submit
          </button>
        </div>
      </div>
      <div class="bg-black p-5 text-xs">Forgot password?</div>
    </div>
  </div>
</div>
