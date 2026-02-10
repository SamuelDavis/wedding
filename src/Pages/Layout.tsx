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
    <main data-path={location.pathname} class="mx-auto w-360">
      <header>
        <nav id="main-nav" class="navigation-button-link">
          <ul>
            <li>
              <A href="/#our-story">Our Story</A>
            </li>
            <li>
              <A href="/#details">Details</A>
            </li>
          </ul>
          <ul>
            <li>
              <Logo class="h-40" />
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
                class="bg-(--Primary-Mauve-800) text-(--Background-Soft-100)"
              >
                RSVP
              </A>
            </li>
          </ul>
        </nav>
      </header>
      <hr class="mb-20" />
      {props.children}
      <footer class="text-center">
        <h2 class="title-h1-bold-caps mb-16">
          Please RSVP
          <small class="title-h1-decorative"> by </small>
          <Time value={rsvpDate} />
        </h2>
        <Show when={!getIsRSVP()}>
          <nav>
            <ul>
              <li>
                <A href="/rsvp" class="border uppercase p-4">
                  <span>RSVP to Wedding</span>
                  <Arrow />
                </A>
              </li>
            </ul>
          </nav>
        </Show>
        <nav class="border-y py-6 my-28">
          <ul>
            <li>
              <A href="/your-trip">Your Trip</A>
            </li>
          </ul>
        </nav>
        <Logo class="h-68" />
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

function Logo(props: ExtendProps<typeof A, {}, "href">) {
  return (
    <A href="/" {...props}>
      <img src={logoSrc} />
    </A>
  );
}
