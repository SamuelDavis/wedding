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
        <MobileNav class="sm:hidden" />
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
              <A href="/your-trip">Your Trip</A>
            </li>
            <li>
              <A href="/rsvp">RSVP</A>
            </li>
          </ul>
        </nav>
      </header>
      <hr />
      {props.children}
      <footer>
        <h2>
          Please RSVP
          <small> by </small>
          <Time value={rsvpDate} />
        </h2>
      </footer>
      <Show when={!getIsRSVP()}>
        <footer>
          <nav>
            <ul>
              <li>
                <A href="/rsvp">
                  <span>RSVP</span>
                  <Arrow />
                </A>
              </li>
            </ul>
          </nav>
        </footer>
      </Show>
      <footer>
        <nav>
          <ul>
            <li>
              <A href="/your-trip">Your Trip</A>
            </li>
          </ul>
        </nav>
      </footer>
      <footer>
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
        <img src={logoSrc} />
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
      <nav data-dropdown classList={{ "max-h-24": getOpen() }}>
        <ul>
          <li>
            <A href="/details">Details</A>
          </li>
          <li>
            <A href="/your-trip">Your Trip</A>
          </li>
        </ul>
        <ul>
          <li>
            <a href="/rsvp">
              <span>RSVP</span>
              <Arrow />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
