import { type ExtendProps } from "@samueldavis/solidlib";
import { A, useLocation, useMatch } from "@solidjs/router";
import { splitProps, For, Show, createMemo } from "solid-js";
import nightlifeSrc from "../assets/SamandJess_charlotte.jpg";
import smallTownCharmSrc from "../assets/SamandJess_matthews.jpg";
import globalFlavorsSrc from "../assets/SamandJess_foodanddrink.jpg";
import ImgAsset from "../Components/ImgAsset";
import Arrow from "../Components/Arrow";

type DiscoveryLink = {
  href: string;
  icon: string;
  text: string;
  src: string;
};
const links: DiscoveryLink[] = [
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
  const location = useLocation();
  const getLinks = () =>
    links.filter((link) => !location.pathname.startsWith(link.href));

  return (
    <nav {...parent}>
      <ul>
        <For each={getLinks()}>
          {(link) => (
            <li>
              <DiscoveryLink image={local.images} link={link} />
            </li>
          )}
        </For>
      </ul>
    </nav>
  );
}

function DiscoveryLink(
  props: ExtendProps<
    typeof A,
    { image?: boolean; link: DiscoveryLink },
    "href"
  >,
) {
  const [local, parent] = splitProps(props, ["image", "link"]);
  return (
    <A href={local.link.href} {...parent}>
      <Show when={local.image}>
        <ImgAsset src={local.link.src} />
      </Show>
      <div class="a-link">
        <span>{local.link.text}</span>
        <Arrow />
      </div>
    </A>
  );
}
