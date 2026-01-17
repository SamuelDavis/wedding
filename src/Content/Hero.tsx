import { A } from "@solidjs/router";
import { format } from "date-fns";
import { weddingDate, addressHref } from "../data";

export default function Hero() {
  return (
    <section>
      <header>
        <div>Join us for the wedding of</div>
        <h2>
          <strong>Samuel</strong> <i>and</i> <strong>Jessica</strong>
        </h2>
        <div>{format(weddingDate, "MMMM dd, yyyy")}</div>
        <a target="_blank" href={addressHref}>
          4330 Weddington Road, Matthews, NC 28105
        </a>
        <A href="rsvp">RSVP</A>
      </header>
    </section>
  );
}
