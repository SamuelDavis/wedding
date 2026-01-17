import type { ExtendProps } from "@samueldavis/solidlib";
import { format } from "date-fns";
import { Show, splitProps } from "solid-js";

export default function Time(
  props: ExtendProps<
    "time",
    { value: Date; format?: string },
    "children" | "datetime"
  >,
) {
  const [local, parent] = splitProps(props, ["value", "format"]);
  return (
    <time datetime={local.value.toUTCString()} {...parent}>
      <Show when={local.format} fallback={local.value.toLocaleString()}>
        {(get) => format(local.value, get())}
      </Show>
    </time>
  );
}
