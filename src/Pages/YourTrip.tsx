import { hotelSiteHref } from "../data";
import DiscoveriesNav from "../Content/DiscoveriesNav";
import wingateSrc from "../assets/SamandJess_hotel.jpg";
import ImgAsset from "../Components/ImgAsset";
import Link from "../Components/Link";

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
      <section class="cols-2 img-frames">
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
          <Link target="_blank" href={hotelSiteHref} class="border" arrow>
            book room
          </Link>
        </div>
        <ImgAsset class="framed" src={wingateSrc} />
      </section>
      <hr />
      <section class="flex-col items-center">
        <h1>What category interests you most?</h1>
        <DiscoveriesNav class="gap-16" images />
      </section>
    </article>
  );
}
