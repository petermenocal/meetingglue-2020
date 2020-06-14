<script>
  import { onMount } from "svelte";
  export let concessionsRequirements;

  import AirportTransferComp from "../ConcessionsComponents/airportTransferComp.svelte";
  import BoxDrayageComp from "../ConcessionsComponents/boxDrayageComp.svelte";
  import ClubLoungeAccessComp from "../ConcessionsComponents/clubLoungeAccessComp.svelte";
  import CommissionGuestRoomComp from "../ConcessionsComponents/commissionGuestRoomComp.svelte";
  import CompRoom from "../ConcessionsComponents/compRoom.svelte";
  import CutOffDate from "../ConcessionsComponents/cutOffDate.svelte";
  import DiscountedStaffRoom from "../ConcessionsComponents/discountedStaffRoom.svelte";
  import GroupRateAvailable from "../ConcessionsComponents/groupRateAvailable.svelte";
  import GuestRoomAttrition from "../ConcessionsComponents/guestRoomAttrition.svelte";
  import GuestRoomCompRatio from "../ConcessionsComponents/guestRoomCompRatio.svelte";
  import ParkingPassComp from "../ConcessionsComponents/parkingPassComp.svelte";
  import PlannerPointsGroup from "../ConcessionsComponents/plannerPointsGroup.svelte";
  import PlannerPointsOther from "../ConcessionsComponents/plannerPointsOther.svelte";
  import RebateGuestRoom from "../ConcessionsComponents/rebateGuestRoom.svelte";
  import UpgradeAtGroupRate from "../ConcessionsComponents/upgradeAtGroupRate.svelte";
  import WelcomeAmenityComp from "../ConcessionsComponents/welcomeAmenityComp.svelte";
  import WifiInGuestRoomComp from "../ConcessionsComponents/wifiInGuestRoomComp.svelte";
</script>

<div class="flex flex-row items-center justify-center flex-wrap">
  <h1 class="text-2xl text-center mt-10 w-full">Rooms</h1>
  {#if concessionsRequirements && concessionsRequirements.guestRoomAttrition}
    <div class="w-full md:w-1/2">
      <GuestRoomAttrition {concessionsRequirements} />
    </div>
  {/if}
  {#if concessionsRequirements && concessionsRequirements.cutOffDate}
    <div class="w-full md:w-1/2">
      <CutOffDate {concessionsRequirements} />
    </div>
  {/if}
  <div class="w-full flex flex-row flex-wrap">
    {#if concessionsRequirements && concessionsRequirements.wifiInGuestRoomComp}
      <div class="w-full md:w-1/2">
        <WifiInGuestRoomComp {concessionsRequirements} />
      </div>
    {/if}
    {#if concessionsRequirements && concessionsRequirements.upgradeAtGroupRate}
      <div class="w-full md:w-1/2">
        <UpgradeAtGroupRate {concessionsRequirements} />
      </div>
    {/if}
    {#if concessionsRequirements && concessionsRequirements.compRoom}
      <div class="w-full md:w-1/2">
        <CompRoom {concessionsRequirements} />
      </div>
    {/if}
    {#if concessionsRequirements && concessionsRequirements.discountedStaffRoom}
      <div class="w-full md:w-1/2">
        <DiscountedStaffRoom {concessionsRequirements} />
      </div>
    {/if}
    {#if concessionsRequirements && concessionsRequirements.guestRoomCompRatio}
      <div class="w-full md:w-1/2">
        <GuestRoomCompRatio {concessionsRequirements} />
      </div>
    {/if}
    {#if concessionsRequirements && concessionsRequirements.groupRateAvailable}
      <div class="w-full md:w-1/2">
        <GroupRateAvailable {concessionsRequirements} />
      </div>
    {/if}
  </div>
  <h1 class="text-2xl text-center mt-10 w-full">Commission/Rebate</h1>
  {#if concessionsRequirements && concessionsRequirements.commissionGuestRoomComp}
    <div class="w-full md:w-1/2">
      <CommissionGuestRoomComp {concessionsRequirements} />
    </div>
  {/if}
  {#if concessionsRequirements && concessionsRequirements.rebateGuestRoom}
    <div class="w-full md:w-1/2">
      <RebateGuestRoom {concessionsRequirements} />
    </div>
  {/if}

  <h1 class="text-2xl text-center mt-10 w-full">Other</h1>
  {#if concessionsRequirements && concessionsRequirements.welcomeAmenityComp}
    <div class="w-full md:w-1/2">
      <WelcomeAmenityComp {concessionsRequirements} />
    </div>
  {/if}
  {#if concessionsRequirements && concessionsRequirements.plannerPointsGroup}
    <div class="w-full md:w-1/2">
      <PlannerPointsGroup {concessionsRequirements} />
    </div>
  {/if}
  {#if concessionsRequirements && concessionsRequirements.plannerPointsOther}
    <div class="w-full md:w-1/2">
      <PlannerPointsOther {concessionsRequirements} />
    </div>
  {/if}
  {#if concessionsRequirements && concessionsRequirements.parkingPassComp}
    <div class="w-full md:w-1/2">
      <ParkingPassComp {concessionsRequirements} />
    </div>
  {/if}
  {#if concessionsRequirements && concessionsRequirements.airportTransferComp}
    <div class="w-full md:w-1/2">
      <AirportTransferComp {concessionsRequirements} />
    </div>
  {/if}
  {#if concessionsRequirements && concessionsRequirements.boxDrayageComp}
    <div class="w-full md:w-1/2">
      <BoxDrayageComp {concessionsRequirements} />
    </div>
  {/if}
  {#if concessionsRequirements && concessionsRequirements.clubLoungeAccessComp}
    <ClubLoungeAccessComp {concessionsRequirements} />
  {/if}
</div>
