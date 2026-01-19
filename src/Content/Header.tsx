import { A } from "@solidjs/router";
import Logo from "./Logo";

export default function Header() {
  return (
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
  );
}
