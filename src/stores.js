import { writable, derived } from "svelte/store";

export const configuredDateOptions = writable();
export const eventDurationDays = writable();
export const requiredConcessions = writable();
export const concessionsValues = writable();
export const spaceRequirements = writable();
export const roomsRequirements = writable();

requiredConcessions.set({
  guestRoomAttrition: true,
  cutOffDate: true,
  wifiInGuestRoom: true,
  upgradeAtGroupRate: true,
  compRoom: true,
  discountedStaffRoom: true,
  guestRoomCompRatio: true,
  groupRateAvailable: true,
  commissionGuestRoom: true,
  rebateGuestroom: true,
  welcomeAmenityComp: true,
  plannerPointsGroup: true,
  plannerPointsOther: true,
  parkingPassComp: true,
  airportTransferComp: true
});

concessionsValues.set({
  guestRoomAttrition: 0,
  cutOffDate: "1 week",
  wifiInGuestRoom: true,
  upgradeAtGroupRate: { count: 0, type: "" },
  compRoom: { count: 0, type: "" },
  discountedStaffRoom: 0,
  guestRoomCompRatio: 10,
  groupRateAvailable: { pre: 0, post: 0 },
  commissionGuestRoom: { percentage: 0, paidTo: "" },
  rebateGuestroom: { amount: 0, paidTo: "" },
  welcomeAmenityComp: { count: 0 },
  plannerPointsGroup: "1x",
  plannerPointsOther: { value: "1x", notes: "" },
  parkingPassComp: 1,
  airportTransferComp: 1
});

eventDurationDays.set(1);
