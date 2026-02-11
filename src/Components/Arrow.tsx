import type { ExtendProps } from "@samueldavis/solidlib";
import { mergeProps, splitProps } from "solid-js";

export default function Arrow(props: ExtendProps<"span">) {
  const merged = mergeProps({ "aria-hidden": true }, props);
  return <span data-arrow {...merged} />;
}
