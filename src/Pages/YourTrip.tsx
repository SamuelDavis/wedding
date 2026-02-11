import { hotelSiteHref } from "../data";
import DiscoveriesNav from "../Content/DiscoveriesNav";
import wingateSrc from "../assets/SamandJess_hotel.jpg";
import ImgAsset from "../Components/ImgAsset";
import Arrow from "../Components/Arrow";
import { A } from "@solidjs/router";

export default function YourTrip() {
  return (
    <article>
      <header class="text-center my-(--gap-lg)">
        <h1 class="mb-(--gap-md)">
          <em>Plan your trip</em>
        </h1>
        <h2>Stay a while</h2>
      </header>
      <section class="grid sm:grid-cols-2">
        <div>
          <h1 class="font-bold mb-(--gap-md)">
            Where<small> to </small>Stay
          </h1>
          <h2 class="normal-case mb-(--gap-sm)">Wingate by Wyndham</h2>
          <p class="mb-(--gap-md)">
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
      <hr class="my-(--gap-lg)" />
      <section>
        <header class="text-center mb-(--gap-lg)">
          <h1>What category interests you most?</h1>
        </header>
        <DiscoveriesNav images />
      </section>
    </article>
  );
}
