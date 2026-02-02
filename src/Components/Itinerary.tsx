import { isArray, type ExtendProps } from "@samueldavis/solidlib";
import { mergeProps, Show, splitProps } from "solid-js";
import Time from "./Time";

export default function Itinerary(props: ExtendProps<"dl">) {
  return <dl {...props} />;
}

export function ItineraryItem(
  props: ExtendProps<"dd", { time: Date | readonly [Date, Date] }>,
) {
  const merged = mergeProps({ format: "time" as const }, props);
  const [local, parent] = splitProps(merged, ["time", "format"]);
  const [from, to] = (isArray(local.time) ? local.time : [local.time]).map(
    (time) => (
      <h2>
        <Time value={time} format="time" />
      </h2>
    ),
  );

  return (
    <>
      <dt>
        <Show when={to} fallback={from}>
          {(get) => (
            <>
              {from}
              <span> &mdash; </span>
              {get()}
            </>
          )}
        </Show>
      </dt>
      <dd {...parent} />
    </>
  );
}
