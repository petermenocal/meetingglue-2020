import { action } from "@storybook/addon-actions";
import { addParameters } from "@storybook/svelte";
import ConcessionsTable from "./concessionsTable.svelte";
import Notes from "./concessionsTable.notes.md";

export default {
  title: "Concessions Table",
  parameters: { notes: Notes }
};

export const text = () => ({
  Component: ConcessionsTable,
  props: { text: "Hello Button" },
  on: { click: action("clicked") }
});
