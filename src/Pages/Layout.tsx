import { createEffect, on, Show, type ParentProps } from "solid-js";
import { A, useLocation, useMatch } from "@solidjs/router";
import Time from "../Components/Time";
import { rsvpDate } from "../data";
import Arrow from "../Components/Arrow";
import Logo from "../Content/Logo";
import MobileNav from "../Content/MobileNav";
import MainNav from "../Content/MainNav";

export default function Layout(props: ParentProps) {
  useScrollTo();
  const location = useLocation();
  const getIsRSVP = useMatch(() => "/rsvp/:success?");

  return (
    <main data-path={location.pathname}>
      <header>
        <MobileNav />
        <MainNav />
      </header>
      <hr />
      {props.children}
      <footer class="flex flex-col items-center my-(--gap-lg)">
        <h1 class="mb-(--gap-md) font-bold flex flex-wrap items-center justify-center text-center">
          Please RSVP
          <small class="italic"> by </small>
          <span class="text-nowrap">
            <Time value={rsvpDate} format="date" />
          </span>
        </h1>
        <Show when={!getIsRSVP()}>
          <A href="/rsvp" class="a-link">
            <span>RSVP to Wedding</span>
            <Arrow />
          </A>
        </Show>
        <div class="border-y py-2 my-(--gap-lg) w-full text-center">
          <nav>
            <ul>
              <li>
                <A href="/your-trip">Your Trip</A>
              </li>
            </ul>
          </nav>
        </div>
        <Logo class="justify-self-center" />
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
