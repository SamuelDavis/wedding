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
        class="gap-(--gap-default) flex-col grid-flow-col max-md:flex md:grid"
        classList={{
          "md:grid-rows-1": getHasDiscovery(),
          "md:grid-cols-2": getHasDiscovery(),
          "md:grid-rows-[auto_auto]": !getHasDiscovery(),
          "md:grid-cols-3": !getHasDiscovery(),
        }}
      >
        <For each={links}>
          {(link) => {
            const getIsActive = useMatch(() => link.href);
            return getIsActive() ? null : (
              <>
                <Show when={local.images}>
                  <li>
                    <A href={link.href} class="border">
                      <ImgAsset src={link.src} />
                    </A>
                  </li>
                </Show>
                <li>
                  <A
                    href={link.href}
                    class="border flex flex-wrap items-center"
                  >
                    <span>{link.text}</span>
                    <Arrow class="h-4" />
                  </A>
                </li>
              </>
            );
          }}
        </For>
      </ul>
    </nav>
  );
}
