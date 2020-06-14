<script>
  import { onMount } from "svelte";
  export let router;
  let profile;
  let loaded = false;
  onMount(async () => {
    const res = await fetch(`/api/hotel?id=${router.params.id}`);
    const raw = await res.json();
    profile = raw.hotels[0];
    loaded = true;
  });
</script>

{#if profile}
  <div
    class="bg-black p-5 color-azure_white flex flex-row items-center
    justify-between">
    <div>{profile.title}</div>
    <div class="text-right w-1/3">
      {profile.address}
      <br />
      {profile.city}, {profile.state}
    </div>

  </div>

  <div class="bg-black flex flex-row color-azure_white">
    <div class="w-full md:w-3/4">
      <img src="images/uploads/{profile.avatarFilename}" alt="" />
    </div>
    <div class="w-full md:w-1/4 bg-white text-black text-sm flex flex-row">
      <div class="w-1/2 pl-2">
        <div>Rating</div>
        <div>Sleeping Rooms</div>
        <div>Rooms Tax</div>
        <div>Resort Fee</div>
        <div>Meeting Rooms</div>
        <div>Largest Room (1)</div>
        <div>Largest Room (2)</div>
        <div>In-House A/V</div>
        <div>Self-parking</div>
        <div>Valet parking</div>
        <div>Loyalty program</div>
        <div>Service charge</div>
        <div>Public Wifi</div>
        <div>Fitness center</div>
        <div>Pool</div>
        <div>Spa</div>
        <div>Union status</div>
        <div>Airports</div>
        <div>Public Transportation</div>
      </div>
      <div class="w-1/2">
        <div>{profile.diamonds}</div>
        <div>{profile.numberOfSleepingRooms || 0}</div>
        <div>{profile.roomsTaxPercent}</div>
        <div>{profile.resortFee || `$0`}</div>
        <div>{profile.meetingRoomsAmount || 0}</div>
        <div>{profile.largestRoom1 || `0sqft.`}</div>
        <div>{profile.largestRoom2 || `0sqft.`}</div>
        <div>{profile.inHouseAV || `No`}</div>
        <div>{profile.parkingFeeSelf || `$0`}</div>
        <div>{profile.parkingFeeValet || `$0`}</div>
        <div>{profile.loyaltyProgramName}</div>
        <div>{profile.serviceChargePercent || `0%`}</div>
        <div>{profile.publicWifiFee || `$0`}</div>
        <div>{profile.fitnessCenter ? `Yes` : `No`}</div>
        <div>{profile.hasPool ? `Yes` : `No`}</div>
        <div>{profile.hasSpa ? `Yes` : `No`}</div>
        <div>{profile.union ? `Yes` : `No`}</div>
        <div>{profile.closestAirport}</div>
        <div>Public Transportation</div>
      </div>
    </div>
  </div>
{/if}
