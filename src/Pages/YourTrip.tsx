import Marquee from "../Components/Marquee";
import { hotelSiteHref } from "../data";
import DiscoveriesNav from "../Content/DiscoveriesNav";
import { A } from "@solidjs/router";

export default function YourTrip() {
  return (
    <article>
      <header>
        <h2>Charlotte, Here You Come</h2>
        <Marquee srcs={Array(5).fill("https://placehold.co/100x100")} />
      </header>
      <section>
        <div>
          <img src="https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwXxBIDF0qn0BsgjOuGdEJCmW2a2e0W7qmPEGO0YGUsRc9P7JqvUvJD_8QkmolncxkzPHz9ye9eDqFZeittU2_gg88OqlqdwtvOlDCkLoidYbi_T4id3DXkj50HuinAUSfhKnc=w408-h306-k-no" />
          <i>
            Pack Your
            <br />
            Bags
          </i>
        </div>
        <div>
          <h2>
            Where<i> to </i>Stay
          </h2>
          <h5>Wingate by Wyndham</h5>
          <p>
            When you call, mention that you want a room for Samuel & Jessica's
            wedding. Check the hotel website for additional details for address,
            parking, etc.
          </p>
          <A target="_blank" href={hotelSiteHref}>
            book
          </A>
        </div>
      </section>
      <footer>
        <h2>Discover Charlote</h2>
        <h3>What category interests you most?</h3>
        <DiscoveriesNav />
      </footer>
    </article>
  );
}
