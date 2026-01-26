import { A } from "@solidjs/router";
import Marquee from "../Components/Marquee";
import { placeholder } from "../data";

export default function OnTheList() {
  return (
    <article>
      <header>
        <img src={placeholder(300, 200)} />
        <h1>You're Officially on the List</h1>
      </header>
      <section>
        <h2>Explore All Charlotte Has to Offer</h2>
        <Marquee srcs={Array(10).fill(placeholder(100, 100))} />
        <A href="/your-trip">Your Trip</A>
      </section>
    </article>
  );
}
