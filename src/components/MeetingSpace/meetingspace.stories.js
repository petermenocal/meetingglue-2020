import Notes from "./meetingspace.notes.md";
import MeetingSpace from "./meetingspace.svelte";

export default {
  title: "Meeting Space",
  parameters: { notes: Notes }
};

export const basic = () => ({
  Component: MeetingSpace,
  props: {
    title: "Meeting Space"
  }
});
