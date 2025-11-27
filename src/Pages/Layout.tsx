import { A } from "@solidjs/router";
import type { ParentProps } from "solid-js";

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
                      <A href="/your-trip">Your Trip</A>
                    </li>
                    <li>
                      <A href="/our-story">Our Story</A>
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
                <Logo />
              </li>
            </ul>
            <ul>
              <li>
                <A href="/your-trip">Your Trip</A>
              </li>
              <li>
                <A href="/our-story">Our Story</A>
              </li>
              <li>
                <A href="/rsvp">RSVP</A>
              </li>
            </ul>
          </nav>
        </header>
        {props.children}
        <footer>
          <h2>Please RSVP by February 22, 2026</h2>
          <p>We're so excited to celebrate with you!</p>
          <aside>
            <nav>
              <ul>
                <li>
                  <A href="/rsvp">RSVP</A>
                </li>
                <li>
                  <A href="/your-trip">Your Trip</A>
                </li>
                <li>
                  <A href="/our-story">Our Story</A>
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

function Logo() {
  return (
    <A href="/">
      <i>SJ</i>
    </A>
  );
}
