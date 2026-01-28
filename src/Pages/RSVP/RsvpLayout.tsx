import type { ParentProps } from "solid-js";
import Time from "../../Components/Time";
import { rsvpDate, weddingDate } from "../../data";
import beOurGuestSrc from "../../assets/SamandJess_birdsflying.jpg";
import coupleSrc from "../../assets/SamandJess_capitalgrille_BW.jpg";

export default function RsvpLayout(props: ParentProps) {
  return (
    <article>
      <header>
        <img src={beOurGuestSrc} />
        <h2>
          <Time value={weddingDate} format="short" />
        </h2>
        <h1>Be Our Guest</h1>
        <p>We can't wait to celebrate with you!</p>
        <p>
          Please RSVP by <Time value={rsvpDate} />
        </p>
      </header>
      <section>
        <figure>
          <img src={coupleSrc} />
          <q>Bear with one another in love</q>
        </figure>
        {props.children}
      </section>
    </article>
  );
}
