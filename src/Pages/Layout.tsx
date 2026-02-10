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
        <nav>
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
    <div {...props}>
      <A href="/">
        <img src={logoSrc} />
      </A>
    </div>
  );
}
