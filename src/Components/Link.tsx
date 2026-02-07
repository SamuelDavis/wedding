import type { ExtendProps } from "@samueldavis/solidlib";
import { A } from "@solidjs/router";
import { splitProps, Show } from "solid-js";

export default function Link(
  props: ExtendProps<typeof A, { border?: boolean; arrow?: boolean }>,
) {
  const [local, parent] = splitProps(props, ["children", "border", "arrow"]);

  return (
    <A {...parent}>
      <span>{local.children}</span>
      <Show when={local.arrow}>
        <span class="inline-block arrow" aria-hidden="true" />
      </Show>
    </A>
  );
}
