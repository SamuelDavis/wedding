import {
  createEffect,
  createSignal,
  on,
  Show,
  splitProps,
  type ParentProps,
  mergeProps,
} from "solid-js";
import { A, useLocation, useMatch } from "@solidjs/router";
import Time from "../Components/Time";
import { rsvpDate } from "../data";
import { type ExtendProps, HTMLIcon } from "@samueldavis/solidlib";
import Arrow from "../Components/Arrow";
import logoSrc from "../assets/Logo.png";

export default function Layout(props: ParentProps) {
  useScrollTo();
  const location = useLocation();
  const getIsRSVP = useMatch(() => "/rsvp/:success?");

  return (
    <main data-path={location.pathname}>
      <header>
        <MobileNav class="sm:hidden p-(--gap-sm)" />
        <nav data-horizontal class="nav-x hidden sm:flex">
          <ul>
            <li>
              <A href="/#our-story">Our Story</A>
            </li>
            <li>
              <A href="/#details">Details</A>
            </li>
          </ul>
          <ul class="justify-center">
            <li>
              <Logo />
            </li>
          </ul>
          <ul>
            <li>
              <A href="/your-trip" class="border">
                Your Trip
              </A>
            </li>
            <li>
              <A
                href="/rsvp"
                class="border bg-(--color-bg-secondary) border-(--color-bg-secondary) text-(--color-text-secondary)"
              >
                RSVP
              </A>
            </li>
          </ul>
        </nav>
      </header>
      <hr class="mb-(--gap-lg)" />
      {props.children}
      <footer class="text-center my-(--gap-lg) flex flex-col gap-(--gap-lg)">
        <h1 class="font-bold">
          Please RSVP
          <small> by </small>
          <Time value={rsvpDate} />
        </h1>
        <Show when={!getIsRSVP()}>
          <A href="/rsvp" class="border self-center">
            <span>RSVP</span>
            <Arrow />
          </A>
        </Show>
        <A href="/your-trip" class="text-center border-y py-(--gap-sm)">
          Your Trip
        </A>
      </footer>
      <footer class="flex justify-center">
        <Logo />
      </footer>
    </main>
  );
}

function useScrollTo(): void {
  const location = useLocation();

  createEffect(
    on(
      () => location.pathname + location.hash,
      () => {
        const hash = location.hash;
        if (hash) {
          const id = decodeURIComponent(hash.slice(1));
          queueMicrotask(() => {
            document
              .getElementById(id)
              ?.scrollIntoView({ block: "start", behavior: "smooth" });
          });
        } else window.scrollTo({ top: 0, behavior: "auto" });
      },
    ),
  );
}

function Logo(props: ExtendProps<"div", { stacked?: boolean }>) {
  return (
    <div data-logo {...props}>
      <A href="/">
        <img src={logoSrc} class="object-contain" />
      </A>
    </div>
  );
}

function MobileNav(props: ExtendProps<"header">) {
  const merged = mergeProps({ class: "" }, props);
  const [local, parent] = splitProps(merged, ["class"]);
  const [getOpen, setOpen] = createSignal(false);
  const getType = (): string => (getOpen() ? "close" : "menu");
  function onClick() {
    setOpen((open) => !open);
  }

  return (
    <header class={`z-top relative ${local.class}`} {...parent}>
      <nav data-horizontal>
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
      <nav data-vertical data-dropdown classList={{ "max-h-24": getOpen() }}>
        <ul>
          <li>
            <A href="/details">Details</A>
          </li>
          <li>
            <A href="/your-trip">Your Trip</A>
          </li>
        </ul>
        <ul class="w-full">
          <li class="w-full">
            <a href="/rsvp" class="border flex justify-center w-full">
              <span>
                <span>RSVP</span>
                <Arrow />
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
