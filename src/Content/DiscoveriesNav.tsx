import { type ExtendProps } from "@samueldavis/solidlib";
import { A, useMatch } from "@solidjs/router";
import { splitProps, For, Show } from "solid-js";
import nightlifeSrc from "../assets/SamandJess_charlotte.jpg";
import smallTownCharmSrc from "../assets/SamandJess_matthews.jpg";
import globalFlavorsSrc from "../assets/SamandJess_foodanddrink.jpg";
import ImgAsset from "../Components/ImgAsset";

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
    src: nightlifeSrc,
  },
  {
    href: "/your-trip/small-town-charm",
    icon: "family_home",
    text: "Small-Town Charm",
    src: smallTownCharmSrc,
  },
  {
    href: "/your-trip/global-flavors",
    icon: "ramen_dining",
    text: "Global Flavors",
    src: globalFlavorsSrc,
  },
];

export default function DiscoveriesNav(
  props: ExtendProps<"nav", { images?: boolean }>,
) {
  const [local, parent] = splitProps(props, ["images"]);
  return (
    <nav {...parent}>
      <ul class="gap-16">
        <For each={links}>
          {(link) => {
            const getIsActive = useMatch(() => link.href);
            return getIsActive() ? null : (
              <li>
                <A href={link.href}>
                  <Show when={local.images}>
                    <ImgAsset class="framed" src={link.src} />
                  </Show>
                  <button>{link.text}</button>
                </A>
              </li>
            );
          }}
        </For>
      </ul>
    </nav>
  );
}
