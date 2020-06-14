import Notes from "./roomstable.notes.md";
import RoomsTable from "./roomstable.svelte";

export default {
  title: "Rooms Table",
  parameters: { notes: Notes }
};

const label = "Date mode";
let hey = "hey";
const options = {
  Single: "single",
  Multiple: "multiple",
  Range: "range"
};
const defaultValue = "single";
const groupId = "GROUP-ID1";

export const basic = () => ({
  Component: RoomsTable,
  props: {
    title: "Rooms Table",
    duration: 7
  }
});
