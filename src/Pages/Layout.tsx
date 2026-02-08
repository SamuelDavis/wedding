import { createEffect, on, Show, splitProps, type ParentProps } from "solid-js";
import { A, useLocation, useMatch } from "@solidjs/router";
import Time from "../Components/Time";
import { rsvpDate } from "../data";
import type { ExtendProps } from "@samueldavis/solidlib";

export default function Layout(props: ParentProps) {
  useScrollTo();
  const getIsRSVP = useMatch(() => "/rsvp/:success?");

  return (
    <main>
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
            <ul class="justify-center">
              <li>
                <A href="/rsvp" class="border">
                  RSVP
                </A>
              </li>
            </ul>
          </nav>
        </footer>
      </Show>
      <footer class="border-y">
        <nav>
          <ul class="justify-around">
            <li>
              <A href="/your-trip">Your Trip</A>
            </li>
          </ul>
        </nav>
      </footer>
      <footer>
        <Logo stacked />
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
  const [local, parent] = splitProps(props, ["stacked"]);
  return (
    <div {...parent}>
      <A href="/">
        <em>
          <span>S</span>
          <Show when={local.stacked}>
            <br />
          </Show>
          <span>J</span>
        </em>
      </A>
    </div>
  );
}
