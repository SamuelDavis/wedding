import styles from "../index.module.css";

export default function Details() {
  return (
    <section id="details">
      <header>
        <h2>
          Details<i> about the </i>Event
        </h2>
      </header>
      <ul class={styles["event-details"]}>
        <li class={styles["event-detail"]}>
          <h2>Attire</h2>
          <p>
            Bright, nature-inspired colors are encouraged. The cremony is taking
            place outdoors, so dress for the weather!
          </p>
        </li>
        <li class={styles["event-detail"]}>
          <h2>Little Ones</h2>
          <p>We are only able to accomodate children listed on your invite.</p>
        </li>
        <li class={styles["event-detail"]}>
          <h2>Gifts</h2>
          <p>
            Your presence is the real gift! If you'd still like to give, a card
            box will be available.
          </p>
        </li>
      </ul>
    </section>
  );
}
