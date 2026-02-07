import { createEffect, on, Show, splitProps, type ParentProps } from "solid-js";
import { useLocation } from "@solidjs/router";
import Time from "../Components/Time";
import { rsvpDate } from "../data";
import type { ExtendProps } from "@samueldavis/solidlib";
import Link from "../Components/Link";

export default function Layout(props: ParentProps) {
  useScrollTo();

  return (
    <main>
      <header>
        <nav class="w-full">
          <ul>
            <li>
              <Link href="/#our-story">Our Story</Link>
            </li>
            <li>
              <Link href="/#details">Details</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Logo />
            </li>
          </ul>
          <ul>
            <li>
              <Link href="/your-trip" class="border">
                Your Trip
              </Link>
            </li>
            <li>
              <Link href="/rsvp" class="bg-primary text-secondary">
                RSVP
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <hr class="mb-30" />
      {props.children}
      <footer class="mt-40">
        <h2>
          Please RSVP
          <small> by </small>
          <Time value={rsvpDate} />
        </h2>
      </footer>
      <footer>
        <Link href="/rsvp">RSVP</Link>
      </footer>
      <hr />
      <footer>
        <nav>
          <ul>
            <li>
              <Link href="/your-trip">Your Trip</Link>
            </li>
          </ul>
        </nav>
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

function Logo(props: ExtendProps<"div", { stacked?: boolean }>) {
  const [local, parent] = splitProps(props, ["stacked"]);
  return (
    <div {...parent}>
      <Link href="/">
        <em>
          <span>S</span>
          <Show when={local.stacked}>
            <br />
          </Show>
          <span>J</span>
        </em>
      </Link>
    </div>
  );
}
