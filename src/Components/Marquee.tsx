import type { ExtendProps } from "@samueldavis/solidlib";
import { children, For, splitProps } from "solid-js";
import ImgAsset from "./ImgAsset";

export default function Marquee(props: ExtendProps<"ul", { srcs?: string[] }>) {
  const [local, parent] = splitProps(props, ["children", "srcs"]);
  const getChildren = () =>
    local.srcs?.map((src) => <ImgAsset src={src} class="w-full" />) ??
    children(() => local.children).toArray();
  return (
    <ul role="marquee" {...parent}>
      <For each={getChildren()}>
        {(child) => <li class="w-full h-full">{child}</li>}
      </For>
    </ul>
  );
}
