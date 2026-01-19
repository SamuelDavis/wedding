import { HTMLIcon } from "@samueldavis/solidlib";
import { A } from "@solidjs/router";

export default function DiscoveriesNav() {
  return (
    <nav>
      <ul>
        <li>
          <A href="/your-trip/nightlife">
            <HTMLIcon type="moon_stars" />
            <span>Nightlife</span>
          </A>
        </li>
        <li>
          <A href="/your-trip/small-town-charm">
            <HTMLIcon type="family_home" />
            <span>Small-Town Charm</span>
          </A>
        </li>
        <li>
          <A href="/your-trip/global-flavors">
            <HTMLIcon type="ramen_dining" />
            <span>Global Flavors</span>
          </A>
        </li>
      </ul>
    </nav>
  );
}
