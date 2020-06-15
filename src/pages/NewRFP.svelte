<script>
  import { configuredDateOptions, eventDurationDays } from "../stores.js";
  import NegotiableConcessions from "../components/NegotiableConcessions/negotiableConcessions.svelte";
  import DatePicker from "../components/DatePicker/datepickerRangePattern.svelte";
  import MeetingSpace from "../components/MeetingSpace/meetingspace.svelte";
  import RoomsTable from "../components/RoomsTable/roomstable.svelte";
  import AirportTransferComp from "../components/ConcessionsComponents/airportTransferComp.svelte";
  import BoxDrayageComp from "../components/ConcessionsComponents/boxDrayageComp.svelte";
  import ClubLoungeAccessComp from "../components/ConcessionsComponents/clubLoungeAccessComp.svelte";
  import CommissionGuestRoomComp from "../components/ConcessionsComponents/commissionGuestRoomComp.svelte";
  import CompRoom from "../components/ConcessionsComponents/compRoom.svelte";
  import CutOffDate from "../components/ConcessionsComponents/cutOffDate.svelte";
  import DiscountedStaffRoom from "../components/ConcessionsComponents/discountedStaffRoom.svelte";
  import GroupRateAvailable from "../components/ConcessionsComponents/groupRateAvailable.svelte";
  import GuestRoomAttrition from "../components/ConcessionsComponents/guestRoomAttrition.svelte";
  import GuestRoomCompRatio from "../components/ConcessionsComponents/guestRoomCompRatio.svelte";
  import ParkingPassComp from "../components/ConcessionsComponents/parkingPassComp.svelte";
  import PlannerPointsGroup from "../components/ConcessionsComponents/plannerPointsGroup.svelte";
  import PlannerPointsOther from "../components/ConcessionsComponents/plannerPointsOther.svelte";
  import RebateGuestRoom from "../components/ConcessionsComponents/rebateGuestRoom.svelte";
  import UpgradeAtGroupRate from "../components/ConcessionsComponents/upgradeAtGroupRate.svelte";
  import WelcomeAmenityComp from "../components/ConcessionsComponents/welcomeAmenityComp.svelte";
  import WifiInGuestRoomComp from "../components/ConcessionsComponents/wifiInGuestRoomComp.svelte";
  let concessionsRequirements = {
    airportTransferComp: true,
    boxDrayageComp: true,
    clubLoungeAccessComp: true,
    commissionGuestRoomComp: true,
    compRoom: true,
    cutOffDate: true,
    discountedStaffRoom: true,
    groupRateAvailable: true,
    guestRoomAttrition: true,
    guestRoomCompRatio: true,
    parkingPassComp: true,
    plannerPointsGroup: true,
    plannerPointsOther: true,
    rebateGuestRoom: true,
    upgradeAtGroupRate: true,
    welcomeAmenityComp: true,
    wifiInGuestRoomComp: true
  };
  function saveRFP() {
    fetch("/api/newRFP", {
      method: "post",
      body: JSON.stringify({ rfpData: true })
    }).then(() => navigateTo("/myRFPs"));
  }
</script>

