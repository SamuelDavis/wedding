import { HTMLDate, type ExtendProps } from "@samueldavis/solidlib";
import { format } from "date-fns";
import { mergeProps, splitProps } from "solid-js";

export default function Time(
  props: ExtendProps<typeof HTMLDate, { format?: string }>,
) {
  const merged = mergeProps({ format: "MMMM d, yyyy" }, props);
  const [local, parent] = splitProps(merged, ["value", "format"]);
  return (
    <HTMLDate value={local.value} {...parent}>
      {format(local.value, local.format)}
    </HTMLDate>
  );
}
