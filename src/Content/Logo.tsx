import type { ExtendProps } from "@samueldavis/solidlib";
import { A } from "@solidjs/router";
import { Show, splitProps } from "solid-js";

export default function Logo(props: ExtendProps<"h1", { stacked?: boolean }>) {
  const [local, parent] = splitProps(props, ["stacked"]);
  return (
    <h1 {...parent}>
      <A href="/">
        <i>
          <span>S</span>
          <Show when={local.stacked}>
            <br />
          </Show>
          <span>J</span>
        </i>
      </A>
    </h1>
  );
}
