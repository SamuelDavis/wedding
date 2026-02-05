import { hotelSiteHref } from "../data";
import DiscoveriesNav from "../Content/DiscoveriesNav";
import { A } from "@solidjs/router";
import wingateSrc from "../assets/SamandJess_hotel.jpg";
import ImgAsset from "../Components/ImgAsset";

export default function YourTrip() {
  return (
    <article>
      <header>
        <h1>Plan your trip</h1>
      </header>
      <header>
        <h2>Stay a while</h2>
      </header>
      <section class="cols-2 img-frames">
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
        <ImgAsset class="framed" src={wingateSrc} />
      </section>
      <hr />
      <section>
        <h2>What category interests you most?</h2>
        <DiscoveriesNav class="gap-16" images />
      </section>
    </article>
  );
}
