import { HTMLIcon } from "@samueldavis/solidlib";
import { useParams } from "@solidjs/router";
import { For, type JSX, type ValidComponent } from "solid-js";
import { Dynamic } from "solid-js/web";

const InterestSlugs = [
  "nightlife",
  "small-town-charm",
  "global-flavors",
] as const;
export type InterestSlug = (typeof InterestSlugs)[number];

type Content = {
  imageSrc: string;
  title: string;
  mapHref: string;
  description: ValidComponent;
};
type Interest = {
  icon: JSX.Element;
  title: string;
  subtitle: string;
  content: Content[];
};

const data: Partial<Record<InterestSlug, Interest>> = {
  nightlife: {
    icon: <HTMLIcon type="moon_stars" />,
    title: "Nightlife",
    subtitle: "Nice choice. Enjoy all the city has to offer!",
    content: [
      {
        imageSrc: "https://placehold.co/200x300",
        title: "Mint Museum Uptown",
        mapHref: "https://maps.app.goo.gl/ymweMR8r7tBZou7R6",
        description: () => (
          <>
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
                . Well liked by the locals, this comes highly recommended for
                some great soul food.
              </span>
            </p>
          </>
        ),
      },
    ],
  },
};

function useInterest() {
  const { interest } = useParams<{ interest: InterestSlug }>();
  return data[interest]!;
}

export default function Discover() {
  const interest = useInterest();
  return (
    <article>
      <header>
        {interest.icon}
        <h1>{interest.title}</h1>
        <h2>{interest.subtitle}</h2>
      </header>
      <For each={interest.content}>
        {(content) => (
          <section>
            <div>
              <img src={content.imageSrc} />
            </div>
            <div>
              <h3>{content.title}</h3>
              <Dynamic component={content.description} />
              <a href={content.mapHref} target="_blank">
                View Route
              </a>
            </div>
          </section>
        )}
      </For>
    </article>
  );
}
