import { createEffect, on, Show, type ParentProps } from "solid-js";
import { A, useLocation, useMatch } from "@solidjs/router";
import Time from "../Components/Time";
import { rsvpDate } from "../data";
import type { ExtendProps } from "@samueldavis/solidlib";
import Arrow from "../Components/Arrow";
import logoSrc from "../assets/Logo.png";

export default function Layout(props: ParentProps) {
  useScrollTo();
  const location = useLocation();
  const getIsRSVP = useMatch(() => "/rsvp/:success?");

  return (
    <main data-path={location.pathname}>
      <header>
        <nav class="header-nav">
          <ul>
            <li>
              <A href="/#our-story">Our Story</A>
            </li>
            <li>
              <A href="/#details">Details</A>
            </li>
          </ul>
          <ul>
            <li class="flex justify-center basis-full">
              <Logo class="w-40" />
            </li>
          </ul>
          <ul>
            <li>
              <A href="/your-trip" class="border">
                Your Trip
              </A>
            </li>
            <li>
              <A href="/rsvp" class="bg-text text-bg">
                RSVP
              </A>
            </li>
          </ul>
        </nav>
      </header>
      <hr />
      {props.children}
      <footer>
        <h2 class="font-bold">
          Please RSVP
          <small> by </small>
          <Time value={rsvpDate} />
        </h2>
      </footer>
      <Show when={!getIsRSVP()}>
        <footer>
          <nav>
            <ul class="justify-center">
              <li>
                <A href="/rsvp" class="border my-(--gap-default)">
                  <span>RSVP</span>
                  <Arrow />
                </A>
              </li>
            </ul>
          </nav>
        </footer>
      </Show>
      <footer class="border-y py-4 my-8">
        <nav>
          <ul class="justify-around">
            <li>
              <A href="/your-trip">Your Trip</A>
            </li>
          </ul>
        </nav>
      </footer>
      <footer class="flex justify-center">
        <Logo class="w-68" />
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
    <div {...props}>
      <A href="/">
        <img src={logoSrc} />
      </A>
    </div>
  );
}
