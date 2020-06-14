import { action } from "@storybook/addon-actions";
import Notes from "./datepicker.notes.md";
import DatePicker from "./datepicker.svelte";
import DatePickerRangePattern from "./datepickerRangePattern.svelte";
export default {
  title: "DatePicker",
  parameters: { notes: Notes }
};
export const basic = () => ({
  Component: DatePicker,
  props: { startDate: new Date(), endDate: new Date() }
});
export const rangePattern = () => ({
  Component: DatePickerRangePattern,
  props: { startDate: new Date(), endDate: new Date() }
});
