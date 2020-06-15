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
  import ViewRFP from "./pages/ViewRFP.svelte";
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

<div class="h-screen flex overflow-hidden bg-indigo-100">
  <!-- Off-canvas menu for mobile -->
  <div class="md:hidden">
    <div class="fixed inset-0 flex z-40">
      <!--
        Off-canvas menu overlay, show/hide based on off-canvas menu state.

        Entering: "transition-opacity ease-linear duration-300"
          From: "opacity-0"
          To: "opacity-100"
        Leaving: "transition-opacity ease-linear duration-300"
          From: "opacity-100"
          To: "opacity-0"
      -->
      <div class="fixed inset-0">
        <div class="absolute inset-0 bg-indigo-600 opacity-75" />
      </div>
      <!--
        Off-canvas menu, show/hide based on off-canvas menu state.

        Entering: "transition ease-in-out duration-300 transform"
          From: "-translate-x-full"
          To: "translate-x-0"
        Leaving: "transition ease-in-out duration-300 transform"
          From: "translate-x-0"
          To: "-translate-x-full"
      -->
      <div class="relative flex-1 flex flex-col max-w-xs w-full bg-indigo-800">
        <div class="absolute top-0 right-0 -mr-14 p-1">
          <button
            class="flex items-center justify-center h-12 w-12 rounded-full
            focus:outline-none focus:bg-indigo-600"
            aria-label="Close sidebar">
            <svg
              class="h-6 w-6 text-white"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
          <div class="flex-shrink-0 flex items-center px-4">
            <img
              class="h-8 w-auto"
              src="/img/logos/workflow-logo-on-dark.svg"
              alt="Workflow" />
          </div>
          <nav class="mt-5 px-2">

            <Link
              href="#"
              class="group flex items-center px-2 py-2 text-base leading-6
              font-medium rounded-md text-white bg-indigo-900 focus:outline-none
              focus:bg-indigo-700 transition ease-in-out duration-150">
              <svg
                class="mr-4 h-6 w-6 text-gray-300 group-hover:text-gray-300
                group-focus:text-gray-300 transition ease-in-out duration-150"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2
                  2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1
                  1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Dashboard
            </Link>
            <a
              href="#"
              class="mt-1 group flex items-center px-2 py-2 text-base leading-6
              font-medium rounded-md text-gray-300 hover:text-white
              hover:bg-indigo-700 focus:outline-none focus:text-white
              focus:bg-indigo-700 transition ease-in-out duration-150">
              <svg
                class="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-300
                group-focus:text-gray-300 transition ease-in-out duration-150"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0
                  0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              Team
            </a>
            <a
              href="#"
              class="mt-1 group flex items-center px-2 py-2 text-base leading-6
              font-medium rounded-md text-gray-300 hover:text-white
              hover:bg-indigo-700 focus:outline-none focus:text-white
              focus:bg-indigo-700 transition ease-in-out duration-150">
              <svg
                class="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-300
                group-focus:text-gray-300 transition ease-in-out duration-150"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0
                  00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
              </svg>
              Projects
            </a>
            <a
              href="#"
              class="mt-1 group flex items-center px-2 py-2 text-base leading-6
              font-medium rounded-md text-gray-300 hover:text-white
              hover:bg-indigo-700 focus:outline-none focus:text-white
              focus:bg-indigo-700 transition ease-in-out duration-150">
              <svg
                class="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-300
                group-focus:text-gray-300 transition ease-in-out duration-150"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2
                  2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Calendar
            </a>
            <a
              href="#"
              class="mt-1 group flex items-center px-2 py-2 text-base leading-6
              font-medium rounded-md text-gray-300 hover:text-white
              hover:bg-indigo-700 focus:outline-none focus:text-white
              focus:bg-indigo-700 transition ease-in-out duration-150">
              <svg
                class="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-300
                group-focus:text-gray-300 transition ease-in-out duration-150"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2
                  2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414
                  2.414a1 1 0 01-.707.293h-3.172a1 1 0
                  01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
              Documents
            </a>
            <a
              href="#"
              class="mt-1 group flex items-center px-2 py-2 text-base leading-6
              font-medium rounded-md text-gray-300 hover:text-white
              hover:bg-indigo-700 focus:outline-none focus:text-white
              focus:bg-indigo-700 transition ease-in-out duration-150">
              <svg
                class="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-300
                group-focus:text-gray-300 transition ease-in-out duration-150"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0
                  002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2
                  2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2
                  2 0 01-2-2z" />
              </svg>
              Reports
            </a>
          </nav>
        </div>
        <div class="flex-shrink-0 flex bg-indigo-700 p-4">
          <a href="#" class="flex-shrink-0 group block">
            <div class="flex items-center">
              <div>
                <img
                  class="inline-block h-10 w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="" />
              </div>
              <div class="ml-3">
                <p class="text-base leading-6 font-medium text-white">
                  Tom Cook
                </p>
                <p
                  class="text-sm leading-5 font-medium text-gray-400
                  group-hover:text-gray-300 transition ease-in-out duration-150">
                  View profile
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div class="flex-shrink-0 w-14">
        <!-- Force sidebar to shrink to fit close icon -->
      </div>
    </div>
  </div>

  <!-- Static sidebar for desktop -->
  <div class="hidden md:flex md:flex-shrink-0">
    <div class="flex flex-col w-64 bg-indigo-800">
      <div class="h-0 flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
        <div class="flex items-center flex-shrink-0 px-4">
          <img
            class="h-8 w-auto"
            src="/images/logo__meeting_glue.png"
            alt="Workflow" />
        </div>
        <!-- Sidebar component, swap this element with another sidebar if you like -->
        <nav class="mt-5 flex-1 px-2 bg-indigo-800">
          <Link
            href="/"
            class="group flex items-center px-2 py-2 text-sm leading-5
            font-medium text-white rounded-md bg-indigo-900 focus:outline-none
            focus:bg-indigo-700 transition ease-in-out duration-150">
            <svg
              class="mr-3 h-6 w-6 text-gray-300 group-hover:text-gray-300
              group-focus:text-gray-300 transition ease-in-out duration-150"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor" />
            Home
          </Link>
          <Link
            href="/hotels"
            class="mt-1 group flex items-center px-2 py-2 text-sm leading-5
            font-medium text-gray-300 rounded-md hover:text-white
            hover:bg-indigo-700 focus:outline-none focus:text-white
            focus:bg-indigo-700 transition ease-in-out duration-150">
            <svg
              class="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-300
              group-focus:text-gray-300 transition ease-in-out duration-150"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor" />
            Hotels
          </Link>
          <a
            href="/cvbs"
            class="mt-1 group flex items-center px-2 py-2 text-sm leading-5
            font-medium text-gray-300 rounded-md hover:text-white
            hover:bg-indigo-700 focus:outline-none focus:text-white
            focus:bg-indigo-700 transition ease-in-out duration-150">
            <svg
              class="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-300
              group-focus:text-gray-300 transition ease-in-out duration-150"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor" />
            CVBs
          </a>
          <a
            href="/login"
            class="mt-1 group flex items-center px-2 py-2 text-sm leading-5
            font-medium text-gray-300 rounded-md hover:text-white
            hover:bg-indigo-700 focus:outline-none focus:text-white
            focus:bg-indigo-700 transition ease-in-out duration-150">
            <svg
              class="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-300
              group-focus:text-gray-300 transition ease-in-out duration-150"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor" />
            Login
          </a>
          <a
            href="/register"
            class="mt-1 group flex items-center px-2 py-2 text-sm leading-5
            font-medium text-gray-300 rounded-md hover:text-white
            hover:bg-indigo-700 focus:outline-none focus:text-white
            focus:bg-indigo-700 transition ease-in-out duration-150">
            <svg
              class="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-300
              group-focus:text-gray-300 transition ease-in-out duration-150"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor" />
            Register
          </a>
          <a
            href="/chat"
            class="mt-1 group flex items-center px-2 py-2 text-sm leading-5
            font-medium text-gray-300 rounded-md hover:text-white
            hover:bg-indigo-700 focus:outline-none focus:text-white
            focus:bg-indigo-700 transition ease-in-out duration-150">
            <svg
              class="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-300
              group-focus:text-gray-300 transition ease-in-out duration-150"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor" />
            Chat
          </a>
          <a
            href="/new/rfp"
            class="mt-1 group flex items-center px-2 py-2 text-sm leading-5
            font-medium text-gray-300 rounded-md hover:text-white
            hover:bg-indigo-700 focus:outline-none focus:text-white
            focus:bg-indigo-700 transition ease-in-out duration-150">
            <svg
              class="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-300
              group-focus:text-gray-300 transition ease-in-out duration-150"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor" />
            New RFP
          </a>
          <a
            href="/myRFPs"
            class="mt-1 group flex items-center px-2 py-2 text-sm leading-5
            font-medium text-gray-300 rounded-md hover:text-white
            hover:bg-indigo-700 focus:outline-none focus:text-white
            focus:bg-indigo-700 transition ease-in-out duration-150">
            <svg
              class="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-300
              group-focus:text-gray-300 transition ease-in-out duration-150"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor" />
            My RFPs
          </a>
        </nav>
      </div>
      <div class="flex-shrink-0 flex bg-indigo-700 p-4">
        <a href="#" class="flex-shrink-0 w-full group block">
          <div class="flex items-center">
            <div>
              <img
                class="inline-block h-9 w-9 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="" />
            </div>
            <div class="ml-3">
              <p class="text-sm leading-5 font-medium text-white">Tom Cook</p>
              <p
                class="text-xs leading-4 font-medium text-gray-300
                group-hover:text-gray-200 transition ease-in-out duration-150">
                View profile
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
  <div class="flex flex-col w-0 flex-1 overflow-hidden">
    <div class="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
      <button
        class="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center
        rounded-md text-gray-500 hover:text-gray-200 focus:outline-none
        focus:bg-indigo-200 transition ease-in-out duration-150"
        aria-label="Open sidebar">
        <svg
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
    <main
      class="flex-1 relative z-0 overflow-y-auto pt-2 pb-6 focus:outline-none
      md:py-6 bg-indigo-900"
      tabindex="0">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <!-- Replace with your content -->
        <div class="py-4">
          <Router>
            <Route exact component={Home} key="home" path="/" />
            <Route exact component={Hotels} key="hotels" path="/hotels" />
            <Route exact component={CVBs} key="cvbs" path="/cvbs" />
            <Route exact component={Login} key="login" path="/login" />
            <Route exact component={Register} key="register" path="/register" />
            <Route
              exact
              component={HotelProfile}
              path="/hotel/:id"
              let:router />
            <Route exact component={HotelProfile} path="/cvb/:id" let:router />
            <Route exact component={Chat} path="/chat" />
            <Route exact component={NewRFP} path="/new/rfp" />
            <Route exact component={MyRFPs} path="/myRFPs" />
            <Route exact component={ViewRFP} path="/rfp/:id" />
            <Route fallback>
              <div class="flex flex-col items-center p-10">
                <h1 class="text-center text-6xl">404</h1>
                Not found
              </div>
            </Route>
          </Router>
        </div>
        <!-- /End replace -->
      </div>
    </main>
  </div>
</div>
