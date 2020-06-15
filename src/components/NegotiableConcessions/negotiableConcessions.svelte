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
      <GuestRoomAttrition />
    </div>
  {/if}
  {#if concessionsRequirements && concessionsRequirements.cutOffDate}
    <div class="w-full md:w-1/2">
      <CutOffDate />
    </div>
  {/if}
  <div class="w-full flex flex-row flex-wrap">
    {#if concessionsRequirements && concessionsRequirements.wifiInGuestRoomComp}
      <div class="w-full md:w-1/2">
        <WifiInGuestRoomComp />
      </div>
    {/if}
    {#if concessionsRequirements && concessionsRequirements.upgradeAtGroupRate}
      <div class="w-full md:w-1/2">
        <UpgradeAtGroupRate />
      </div>
    {/if}
    {#if concessionsRequirements && concessionsRequirements.compRoom}
      <div class="w-full md:w-1/2">
        <CompRoom />
      </div>
    {/if}
    {#if concessionsRequirements && concessionsRequirements.discountedStaffRoom}
      <div class="w-full md:w-1/2">
        <DiscountedStaffRoom />
      </div>
    {/if}
    {#if concessionsRequirements && concessionsRequirements.guestRoomCompRatio}
      <div class="w-full md:w-1/2">
        <GuestRoomCompRatio />
      </div>
    {/if}
    {#if concessionsRequirements && concessionsRequirements.groupRateAvailable}
      <div class="w-full md:w-1/2">
        <GroupRateAvailable />
      </div>
    {/if}
  </div>
  <h1 class="text-2xl text-center mt-10 w-full">Commission/Rebate</h1>
  {#if concessionsRequirements && concessionsRequirements.commissionGuestRoomComp}
    <div class="w-full md:w-1/2">
      <CommissionGuestRoomComp />
    </div>
  {/if}
  {#if concessionsRequirements && concessionsRequirements.rebateGuestRoom}
    <div class="w-full md:w-1/2">
      <RebateGuestRoom />
    </div>
  {/if}
  <h1 class="text-2xl text-center mt-10 w-full">Other</h1>
  {#if concessionsRequirements && concessionsRequirements.welcomeAmenityComp}
    <div class="w-full md:w-1/2">
      <WelcomeAmenityComp />
    </div>
  {/if}
  {#if concessionsRequirements && concessionsRequirements.plannerPointsGroup}
    <div class="w-full md:w-1/2">
      <PlannerPointsGroup />
    </div>
  {/if}
  {#if concessionsRequirements && concessionsRequirements.plannerPointsOther}
    <div class="w-full md:w-1/2">
      <PlannerPointsOther />
    </div>
  {/if}
  {#if concessionsRequirements && concessionsRequirements.parkingPassComp}
    <div class="w-full md:w-1/2">
      <ParkingPassComp />
    </div>
  {/if}
  {#if concessionsRequirements && concessionsRequirements.airportTransferComp}
    <div class="w-full md:w-1/2">
      <AirportTransferComp />
    </div>
  {/if}
  {#if concessionsRequirements && concessionsRequirements.boxDrayageComp}
    <div class="w-full md:w-1/2">
      <BoxDrayageComp />
    </div>
  {/if}
  {#if concessionsRequirements && concessionsRequirements.clubLoungeAccessComp}
    <ClubLoungeAccessComp />
  {/if}
</div>
