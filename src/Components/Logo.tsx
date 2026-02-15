import { A } from "@solidjs/router";
import logoSrc from "../assets/Logo.png";
import type { ExtendProps } from "@samueldavis/solidlib";

export default function Logo(props: ExtendProps<typeof A, {}, "href">) {
  return (
    <A href="/" {...props}>
      <img src={logoSrc} class="h-10" />
    </A>
  );
}
