import type { ExtendProps } from "@samueldavis/solidlib";
import { mergeProps } from "solid-js";

export default function Arrow(props: ExtendProps<"span">) {
  const merged = mergeProps({ "aria-hidden": true, class: "arrow" }, props);
  return <span {...merged} />;
}
