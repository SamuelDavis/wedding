import { A } from "@solidjs/router";
import type { ParentProps } from "solid-js";
import Time from "../Components/Time";
import { rsvpDate } from "../data";
import Logo from "../Content/Logo";

export default function Layout(props: ParentProps) {
  return (
    <main class="container">
      <article>
        <header>
          <nav>
            <ul>
              <li>
                <details class="dropdown">
                  <summary>&hellip;</summary>
                  <ul>
                    <li>
                      <A href="/Details">Details</A>
                    </li>
                    <li>
                      <A href="/your-trip">Your Trip</A>
                    </li>
                    <li>
                      <A href="/rsvp">RSVP</A>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
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
                <Logo />
              </li>
            </ul>
            <ul>
              <li>
                <A href="/rsvp">
                  <button role="link">RSVP</button>
                </A>
              </li>
            </ul>
          </nav>
        </header>
        {props.children}
        <footer>
          <h2>
            <span>Please RSVP</span>
            <i>
              {" "}
              <small>by</small>{" "}
            </i>
            <Time value={rsvpDate} format="MMMM d, yyyy" />
          </h2>
          <A href="/rsvp">
            <button role="link">RSVP</button>
          </A>
          <aside>
            <nav>
              <ul>
                <li>
                  <A href="/your-trip">Your Trip</A>
                </li>
              </ul>
            </nav>
          </aside>
          <Logo />
        </footer>
      </article>
    </main>
  );
}
