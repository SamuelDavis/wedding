import type { ExtendProps } from "@samueldavis/solidlib";
import { mergeProps, splitProps } from "solid-js";
import Arrow from "./Arrow";
import ImgAsset from "./ImgAsset";

export default function Attraction(
  props: ExtendProps<
    "section",
    {
      imageSrc: string;
      title: string;
      siteHref: string;
      mapHref: string;
    }
  >,
) {
  const merged = mergeProps({ class: "" }, props);
  const [local, parent] = splitProps(merged, [
    "imageSrc",
    "title",
    "siteHref",
    "mapHref",
    "children",
    "class",
  ]);
  return (
    <section class={`cols-2 ${local.class}`} {...parent}>
      <ImgAsset src={local.imageSrc} class="border" />
      <div class="mt-4">
        <h2>
          <a href={local.siteHref} target="_blank">
            {local.title}
          </a>
        </h2>
        {local.children}
        <a href={local.mapHref} target="_blank" class="a-link">
          <span>View Route</span>
          <Arrow />
        </a>
      </div>
    </section>
  );
}
