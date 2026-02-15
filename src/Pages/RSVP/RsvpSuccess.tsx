import { A } from "@solidjs/router";
import RsvpLayout from "./RsvpLayout";
import Arrow from "../../Components/Arrow";

export default function RsvpSuccess() {
  return (
    <RsvpLayout>
      <section>
        <h1>Success!</h1>
        <h2>Check out your personal trip guide below</h2>
        <A href="/your-trip" class="a-link">
          <span>Plan Your Trip</span>
          <Arrow />
        </A>
      </section>
    </RsvpLayout>
  );
}
