import { type ExtendProps, type Targeted } from "@samueldavis/solidlib";
import {
  children,
  createEffect,
  createSignal,
  For,
  onCleanup,
  splitProps,
} from "solid-js";
import ImgAsset from "./ImgAsset";

export default function Marquee(props: ExtendProps<"ul", { srcs?: string[] }>) {
  const [local, parent] = splitProps(props, ["children", "srcs"]);
  const getChildren = () =>
    local.srcs?.map((src) => <ImgAsset src={src} />) ??
    children(() => local.children).toArray();

  let el!: HTMLUListElement;
  const [getMax, setMax] = createSignal(0);
  const [getVal, setVal] = createSignal(0);

  function onScroll() {
    const max = Math.max(0, el.scrollWidth - el.clientWidth);
    setMax(max);
    setVal(Math.min(max, el.scrollLeft));
  }

  function onInput(event: Targeted<HTMLInputElement>) {
    const num = event.currentTarget.valueAsNumber;
    const max = getMax();
    const val = Math.max(0, Math.min(max, num));
    el.scrollLeft = val;
    setVal(val);
  }

  createEffect(() => {
    onScroll();
    const resize = new ResizeObserver(onScroll);
    resize.observe(el);
    const onWin = () => onScroll();
    window.addEventListener("resize", onWin, { passive: true });
    onCleanup(() => {
      resize.disconnect();
      window.removeEventListener("resize", onWin);
    });
  });

  return (
    <div>
      <ul ref={el} role="marquee" onScroll={onScroll} {...parent}>
        <For each={getChildren()}>{(child) => <li>{child}</li>}</For>
      </ul>
      <input
        type="range"
        min={0}
        max={getMax()}
        value={getVal()}
        class="accent-primary w-full"
        onInput={onInput}
      />
    </div>
  );
}
