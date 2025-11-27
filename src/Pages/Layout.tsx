import { A } from "@solidjs/router";
import type { ParentProps } from "solid-js";

export default function Layout(props: ParentProps) {
  return (
    <main>
      <article>
        <header>
          <nav>
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
        <section id="footer">
          <header>
            <h2>Please RSVP by February 22, 2026</h2>
          </header>
          <header>
            <p>We're so excited to celebrate with you!</p>
          </header>
          <div>
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
          </div>
        </section>
        <footer>
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
