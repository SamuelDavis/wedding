import { A } from "@solidjs/router";
import RsvpLayout from "./RsvpLayout";

export default function RsvpSuccess() {
  return (
    <RsvpLayout>
      <section>
        <h2>Success!</h2>
        <h3>Check out your personal trip guide below</h3>
        <A href="/your-trip">Plan Your Trip</A>
      </section>
    </RsvpLayout>
  );
}
