import type { ExtendProps } from "@samueldavis/solidlib";
import { mergeProps, splitProps } from "solid-js";

export default function Arrow(props: ExtendProps<"span">) {
  const merged = mergeProps({ class: "" }, props);
  const [local, parent] = splitProps(merged, ["class"]);
  return <span aria-hidden="true" class={`arrow ${local.class}`} {...parent} />;
}
