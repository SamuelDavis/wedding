import { type ExtendProps } from "@samueldavis/solidlib";
import { useMatch } from "@solidjs/router";
import { splitProps, For, Show } from "solid-js";
import nightlifeSrc from "../assets/SamandJess_charlotte.jpg";
import smallTownCharmSrc from "../assets/SamandJess_matthews.jpg";
import globalFlavorsSrc from "../assets/SamandJess_foodanddrink.jpg";
import ImgAsset from "../Components/ImgAsset";
import Link from "../Components/Link";

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
      <ul>
        <For each={links}>
          {(link) => {
            const getIsActive = useMatch(() => link.href);
            return getIsActive() ? null : (
              <li>
                <Show when={local.images}>
                  <Link href={link.href}>
                    <ImgAsset class="framed" src={link.src} />
                  </Link>
                </Show>
                <Link
                  class="border w-full whitespace-nowrap"
                  arrow
                  href={link.href}
                >
                  <button>{link.text}</button>
                </Link>
              </li>
            );
          }}
        </For>
      </ul>
    </nav>
  );
}
