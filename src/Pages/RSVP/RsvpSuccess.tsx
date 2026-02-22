import { A } from "@solidjs/router";
import RsvpLayout from "./RsvpLayout";
import Arrow from "../../Components/Arrow";
import Time from "../../Components/Time";
import { venueMapHref, weddingDate } from "../../data";

export default function RsvpSuccess() {
  return (
    <RsvpLayout>
      <section>
        <h1>Success!</h1>

        <aside class="mb-(--gap-xl)">
          <p>Thank you for RSVPing for our wedding!</p>
          <p>
            <span>That's on </span>
            <b>
              <Time value={weddingDate} format="long" />
            </b>
            <span> at </span>
            <a href={venueMapHref} class="whitespace-nowrap">
              Francis J. Beatty Park
            </a>
            <span>.</span>
          </p>
        </aside>

        <h2 class="mb-(--gap-lg)">Check out your personal trip guide below</h2>
        <A href="/your-trip" class="a-link">
          <span>Plan Your Trip</span>
          <Arrow />
        </A>
      </section>
    </RsvpLayout>
  );
}
