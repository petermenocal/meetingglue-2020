<script>
  import { configuredDateOptions, eventDurationDays } from "../stores.js";
  import NegotiableConcessions from "../components/NegotiableConcessions/negotiableConcessions.svelte";
  import DatePicker from "../components/DatePicker/datepickerRangePattern.svelte";
  import MeetingSpace from "../components/MeetingSpace/meetingspace.svelte";
  import RoomsTable from "../components/RoomsTable/roomstable.svelte";
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

<div class="bg-black color-azure_white relative">
  <button
    class="absolute bg-green-500 text-black font-extrabold px-2 py-4 top-0
    right-0"
    on:click={saveRFP}>
    Save RFP
  </button>
  <div class="flex flex-col p-5">
    <div cllass="py-10 w-full max-w-full">
      <h1 class="text-center uppercase font-bold">Choose dates</h1>
      <DatePicker />
    </div>
    <div class="py-10 w-full max-w-full">
      <MeetingSpace mode="fdsa" />
    </div>
    <div class="py-10 w-full max-w-full">
      <h1 class="text-center uppercase font-bold">Negotiable concessions</h1>
      <NegotiableConcessions {concessionsRequirements} />
    </div>
  </div>
</div>
