import { A } from "@solidjs/router";
import Marquee from "../Components/Marquee";

export default function OnTheList() {
  return (
    <article>
      <header>
        <img src="https://placehold.co/300x200" />
        <h1>You're Officially on the List</h1>
      </header>
      <section>
        <h2>Explore All Charlotte Has to Offer</h2>
        <Marquee srcs={Array(5).fill("https://placehold.co/100x100")} />
        <A href="/your-trip">Your Trip</A>
      </section>
    </article>
  );
}
