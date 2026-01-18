import { isArray, type ExtendProps } from "@samueldavis/solidlib";
import { For, type JSX, mergeProps, Show, splitProps } from "solid-js";
import Time from "./Time";

type ItineraryItem = {
  date: Date | readonly [Date, Date];
  description: JSX.Element;
};

export default function Itinerary(
  props: ExtendProps<
    "dl",
    {
      value: ItineraryItem[];
      format?: string;
    },
    "children"
  >,
) {
  props = mergeProps({ format: "h:mm a" }, props);
  const [local, parent] = splitProps(props, ["value", "format"]);
  return (
    <dl {...parent}>
      <For each={local.value}>
        {({ date, description }) => {
          const [from, to] = (isArray(date) ? date : [date]).map((date) => (
            <Time value={date} format={local.format} />
          ));

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
              <dd>{description}</dd>
            </>
          );
        }}
      </For>
    </dl>
  );
}
