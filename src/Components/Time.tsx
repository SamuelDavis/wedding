import { HTMLDate, type ExtendProps } from "@samueldavis/solidlib";
import { formatInTimeZone } from "date-fns-tz";
import { splitProps } from "solid-js";

const TimeFormats = {
  short: "MM.dd.yy",
  long: "EEEE, MMMM d, yyyy",
  date: "MMMM d, yyyy",
  time: "h:mm a",
} as const;

export default function Time(
  props: ExtendProps<typeof HTMLDate, { format: keyof typeof TimeFormats }>,
) {
  const [local, parent] = splitProps(props, ["value", "format"]);
  const getFormatted = () =>
    formatInTimeZone(
      local.value,
      "America/New_York",
      TimeFormats[local.format],
    );
  return (
    <HTMLDate value={local.value} {...parent}>
      {getFormatted()}
    </HTMLDate>
  );
}
