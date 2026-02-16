import { type ExtendProps, HTMLIcon } from "@samueldavis/solidlib";
import { A, useLocation, useNavigate } from "@solidjs/router";
import {
  createEffect,
  createSignal,
  mergeProps,
  on,
  splitProps,
} from "solid-js";
import Arrow from "../Components/Arrow";
import Logo from "./Logo";

export default function MobileNav(props: ExtendProps<"header">) {
  const location = useLocation();
  const merged = mergeProps({ class: "" }, props);
  const [local, parent] = splitProps(merged, ["class"]);
  const [getOpen, setOpen] = createSignal(false);
  const getType = (): string => (getOpen() ? "close" : "menu");

  createEffect(
    on(
      () => location.pathname + location.hash,
      () => setOpen(false),
      { defer: true },
    ),
  );

  function onClick() {
    setOpen((open) => !open);
  }

  return (
    <header class={`md:hidden ${local.class}`} {...parent}>
      <nav class="flex justify-between items-center">
        <ul>
          <li>
            <Logo />
          </li>
        </ul>
        <ul>
          <li>
            <button onClick={onClick}>
              <HTMLIcon type={getType()} />
            </button>
          </li>
        </ul>
      </nav>
      <nav
        class="absolute left-0 right-0 z-100 bg-background overflow-hidden flex flex-col justify-between pb-0 p-(--gap-xs) gap-(--gap-xs) max-h-0 transition-[max-height] duration-200 ease-in-out"
        classList={{
          "max-h-screen": getOpen(),
          "h-screen": getOpen(),
        }}
      >
        <ul class="flex flex-col gap-(--gap-sm) mb-(--gap-md)">
          <li>
            <A href="/#details">Details</A>
          </li>
          <li>
            <A href="/your-trip">Your Trip</A>
          </li>
          <li class="mt-(--gap-lg)">
            <a href="/rsvp" class="a-link w-full">
              <span>RSVP</span>
              <Arrow />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
