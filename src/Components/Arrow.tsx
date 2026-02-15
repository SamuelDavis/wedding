import type { ExtendProps } from "@samueldavis/solidlib";
import { mergeProps, splitProps } from "solid-js";

export default function Arrow(props: ExtendProps<"span">) {
  const merged = mergeProps({ "aria-hidden": true, class: "" }, props);
  const [local, parent] = splitProps(merged, ["class"]);
  return <span class={`arrow ${local.class}`} {...parent} />;
}