<div class="text-white relative">

  <div class="md:grid md:grid-cols-3 md:gap-6">
    <div class="md:col-span-3">
      <div class="px-4 sm:px-0">
        <h3 class="text-lg font-medium leading-6 text-gray-400">
          Choose Dates
        </h3>
        <p class="mt-1 text-sm leading-5 text-gray-200">
          Search for event date patterns
        </p>
      </div>
    </div>
    <div class="mt-5 md:mt-0 md:col-span-3">
      <!-- card -->
      <div class="shadow sm:rounded-md sm:overflow-hidden mb-4">
        <div class="px-4 py-5 bg-white sm:p-6 text-gray-700">
          <DatePicker />
        </div>
      </div>
    </div>
  </div>

  <div class="hidden sm:block">
    <div class="py-5">
      <div class="border-t border-gray-200" />
    </div>
  </div>

  <div class="md:grid md:grid-cols-3 md:gap-6">
    <div class="md:col-span-3">
      <div class="px-4 sm:px-0">
        <h3 class="text-lg font-medium leading-6 text-gray-400">
          Room requirements
        </h3>
        <p class="mt-1 text-sm leading-5 text-gray-200">
          Select your room requirements for each day of your event.
        </p>
      </div>
    </div>
    <div class="mt-5 md:mt-0 md:col-span-3">
      <!-- card -->
      <div class="shadow sm:rounded-md sm:overflow-hidden mb-4">
        <div class="px-4 py-5 bg-white sm:p-6 text-gray-700">
          <MeetingSpace mode="fdsa" />
        </div>
      </div>
    </div>
  </div>

  <div class="hidden sm:block">
    <div class="py-5">
      <div class="border-t border-gray-200" />
    </div>
  </div>

  <div class="md:grid md:grid-cols-3 md:gap-6">
    <div class="md:col-span-1">
      <div class="px-4 sm:px-0">
        <h3 class="text-lg font-medium leading-6 text-gray-400">Rooms</h3>
        <p class="mt-1 text-sm leading-5 text-gray-200">
          These negotiable concesssions pertain to the hotel room accomodations.
        </p>
      </div>
    </div>
    <div class="mt-5 md:mt-0 md:col-span-2">
      <!-- card -->
      <div class="shadow sm:rounded-md sm:overflow-hidden mb-4">
        <div class="px-4 py-5 bg-white sm:p-6 text-gray-700">
          <GuestRoomAttrition />
        </div>
      </div>

      <!-- card -->
      <div class="shadow sm:rounded-md sm:overflow-hidden mb-4">
        <div class="px-4 py-5 bg-white sm:p-6 text-gray-700">
          <CutOffDate />
        </div>
      </div>

      <!-- card -->
      <div class="shadow sm:rounded-md sm:overflow-hidden mb-4">
        <div class="px-4 py-5 bg-white sm:p-6 text-gray-700">
          <WifiInGuestRoomComp />
        </div>
      </div>

      <!-- card -->
      <div class="shadow sm:rounded-md sm:overflow-hidden mb-4">
        <div class="px-4 py-5 bg-white sm:p-6 text-gray-700">
          <UpgradeAtGroupRate />
        </div>
      </div>

      <!-- card -->
      <div class="shadow sm:rounded-md sm:overflow-hidden mb-4">
        <div class="px-4 py-5 bg-white sm:p-6 text-gray-700">
          <CompRoom />
        </div>
      </div>

      <!-- card -->
      <div class="shadow sm:rounded-md sm:overflow-hidden mb-4">
        <div class="px-4 py-5 bg-white sm:p-6 text-gray-700">
          <DiscountedStaffRoom />
        </div>
      </div>

      <!-- card -->
      <div class="shadow sm:rounded-md sm:overflow-hidden mb-4">
        <div class="px-4 py-5 bg-white sm:p-6 text-gray-700">
          <GuestRoomCompRatio />
        </div>
      </div>

      <!-- card -->
      <div class="shadow sm:rounded-md sm:overflow-hidden mb-4">
        <div class="px-4 py-5 bg-white sm:p-6 text-gray-700">
          <GroupRateAvailable />
        </div>
      </div>

    </div>
  </div>

  <div class="hidden sm:block">
    <div class="py-5">
      <div class="border-t border-gray-200" />
    </div>
  </div>

  <div class="md:grid md:grid-cols-3 md:gap-6">
    <div class="md:col-span-1">
      <div class="px-4 sm:px-0">
        <h3 class="text-lg font-medium leading-6 text-gray-400">
          Commission/Rebate
        </h3>
        <p class="mt-1 text-sm leading-5 text-gray-200">
          These negotiable concesssions pertain to Commission/Rebate
        </p>
      </div>
    </div>
    <div class="mt-5 md:mt-0 md:col-span-2">
      <!-- card -->
      <div class="shadow sm:rounded-md sm:overflow-hidden mb-4">
        <div class="px-4 py-5 bg-white sm:p-6 text-gray-700">
          <CommissionGuestRoomComp />
        </div>
      </div>

      <!-- card -->
      <div class="shadow sm:rounded-md sm:overflow-hidden mb-4">
        <div class="px-4 py-5 bg-white sm:p-6 text-gray-700">
          <RebateGuestRoom />
        </div>
      </div>

    </div>
  </div>

  <div class="hidden sm:block">
    <div class="py-5">
      <div class="border-t border-gray-200" />
    </div>
  </div>

  <div class="md:grid md:grid-cols-3 md:gap-6">
    <div class="md:col-span-1">
      <div class="px-4 sm:px-0">
        <h3 class="text-lg font-medium leading-6 text-gray-400">Other</h3>
        <p class="mt-1 text-sm leading-5 text-gray-200">Everything else...</p>
      </div>
    </div>
    <div class="mt-5 md:mt-0 md:col-span-2">
      <!-- card -->
      <div class="shadow sm:rounded-md sm:overflow-hidden mb-4">
        <div class="px-4 py-5 bg-white sm:p-6 text-gray-700">
          <WelcomeAmenityComp />
        </div>
      </div>

      <!-- card -->
      <div class="shadow sm:rounded-md sm:overflow-hidden mb-4">
        <div class="px-4 py-5 bg-white sm:p-6 text-gray-700">
          <PlannerPointsGroup />
        </div>
      </div>

      <!-- card -->
      <div class="shadow sm:rounded-md sm:overflow-hidden mb-4">
        <div class="px-4 py-5 bg-white sm:p-6 text-gray-700">
          <WifiInGuestRoomComp />
        </div>
      </div>

      <!-- card -->
      <div class="shadow sm:rounded-md sm:overflow-hidden mb-4">
        <div class="px-4 py-5 bg-white sm:p-6 text-gray-700">
          <PlannerPointsOther />
        </div>
      </div>

      <!-- card -->
      <div class="shadow sm:rounded-md sm:overflow-hidden mb-4">
        <div class="px-4 py-5 bg-white sm:p-6 text-gray-700">
          <ParkingPassComp />
        </div>
      </div>

      <!-- card -->
      <div class="shadow sm:rounded-md sm:overflow-hidden mb-4">
        <div class="px-4 py-5 bg-white sm:p-6 text-gray-700">
          <AirportTransferComp />
        </div>
      </div>
    </div>
  </div>
  <button
    class="inline-flex items-center px-6 py-3 border border-transparent
    text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100
    hover:bg-indigo-50 focus:outline-none focus:border-indigo-300
    focus:shadow-outline-indigo active:bg-indigo-200 transition ease-in-out
    duration-150"
    on:click={saveRFP}>
    Save RFP
  </button>
</div>
