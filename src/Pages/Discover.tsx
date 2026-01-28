import { HTMLIcon, type ExtendProps } from "@samueldavis/solidlib";
import { useParams } from "@solidjs/router";
import { createMemo, For, splitProps, type ValidComponent } from "solid-js";
import { Dynamic } from "solid-js/web";
import DiscoveriesNav from "../Content/DiscoveriesNav";
import mintMuseumUptownSrc from "../assets/SamandJess_mintmuseum.jpg";
import rosiesWineGardenSrc from "../assets/SamandJess_Rosieswinegarden.jpg";
import midwoodSteakhouseSrc from "../assets/SamandJess_midwoodsteakhouse.jpg";
import mcAlpineCreekParkSrc from "../assets/SamandJess_park.jpg";
import paulineTeaBarApothecarySrc from "../assets/SamandJess_teabar.jpg";
import thePackingHouseSrc from "../assets/SamandJess_thepackinghouse.jpg";
import matchaCafeMaikoSrc from "../assets/SamandJess_matchamaiko.jpg";
import riRaIrishPubSrc from "../assets/SamandJess_fishandchips.jpg";
import theOneTapasAndBarSrc from "../assets/SamandJess_foodanddrink.jpg";

type InterestSlug = (typeof InterestSlugs)[number];
type PageContent = {
  icon: string;
  title: string;
  subtitle: string;
  attractions: ValidComponent[];
};

export const InterestSlugs = [
  "nightlife",
  "small-town-charm",
  "global-flavors",
] as const;

export default function Discover() {
  const getPageContent = usePageContent();
  return (
    <article>
      <header>
        <HTMLIcon type={getPageContent().icon} />
        <h1>{getPageContent().title}</h1>
        <h2>{getPageContent().subtitle}</h2>
      </header>
      <For each={getPageContent().attractions}>
        {(Content) => <Dynamic component={Content} />}
      </For>
      <footer>
        <h2>Discover More</h2>
        <DiscoveriesNav />
      </footer>
    </article>
  );
}

function usePageContent() {
  const params = useParams<{ interest: InterestSlug }>();
  return createMemo(() => data[params.interest]);
}

function Attraction(
  props: ExtendProps<
    "section",
    {
      imageSrc: string;
      title: string;
      siteHref: string;
      mapHref: string;
    }
  >,
) {
  const [local, parent] = splitProps(props, [
    "imageSrc",
    "title",
    "siteHref",
    "mapHref",
    "children",
  ]);
  return (
    <section {...parent}>
      <div>
        <img src={local.imageSrc} />
      </div>
      <div>
        <h3>
          <a href={local.siteHref} target="_blank">
            {local.title}
          </a>
        </h3>
        {local.children}
        <a href={local.mapHref} target="_blank">
          View Route
        </a>
      </div>
    </section>
  );
}

