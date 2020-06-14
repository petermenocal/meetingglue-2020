import { action } from "@storybook/addon-actions";
import { addParameters } from "@storybook/svelte";
import Chat from "./chat.svelte";
import Notes from "./chat.notes.md";

export default {
  title: "Chat",
  parameters: { notes: Notes }
};

export const text = () => ({
  Component: Chat,
  props: { text: "Hello Button" },
  on: { click: action("clicked") }
});
