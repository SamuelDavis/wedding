import { A } from "@solidjs/router";
import Time from "../Components/Time";
import { rsvpDate } from "../data";
import Logo from "./Logo";
import styles from "../index.module.css";

export default function Footer() {
  return (
    <footer class={styles.footer}>
      <h2>
        <span>Please RSVP</span>
        <i> by </i>
        <Time value={rsvpDate} />
      </h2>
      <A href="/rsvp">RSVP</A>
      <aside>
        <nav>
          <ul>
            <li>
              <A href="/your-trip">Your Trip</A>
            </li>
          </ul>
        </nav>
      </aside>
      <hr />
      <Logo stacked />
    </footer>
  );
}
