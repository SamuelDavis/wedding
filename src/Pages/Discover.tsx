import { HTMLIcon, type ExtendProps } from "@samueldavis/solidlib";
import { useParams } from "@solidjs/router";
import {
  createMemo,
  For,
  mergeProps,
  splitProps,
  type ValidComponent,
} from "solid-js";
import { Dynamic } from "solid-js/web";
import DiscoveriesNav from "../Content/DiscoveriesNav";

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
    subtitle: "Nice choice. Enjoy all the city has to offer!",
    attractions: [
      () => (
        <Attraction
          imageSrc="https://lh3.googleusercontent.com/p/AF1QipMT-3_3gOdJDmgbH_J2W2NbheNmzG-uNiYA4LaJ=w408-h311-k-no"
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
          imageSrc="https://lh3.googleusercontent.com/p/AF1QipMiaoR8cngrZNKanS5ywdFp71IPMEv8riCRpWlu=w408-h408-k-no"
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
          imageSrc="https://lh3.googleusercontent.com/p/AF1QipPvxzX7GACFcLHy40qiT_o8vL6Vmm9r3dlvBaia=w408-h408-k-no"
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
          imageSrc="https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxEfjKMOzGeASPQVTIdxpZTwuP5HJP06C1GIhGzv_tUmr3xavvk9_FMIQ5WXnhUgLQ_C_-pWDFntNxBkOAnezSsLUcO-BX59dJTHmh4kQpapChAJmJw6zVcG0xqyOPq3gflyPC0Ug=w408-h306-k-no"
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
          imageSrc="https://lh3.googleusercontent.com/p/AF1QipOtngTDCLYa07UdGXxU0fBpQqbYyMPsAf0Doudp=w408-h306-k-no"
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
          imageSrc="https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxG377GaaL4e8TMLSXhxVW5FV5BYGdTR5ZZM-x4tTw-jCghpiSf-fVpp6_KNo1mf6HhAKZLm0WgOTfMNK1B0nRNcxG5VJOtYefibQZVDD0OyEixZLCH8ZgNclUy32qS5DDBIDYh=w408-h306-k-no"
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
          imageSrc="https://lh3.googleusercontent.com/p/AF1QipMjS1OCglnsjWZyl33oa8weCVhXaaL7Bv2f6Hmz=w408-h510-k-no"
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
          imageSrc="https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzKleyl20jxOgzbGonaBTJdAchpsun7BgUZR6JdcoMlFl3kpKM9dNOwKvTtmPoNe6IVgbY0qH5v6g42Hpus1WTAh7K9IqlO_12uWPyQFuDRob8Q46VNRlXOwcWPBTRbub-y0B_HHKsBzqU=w408-h544-k-no"
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
          imageSrc="https://lh3.googleusercontent.com/p/AF1QipOIPbWMuyCla93K3O3sgcIu7HpcnMBaNEPRTPPM=w408-h542-k-no"
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
