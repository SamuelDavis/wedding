import type { ExtendProps } from "@samueldavis/solidlib";
import { A } from "@solidjs/router";
import Logo from "../Content/Logo";
import { mergeProps, splitProps } from "solid-js";

export default function MainNav(props: ExtendProps<"nav">) {
  const merged = mergeProps({ class: "" }, props);
  const [local, parent] = splitProps(merged, ["class"]);
  return (
    <nav class={`grid grid-cols-3 max-br:hidden ${local.class}`} {...parent}>
      <ul class="flex justify-self-startflex items-center  gap-(--gap-sm)">
        <li>
          <A href="/#our-story">Our Story</A>
        </li>
        <li>
          <A href="/#details">Details</A>
        </li>
      </ul>
      <ul class="flex justify-self-center items-center ">
        <li>
          <Logo />
        </li>
      </ul>
      <ul class="flex justify-self-end items-center  gap-(--gap-sm)">
        <li>
          <A href="/your-trip" class="a-link">
            Your Trip
          </A>
        </li>
        <li>
          <A
            href="/rsvp"
            class="a-link bg-primary border-primary text-background"
          >
            RSVP
          </A>
        </li>
      </ul>
    </nav>
  );
}
