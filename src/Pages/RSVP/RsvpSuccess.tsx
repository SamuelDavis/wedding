import { A } from "@solidjs/router";
import RsvpLayout from "./RsvpLayout";
import Arrow from "../../Components/Arrow";
import Time from "../../Components/Time";
import { venueMapHref, weddingDate } from "../../data";
import { onMount } from "solid-js";

export default function RsvpSuccess() {
  let el: undefined | HTMLHeadingElement;
  onMount(() => {
    if (!el) return;
    queueMicrotask(() => {
      const y = el.getBoundingClientRect().bottom;
      window.scrollTo({ top: y, behavior: "smooth" });
    });
  });
  return (
    <RsvpLayout>
      <section>
        <aside class="mb-(--gap-lg)">
          <h1 ref={el} class="mb-0">
            Success!
          </h1>
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
