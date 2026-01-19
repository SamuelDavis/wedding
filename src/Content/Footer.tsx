import { A } from "@solidjs/router";
import Time from "../Components/Time";
import { rsvpDate } from "../data";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer>
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
      <Logo stacked />
    </footer>
  );
}
