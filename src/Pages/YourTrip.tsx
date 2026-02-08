import { hotelSiteHref } from "../data";
import DiscoveriesNav from "../Content/DiscoveriesNav";
import wingateSrc from "../assets/SamandJess_hotel.jpg";
import ImgAsset from "../Components/ImgAsset";
import Arrow from "../Components/Arrow";
import { A } from "@solidjs/router";

export default function YourTrip() {
  return (
    <article>
      <header>
        <h1>
          <em>Plan your trip</em>
        </h1>
      </header>
      <header>
        <h2>Stay a while</h2>
      </header>
      <section>
        <div>
          <h2>
            Where<small> to </small>Stay
          </h2>
          <h5>Wingate by Wyndham</h5>
          <p>
            When you call, mention that you want a room for Sam & Jess' wedding.
            Check the hotel website for additional details for address, parking,
            etc.
          </p>
          <A target="_blank" href={hotelSiteHref}>
            <span>book room</span>
            <Arrow />
          </A>
        </div>
        <ImgAsset src={wingateSrc} />
      </section>
      <hr />
      <section>
        <h1>What category interests you most?</h1>
        <DiscoveriesNav images />
      </section>
    </article>
  );
}
