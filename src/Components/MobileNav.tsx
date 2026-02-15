import { createSignal } from "solid-js";
import Logo from "./Logo";
import { HTMLIcon, type ExtendProps } from "@samueldavis/solidlib";
import { A } from "@solidjs/router";
import Arrow from "./Arrow";

export default function MobileNav(props: ExtendProps<"header">) {
  const [getHidden, setHidden] = createSignal(true);
  const getType = (): string => (getHidden() ? "menu" : "close");
  function onClick() {
    setHidden((open) => !open);
  }

  return (
    <header {...props}>
      <nav class="flex justify-between">
        <ul>
          <li>
            <Logo />
          </li>
        </ul>
        <ul>
          <li>
            <button onClick={onClick}>
              <HTMLIcon type={getType()} />
            </button>
          </li>
        </ul>
      </nav>
      <nav
        class="vertical dropdown justify-between pt-(--gap-sm)"
        classList={{ "max-h-60": !getHidden() }}
      >
        <ul>
          <li>
            <A href="/#details">Details</A>
          </li>
          <li>
            <A href="/your-trip">Your Trip</A>
          </li>
        </ul>
        <ul>
          <li>
            <a href="/rsvp" class="a-link">
              <span>RSVP</span>
              <Arrow />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
