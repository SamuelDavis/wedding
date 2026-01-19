import { A } from "@solidjs/router";
import { weddingDate, venueMapHref } from "../data";
import Time from "../Components/Time";
import styles from "../index.module.css";

export default function Hero() {
  return (
    <section class={styles.hero}>
      <div>The Wedding Of</div>
      <h1>
        Samuel<i> and </i>Jessica
      </h1>
      <div>
        <Time value={weddingDate} />
        <a target="_blank" href={venueMapHref}>
          Francis Beatty Park
        </a>
      </div>
      <A href="rsvp">RSVP</A>
    </section>
  );
}
