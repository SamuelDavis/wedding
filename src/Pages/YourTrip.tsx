import { hotelSiteHref, placeholder } from "../data";
import DiscoveriesNav from "../Content/DiscoveriesNav";
import { A } from "@solidjs/router";

export default function YourTrip() {
  return (
    <article>
      <header>
        <h2>Stay a while</h2>
        <h1>Plan your trip</h1>
        <img src={placeholder(600, 200)} />
        <p>There is plenty to discover in Charlotte.</p>
        <p>
          Whether you enjoy the city or small-town charm, there's something for
          everyone.
        </p>
      </header>
      <section>
        <img src="https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwXxBIDF0qn0BsgjOuGdEJCmW2a2e0W7qmPEGO0YGUsRc9P7JqvUvJD_8QkmolncxkzPHz9ye9eDqFZeittU2_gg88OqlqdwtvOlDCkLoidYbi_T4id3DXkj50HuinAUSfhKnc=w408-h306-k-no" />
        <div>
          <h2>
            Where<i> to </i>Stay
          </h2>
          <h5>Wingate by Wyndham</h5>
          <p>
            When you call, mention that you want a room for Sam & Jess' wedding.
            Check the hotel website for additional details for address, parking,
            etc.
          </p>
          <A target="_blank" href={hotelSiteHref}>
            book room
          </A>
        </div>
      </section>
      <hr />
      <section>
        <h2>What interests you the most?</h2>
        <DiscoveriesNav images />
      </section>
    </article>
  );
}
