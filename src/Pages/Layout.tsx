import { createEffect, on, Show, splitProps, type ParentProps } from "solid-js";
import { A, useLocation } from "@solidjs/router";
import Time from "../Components/Time";
import { rsvpDate } from "../data";
import type { ExtendProps } from "@samueldavis/solidlib";

export default function Layout(props: ParentProps) {
  useScrollTo();

  return (
    <main>
      <header>
        <nav>
          <ul>
            <li>
              <A href="/#details">Details</A>
            </li>
            <li>
              <A href="/your-trip">Your Trip</A>
            </li>
          </ul>
          <ul>
            <li>
              <Logo />
            </li>
          </ul>
          <ul>
            <li>
              <A href="/rsvp">RSVP</A>
            </li>
          </ul>
        </nav>
      </header>
      {props.children}
      <footer>
        <h2>
          Please RSVP
          <i> by </i>
          <Time value={rsvpDate} />
        </h2>
        <A href="/rsvp">RSVP</A>
      </footer>
      <footer>
        <aside>
          <nav>
            <ul>
              <li>
                <A href="/your-trip">Your Trip</A>
              </li>
            </ul>
          </nav>
        </aside>
      </footer>
      <hr />
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

function Logo(props: ExtendProps<"h1", { stacked?: boolean }>) {
  const [local, parent] = splitProps(props, ["stacked"]);
  return (
    <h1 {...parent}>
      <A href="/">
        <i>
          <span>S</span>
          <Show when={local.stacked}>
            <br />
          </Show>
          <span>J</span>
        </i>
      </A>
    </h1>
  );
}
