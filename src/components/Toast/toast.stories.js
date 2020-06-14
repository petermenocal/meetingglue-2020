import Notes from "./toast.notes.md";
import Toast from "./toast.svelte";

export default {
  title: "Toast",
  parameters: { notes: Notes }
};

export const basic = () => ({
  Component: Toast,
  props: { visible: true, message: "This is a demo alert message." }
});
