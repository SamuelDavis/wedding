import RsvpLayout from "./RsvpLayout";
import Link from "../../Components/Link";

export default function RsvpSuccess() {
  return (
    <RsvpLayout>
      <section>
        <h2>Success!</h2>
        <h3>Check out your personal trip guide below</h3>
        <Link href="/your-trip">Plan Your Trip</Link>
      </section>
    </RsvpLayout>
  );
}
