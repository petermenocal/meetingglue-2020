import Notes from "./title.notes.md";
import Title from "./title.svelte";

export default {
  title: "Title",
  parameters: { notes: Notes }
};

export const basic = () => ({
  Component: Title,
  props: { title: "Title" }
});
