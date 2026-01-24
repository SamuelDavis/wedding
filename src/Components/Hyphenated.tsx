import type { ExtendProps } from "@samueldavis/solidlib";
import { mergeProps, splitProps } from "solid-js";

export default function Hyphenated(
  props: ExtendProps<"span", { text: string }, "children">,
) {
  const merged = mergeProps(props, {
    class: `${props.class} hyphenated`.trimStart(),
  });
  const [local, parent] = splitProps(merged, ["text"]);
  const getChildren = () => local.text.split("").map((ch) => <span>{ch}</span>);
  return <span {...parent}>{getChildren()}</span>;
}
