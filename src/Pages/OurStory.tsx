import { For } from "solid-js";

export default function OurStory() {
  return (
    <section>
      <header>
        <h2>Our Story</h2>
      </header>
      <p>
        Our story began in 2019, chatting during work breaks about animation,
        music, and movies.
      </p>
      <p>
        Fast forward to the fall of 2020 &mdash; we wnt on a casual morning walk
        that we jokingly called a "date". But eight miles and a hundred tangents
        later, we realized how much we enjoyed eachother's company.
      </p>
      <p>
        We are excited to invite you &mdash; our family and closest friends to
        celebrate with us on our wedding day. We can't wait!
      </p>
      <em>Samuel & Jessica</em>
      <ul role="marquee">
        <For each={Array(5).fill("https://placehold.co/400x300")}>
          {(src) => (
            <li>
              <img src={src} />
            </li>
          )}
        </For>
      </ul>
    </section>
  );
}
