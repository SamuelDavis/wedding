import { createEffect, on, Show, type ParentProps } from "solid-js";
import { A, useLocation, useMatch } from "@solidjs/router";
import Time from "../Components/Time";
import { rsvpDate } from "../data";
import Arrow from "../Components/Arrow";
import Logo from "../Components/Logo";
import MobileNav from "../Components/MobileNav";

export default function Layout(props: ParentProps) {
  useScrollTo();
  const location = useLocation();
  const getIsRSVP = useMatch(() => "/rsvp/:success?");

  return (
    <main data-path={location.pathname}>
      <header>
        <MobileNav class="sm:hidden" />
        <nav class="grid grid-cols-[1fr_auto_1fr] gap-(--gap-sm) max-sm:hidden">
          <ul class="justify-self-start">
            <li>
              <A href="/#our-story">Our Story</A>
            </li>
            <li>
              <A href="/#details">Details</A>
            </li>
          </ul>
          <ul>
            <li>
              <Logo />
            </li>
          </ul>
          <ul class="justify-self-end">
            <li>
              <A href="/your-trip" class="a-link">
                Your Trip
              </A>
            </li>
            <li>
              <A
                href="/rsvp"
                class="a-link border-(--color-primary) bg-(--color-primary) text-(--color-background)"
              >
                RSVP
              </A>
            </li>
          </ul>
        </nav>
      </header>
      <hr />
      {props.children}
      <footer class="my-(--gap-md) text-center">
        <h1 class="titles-h1-bold-caps">
          Please RSVP
          <small> by </small>
          <Time value={rsvpDate} />
        </h1>
        <Show when={!getIsRSVP()}>
          <A href="/rsvp" class="a-link my-(--gap-sm)">
            <span>RSVP</span>
            <Arrow />
          </A>
        </Show>
        <div class="my-(--gap-md) border-y py-4 my-4">
          <A href="/your-trip">Your Trip</A>
        </div>
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
