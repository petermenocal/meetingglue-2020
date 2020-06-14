<script>
  import { Router, Route, Link } from "yrv";
  import Home from "./pages/Home.svelte";
  import CVBs from "./pages/CVBs.svelte";
  import Hotels from "./pages/Hotels.svelte";
  import Login from "./pages/Login.svelte";
  import HotelProfile from "./pages/HotelProfile.svelte";
  import Chat from "./pages/Chat.svelte";
  import NewRFP from "./pages/NewRFP.svelte";
  import MyRFPs from "./pages/MyRFPs.svelte";
  import Register from "./pages/Register.svelte";
  let open = false;
</script>

<style>
  :global([aria-current]) {
    font-weight: bold;
    border-bottom: 2px solid white;
    padding-bottom: 9px;
  }
</style>

<div class="max-w-6xl w-full p-4 mx-auto color-azure_white">
  <div class="w-full flex flex-row items-center">
    <span class="text-3xl pr-4 font-thin w-3/4">
      <img src="images/logo.png" style="height: 70px; width: auto;" alt="" />
    </span>
    <span class="flex flex-row items-center justify-end w-1/4">
      <img
        src="images/avatar.png"
        style="height: 40px; width:40px;"
        class="rounded-full "
        alt="" />
      <span class="text-sm ml-2">User Name</span>
      <div class="relative mx-auto">
        <button
          type="button"
          on:click={() => {
            open = !open;
          }}
          class=" block bg-blue text-white font-semibold rounded px-4 py-2
          focus:outline-0">
          <img src="images/down.svg" alt="" />
        </button>
        {#if open}
          <div
            class="fixed mt-px text-sm text-left leading-normal rounded
            bg-purple color-sea_serpent border p-4 flex flex-col"
            style="z-index: 9999 !important">
            <Link class="py-2" href="/new/rfp">New RFP</Link>
            <Link class="py-2" href="/chat">Chat</Link>
          </div>
        {/if}
      </div>
    </span>
  </div>
</div>
<div class="w-full border-b border-purple-900 color-azure_white">
  <div class="max-w-6xl w-full px-4 pb-2 mx-auto">
    <Link href="/" class="mr-4">Home</Link>
    <Link href="/hotels" class="mr-4">Hotels</Link>
    <Link href="/cvbs" class="mr-4">CVBS</Link>
    <Link href="/login" class="mr-4">Login</Link>
    <Link href="/register" class="mr-4">Register</Link>
    <Link href="/chat" class="mr-4">Chat</Link>
    <Link href="/new/rfp" class="mr-4">New RFP</Link>
    <Link href="/myRFPs" class="mr-4">My RFPs</Link>
  </div>
</div>

<div class="w-full max-w-6xl mx-auto p-4">
  <Router>
    <Route exact component={Home} key="home" path="/" />
    <Route exact component={Hotels} key="hotels" path="/hotels" />
    <Route exact component={CVBs} key="cvbs" path="/cvbs" />
    <Route exact component={Login} key="login" path="/login" />
    <Route exact component={Register} key="register" path="/register" />
    <Route exact component={HotelProfile} path="/hotel/:id" let:router />
    <Route exact component={HotelProfile} path="/cvb/:id" let:router />
    <Route exact component={Chat} path="/chat" let:router />
    <Route exact component={NewRFP} path="/new/rfp" let:router />
    <Route exact component={MyRFPs} path="/myRFPs" let:router />
    <Route fallback>
      <div class="flex flex-col items-center p-10">
        <h1 class="text-center text-6xl">404</h1>
        Not found
      </div>
    </Route>
  </Router>
</div>
