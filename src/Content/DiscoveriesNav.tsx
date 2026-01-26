import { HTMLIcon, type ExtendProps } from "@samueldavis/solidlib";
import { A } from "@solidjs/router";
import { splitProps, For, Show } from "solid-js";
import { placeholder } from "../data";

const links: {
  href: string;
  icon: string;
  text: string;
  src: string;
}[] = [
  {
    href: "/your-trip/nightlife",
    icon: "moon_stars",
    text: "Nightlife",
    src: placeholder(),
  },
  {
    href: "/your-trip/small-town-charm",
    icon: "family_home",
    text: "Small-Town Charm",
    src: placeholder(),
  },
  {
    href: "/your-trip/global-flavors",
    icon: "ramen_dining",
    text: "Global Flavors",
    src: placeholder(),
  },
];

export default function DiscoveriesNav(
  props: ExtendProps<"nav", { images?: boolean }>,
) {
  const [local, parent] = splitProps(props, ["images"]);
  return (
    <nav {...parent}>
      <ul>
        <For each={links}>
          {(link) => (
            <li>
              <A href={link.href}>
                <Show when={local.images}>
                  <img src={link.src} />
                </Show>
                <span>{link.text}</span>
              </A>
            </li>
          )}
        </For>
      </ul>
    </nav>
  );
}
