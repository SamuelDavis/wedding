import { A } from "@solidjs/router";
import { type ParentProps } from "solid-js";
import RSVP from "../Components/RSVP.tsx";

export default function Layout(props: ParentProps) {
  return (
    <>
      <main class="container">
        <header>
          <nav>
            <ul>
              <li>
                <details class="dropdown">
                  <summary>Navigation</summary>
                  <ul>
                    <li>
                      <A href="/">Home</A>
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
              <li>
                <strong>S&J</strong>
              </li>
            </ul>
            <ul>
              <li>
                <RSVP />
              </li>
            </ul>
          </nav>
        </header>
        {props.children}
      </main>
    </>
  );
}
