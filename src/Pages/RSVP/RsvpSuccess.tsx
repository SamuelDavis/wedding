import { A } from "@solidjs/router";
import RsvpLayout from "./RsvpLayout";
import Arrow from "../../Components/Arrow";
import Time from "../../Components/Time";
import { venueMapHref, weddingDate } from "../../data";

export default function RsvpSuccess() {
  return (
    <RsvpLayout>
      <section>
        <aside class="mb-(--gap-lg)">
          <h1 class="mb-0">Success!</h1>
          <p>
            <span>See you on </span>
            <b>
              <Time value={weddingDate} format="long" />
            </b>
            <span> at </span>
            <a target="_blank" href={venueMapHref} class="whitespace-nowrap">
              Francis J. Beatty Park
            </a>
            <span>.</span>
          </p>
        </aside>

        <A href="/your-trip" class="a-link">
          <span>Plan Your Trip</span>
          <Arrow />
        </A>
      </section>
    </RsvpLayout>
  );
}
