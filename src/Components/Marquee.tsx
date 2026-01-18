import type { ExtendProps } from "@samueldavis/solidlib";
import { For, Show, splitProps } from "solid-js";

export default function Marquee(props: ExtendProps<"ul", { srcs?: string[] }>) {
  const [local, parent] = splitProps(props, ["children", "srcs"]);
  return (
    <ul role="marquee" {...parent}>
      <Show when={local.srcs} fallback={local.children}>
        {(get) => (
          <For each={get()}>
            {(src) => (
              <li>
                <img src={src} />
              </li>
            )}
          </For>
        )}
      </Show>
    </ul>
  );
}
