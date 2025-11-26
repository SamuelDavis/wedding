import type { ParentProps } from "solid-js";

export default function Layout(props: ParentProps) {
  return <main>{props.children}</main>;
}
