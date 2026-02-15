import { hotelSiteHref } from "../data";
import DiscoveriesNav from "../Content/DiscoveriesNav";
import wingateSrc from "../assets/SamandJess_hotel.jpg";
import ImgAsset from "../Components/ImgAsset";
import Arrow from "../Components/Arrow";
import { A } from "@solidjs/router";

export default function YourTrip() {
  return (
    <article>
      <header class="flex flex-col gap-(--gap-xs) items-center my-(--gap-md)">
        <h1 class="titles-display">
          <em>Plan your trip</em>
        </h1>
        <h2 class="titles-h2">Stay a while</h2>
      </header>
      <section class="cols-2">
        <div>
          <h1 class="titles-h1-bold-caps mb-(--gap-xs)">
            Where<small> to </small>Stay
          </h1>
          <h2 class="titles-h2 mb-4">Wingate by Wyndham</h2>
          <p>
            When you call, mention that you want a room for Sam & Jess' wedding.
            Check the hotel website for additional details for address, parking,
            etc.
          </p>
          <A target="_blank" href={hotelSiteHref} class="a-link mt-(--gap-xs)">
            <span>book room</span>
            <Arrow />
          </A>
        </div>
        <ImgAsset src={wingateSrc} />
      </section>
      <hr />
      <section>
        <header>
          <h1 class="titles-h1-bold-caps text-center my-(--gap-md)">
            What category interests you most?
          </h1>
        </header>
        <DiscoveriesNav images />
      </section>
    </article>
  );
}