const data: Record<InterestSlug, PageContent> = {
  nightlife: {
    icon: "moon_stars",
    title: "Nightlife",
    subtitle: "A night out in Charlotte",
    attractions: [
      () => (
        <Attraction
          imageSrc={mintMuseumUptownSrc}
          title="Mint Museum Uptown"
          siteHref="https://www.mintmuseum.org/"
          mapHref="https://maps.app.goo.gl/Tbj7WZ5Uc3yY5KMdA"
        >
          <p>
            While you visiting Charlotte, a beautiful place to see is the Mint
            Museum. There are two locations, but you'll find the most activity
            in Uptown.
          </p>
          <p>
            <span>
              Nestled in the heart of the city there are plenty of restaurants
              nearby. Within walking distance is{" "}
            </span>
            <a
              href="https://tupelohoneycafe.com/restaurant/charlotte/"
              target="_blank"
            >
              Tupleo Honey Southern Kitchen
            </a>
            <span>
              . Well liked by the locals, this comes highly recommended for some
              great soul food.
            </span>
          </p>
        </Attraction>
      ),
      () => (
        <Attraction
          imageSrc={rosiesWineGardenSrc}
          title="Rosie's Wine Garden"
          siteHref="https://rosieswinegarden.com/"
          mapHref="https://maps.app.goo.gl/4SVskgQVXVS8xgTU7"
        >
          <p>
            As Charlotte's first coffee & wine garden, you can experience the
            beauty of the garden any time of day.
          </p>
          <p>
            <span>
              Within walking distance is the{" "}
              <a href="https://mcgillrosegardenevents.com/">
                McGill Rose Garden
              </a>
              . Whether you prefer early morning, or a romantic evening, this
              charming atmosphere is one you'll definitely want to try.
            </span>
          </p>
        </Attraction>
      ),
      () => (
        <Attraction
          imageSrc={midwoodSteakhouseSrc}
          title="Midwood Steakhouse"
          siteHref="https://midwoodsmokehouse.com/"
          mapHref="https://maps.app.goo.gl/GtVFjDmNZgXcFnAH7"
        >
          <p>
            <strong>For the steak lovers (you know who you are):</strong>
            <br />
            This is your place. Think BBQ dreams made real&mdash;brisket, beef
            ribs, and sides so good they deserve their own fan club.
          </p>
          <p>
            <strong>For our veggie-loving friends:</strong>
            <br />
            You're not forgotten. There are vegetarian and vegan options too,
            including black bean & corn nachos, classic mac and cheese, and
            Tex-Mex salad bowls.
          </p>
        </Attraction>
      ),
    ],
  },
  "small-town-charm": {
    icon: "family_home",
    title: "Small-Town Charm",
    subtitle: "Wanting to take it easy? Sounds like a plan!",
    attractions: [
      () => (
        <Attraction
          imageSrc={mcAlpineCreekParkSrc}
          title="McAlpine Creek Park"
          siteHref="https://www.charlottesgotalot.com/things-to-do/outdoors-adventure/mcalpine-creek-park"
          mapHref="https://maps.app.goo.gl/3BLoYYfXYgBLZB9D6"
        >
          <p>
            Just 20 minutes from the hotel, this beautiful park is the perfect
            place for a leisurely stroll.
          </p>
          <p>
            Afterwards, you can head over to{" "}
            <a href="http://www.yourmomsdonutsnc.com/" target="_blank">
              Your Mom's Donuts
            </a>
            , I hear the coffee isn't bad either... but don't take my word for
            it.
          </p>
        </Attraction>
      ),
      () => (
        <Attraction
          imageSrc={paulineTeaBarApothecarySrc}
          title="The Pauline Tea-Bar Apothecary"
          siteHref="https://www.thepaulineteabar.com/"
          mapHref="https://maps.app.goo.gl/yipq5GQ1B4Loja8GA"
        >
          <p>
            Pauline Tea-Bar Apothecary is a cozy place tucked away in Charlotte.
            Think warm lighting, calming scents, and a large variety of herbal
            teas.
          </p>
          <p>
            This is the perfect place to catch up with friends and unwind. Pair
            your tea with a pastry and enjoy the calm.
          </p>
        </Attraction>
      ),
      () => (
        <Attraction
          imageSrc={thePackingHouseSrc}
          title="The Packing House"
          siteHref="http://www.thepackinghousenc.com/"
          mapHref="https://maps.app.goo.gl/9X3NCRHU9vhUpQBe6"
        >
          <p>
            Come for lunch, stay because it's really good. If you love Southern
            food, The Packing House is worth a visit.
          </p>
          <p>
            This place is a general store, coffee store, and bakery all in one.
            While in Monroe, take a drive 10 minutes down the road to{" "}
            <a href="https://charliesangelsnc.org/" target="_blank">
              Charlie's Cat Cafe
            </a>{" "}
            for one hour of cat lounge time.
          </p>
        </Attraction>
      ),
    ],
  },
  "global-flavors": {
    icon: "ramen_dining",
    title: "Global Flavors",
    subtitle: "Very Important Dining Decisions",
    attractions: [
      () => (
        <Attraction
          imageSrc={matchaCafeMaikoSrc}
          title="Matcha Cafe Maiko"
          siteHref="https://www.matchacafe-maiko.com/eng/"
          mapHref="https://maps.app.goo.gl/6Y6tbC285KxU8S8D9"
        >
          <p>
            The Matcha Cafe Maiko, in Charlotte, specializes in authentic
            Japanese matcha treats and beverages, sourced from Kyoto, Japan.
          </p>
          <p>
            Nearby, a small asian-inspired garden curated by a retired botany
            professor and his wife is available to the public. Take a walk
            through an inspired setting at the{" "}
            <a href="https://www.maplewalkgarden.com/" target="_blank">
              Maplewalk Garden
            </a>
          </p>
        </Attraction>
      ),
      () => (
        <Attraction
          imageSrc={riRaIrishPubSrc}
          title="Ri Ra Irish Pub"
          siteHref="https://rira.com/charlotte/"
          mapHref="https://maps.app.goo.gl/GmunMteojXm1U8mk6"
        >
          <p>
            Luck of the Irish! This pub is about 30 minutes from the hotel, and
            so worth the drive. Great food, unique atmosphere, and a story in
            every corner.
          </p>
          <p>
            Reserve a table and kick back with friends or family and enjoy
            delicious food with great conversation.
          </p>
        </Attraction>
      ),
      () => (
        <Attraction
          imageSrc={theOneTapasAndBarSrc}
          title="The One Tapas & Bar"
          siteHref="http://theonetapas.com/"
          mapHref="https://maps.app.goo.gl/NEt2wPeyG29CiMPU8"
        >
          <p>
            Tapas lovers, rejoice! Inspired by Spanish and global cuisine, this
            spot serves small plates meant to be shared&mdash;big flavors, tiny
            bites, and a taste of the world in every dish.
          </p>
        </Attraction>
      ),
    ],
  },
};
