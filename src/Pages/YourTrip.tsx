import { A } from "@solidjs/router";
import Marquee from "../Components/Marquee";
import { hotelSiteHref } from "../data";
import { HTMLIcon } from "@samueldavis/solidlib";

export default function YourTrip() {
  return (
    <article>
      <section>
        <h2>Charlotte, Here You Come</h2>
        <Marquee srcs={Array(5).fill("https://placehold.co/100x100")} />
      </section>
      <section>
        <div>
          <img src="https://placehold.co/200x300" />
          <i>
            Pack Your
            <br />
            Bags
          </i>
        </div>
        <div>
          <h2>Where to Stay</h2>
          <h3>Wingate by Wyndham</h3>
          <p>
            When you call, mention that you want a room for Samuel & Jessica's
            wedding. Check the hotel website for additional details for address,
            parking, etc.
          </p>
          <a target="_blank" href={hotelSiteHref}>
            book
          </a>
        </div>
      </section>
      <section>
        <h2>Discover Charlote</h2>
        <h3>What category interests you most?</h3>
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
      </section>
    </article>
  );
}
