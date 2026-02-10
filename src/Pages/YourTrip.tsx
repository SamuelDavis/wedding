import { hotelSiteHref } from "../data";
import DiscoveriesNav from "../Content/DiscoveriesNav";
import wingateSrc from "../assets/SamandJess_hotel.jpg";
import ImgAsset from "../Components/ImgAsset";
import Arrow from "../Components/Arrow";
import { A } from "@solidjs/router";

export default function YourTrip() {
  return (
    <article class="mb-74">
      <header class="text-center mb-34">
        <h1 class="display-display mb-12">Plan your trip</h1>
        <h2 class="title-h2 uppercase">Stay a while</h2>
      </header>
      <section class="cols-2 mb-19">
        <div>
          <h1 class="title-h1-bold-caps mb-12">
            Where<small class="title-h1-decorative"> to </small>Stay
          </h1>
          <h2 class="title-h2 mb-4">Wingate by Wyndham</h2>
          <p class="mb-8">
            When you call, mention that you want a room for Sam & Jess' wedding.
            Check the hotel website for additional details for address, parking,
            etc.
          </p>
          <A target="_blank" href={hotelSiteHref} class="border">
            <span>book room</span>
            <Arrow />
          </A>
        </div>
        <ImgAsset src={wingateSrc} class="framed" />
      </section>
      <hr class="mb-40" />
      <section>
        <header class="text-center mb-24">
          <h1 class="title-h1-bold-caps">What category interests you most?</h1>
        </header>
        <DiscoveriesNav images />
      </section>
    </article>
  );
}
