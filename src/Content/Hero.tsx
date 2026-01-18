import { A } from "@solidjs/router";
import { weddingDate, addressHref } from "../data";
import Time from "../Components/Time";

export default function Hero() {
  return (
    <section>
      <header>
        <div>The Wedding Of</div>
        <h2>
          <i>
            Samuel <small>and</small> Jessica
          </i>
        </h2>
        <div>
          <Time value={weddingDate} format="MMMM d, yyyy" />
          <a target="_blank" href={addressHref}>
            Francis Beatty Park
          </a>
        </div>
        <A href="rsvp">RSVP</A>
      </header>
    </section>
  );
}
