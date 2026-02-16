import type { ExtendProps } from "@samueldavis/solidlib";
import { A } from "@solidjs/router";
import logoSrc from "../assets/Logo.png";

export default function Logo(props: ExtendProps<"div", { stacked?: boolean }>) {
  return (
    <div {...props}>
      <A href="/">
        <img src={logoSrc} class="h-10 br:h-20" />
      </A>
    </div>
  );
}
