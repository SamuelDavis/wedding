import { type ExtendProps } from "@samueldavis/solidlib";
import { A, useMatch } from "@solidjs/router";
import { splitProps, For, Show, createMemo } from "solid-js";
import nightlifeSrc from "../assets/SamandJess_charlotte.jpg";
import smallTownCharmSrc from "../assets/SamandJess_matthews.jpg";
import globalFlavorsSrc from "../assets/SamandJess_foodanddrink.jpg";
import ImgAsset from "../Components/ImgAsset";
import Arrow from "../Components/Arrow";

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
  const getDiscovery = useMatch(() => "/your-trip/:discovery");
  const getHasDiscovery = createMemo(() => Boolean(getDiscovery()));
  return (
    <nav {...parent}>
      <ul
        class="grid gap-(--gap-lg) sm:grid-rows-1"
        classList={{
          "grid-rows-2": getHasDiscovery(),
          "grid-rows-3": !getHasDiscovery(),
          "sm:grid-cols-2": getHasDiscovery(),
          "sm:grid-cols-3": !getHasDiscovery(),
        }}
      >
        <For each={links}>
          {(link) => {
            const getIsActive = useMatch(() => link.href);
            return getIsActive() ? null : (
              <li class="h-full">
                <A href={link.href}>
                  <Show when={local.images}>
                    <ImgAsset
                      src={link.src}
                      class="framed mb-(--gap-md) w-full"
                    />
                  </Show>
                  <div class="border w-full p-0.5">
                    <span>{link.text}</span>
                    <Arrow />
                  </div>
                </A>
              </li>
            );
          }}
        </For>
      </ul>
    </nav>
  );
}
