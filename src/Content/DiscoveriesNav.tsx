import { type ExtendProps } from "@samueldavis/solidlib";
import { A, useLocation, useMatch } from "@solidjs/router";
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
  const location = useLocation();
  const [local, parent] = splitProps(props, ["images"]);
  const getLinks = () =>
    links.filter((link) => location.pathname !== link.href);

  if (local.images)
    return (
      <nav id="discovery-nav" {...parent}>
        <ul class="grid grid-cols-3 gap-16">
          <For each={getLinks()}>
            {(link) => (
              <li>
                <A href={link.href}>
                  <ImgAsset src={link.src} class="framed mb-12" />
                  <div class="py-2 px-6 w-full border ">
                    <span>{link.text}</span>
                    <Arrow />
                  </div>
                </A>
              </li>
            )}
          </For>
        </ul>
      </nav>
    );

  return (
    <nav id="discovery-nav" {...parent}>
      <ul class="grid grid-cols-2 gap-16">
        <For each={getLinks()}>
          {(link) => (
            <li>
              <A href={link.href} class="py-2 px-6 w-full border">
                <span>{link.text}</span>
                <Arrow />
              </A>
            </li>
          )}
        </For>
      </ul>
    </nav>
  );
}
