import { A } from "@solidjs/router";
import { weddingDate, venueMapHref } from "../data";
import Time from "../Components/Time";

export default function Hero() {
  return (
    <section>
      <header>
        <div>The Wedding Of</div>
        <h2>
          Samuel<i> and </i>Jessica
        </h2>
        <div>
          <Time value={weddingDate} format="MMMM d, yyyy" />
          <a target="_blank" href={venueMapHref}>
            Francis Beatty Park
          </a>
        </div>
        <A href="rsvp">RSVP</A>
      </header>
    </section>
  );
}
