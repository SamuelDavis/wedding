import { HTMLDate, type ExtendProps } from "@samueldavis/solidlib";
import { format } from "date-fns";
import { mergeProps, Show, splitProps } from "solid-js";

export default function Time(
  props: ExtendProps<typeof HTMLDate, { format?: string }>,
) {
  const [local, parent] = splitProps(props, ["value", "format"]);
  return (
    <HTMLDate value={local.value} {...parent}>
      <Show when={local.format}>{(get) => format(local.value, get())}</Show>
    </HTMLDate>
  );
}
