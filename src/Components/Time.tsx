import { HTMLDate, type ExtendProps } from "@samueldavis/solidlib";
import { format } from "date-fns";
import { splitProps } from "solid-js";

const TimeFormats = {
  short: "MM.dd.yy",
  long: "MMMM d, yyyy",
  time: "h:mm a",
} as const;

export default function Time(
  props: ExtendProps<typeof HTMLDate, { format?: keyof typeof TimeFormats }>,
) {
  const [local, parent] = splitProps(props, ["value", "format"]);
  const getFormat = (): string => TimeFormats[local.format ?? "long"];
  return (
    <HTMLDate value={local.value} {...parent}>
      {format(local.value, getFormat())}
    </HTMLDate>
  );
}
