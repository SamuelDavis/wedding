import type { ExtendProps } from "@samueldavis/solidlib";
import { splitProps } from "solid-js";

export default function Arrow(props: ExtendProps<"span">) {
  const [local, parent] = splitProps(props, ["class"]);
  return (
    <span
      aria-hidden="true"
      class={
        "relative min-w-12 h-0 inline-flex align-middle mx-2 border-inherit " +
        "before:absolute before:w-full before:top-1/2 before:-translate-y-1/2 before:border-t-2 before:border-inherit " +
        "after:absolute after:right-0 after:size-2 after:top-1/2 after:-translate-y-1/2 after:rotate-45 after:border-t-2 after:border-r-2 after:border-inherit " +
        local.class
      }
      {...parent}
    />
  );
}
