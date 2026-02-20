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
        <h1>
          <em>Plan your trip</em>
        </h1>
        <h2 class="font-bold">Where to stay</h2>
      </header>
      <section class="cols-2">
        <div>
          <h1 class="leading-tight font-bold">Wingate by Wyndham</h1>
          <p>
            When you call, mention that you want a room for the Wells-Davis
            Wedding. Check the hotel website for additional details for address,
            parking, etc.
          </p>
          <A target="_blank" href={hotelSiteHref} class="a-link">
            <span>book room</span>
            <Arrow />
          </A>
        </div>
        <ImgAsset src={wingateSrc} class="border" />
      </section>
      <section class="text-center bg-light p-(--gap-lg) my-(--gap-xl)">
        <header>
          <h1 class="text-center mb-(--gap-md)">
            What category interests you most?
          </h1>
        </header>
        <DiscoveriesNav images />
      </section>
    </article>
  );
}
