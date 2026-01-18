import { For } from "solid-js";

export default function OurStory() {
  return (
    <section>
      <header>
        <h2>Let's Make This Official</h2>
      </header>
      <div>
        <img src="https://placehold.co/200x300" />
        <q>Every moment spent with you&hellip;</q>
      </div>
      <div>
        <p>
          Our story began in 2019, chatting during work breaks about animation,
          music, and movies.
        </p>
        <p>
          Fast forward to the fall of 2020 &mdash; we wnt on a casual morning
          walk that we jokingly called a "date". But eight miles and a hundred
          tangents later, we realized how much we enjoyed eachother's company.
        </p>
        <p>
          We are excited to invite you &mdash; our family and closest friends to
          celebrate with us on our wedding day. We can't wait!
        </p>
        <div>Here's to love,</div>
        <i>Love Us</i>
      </div>
      <div>
        <div>
          <span>A look back on our </span>
          <span>
            <span>l</span>
            <span>o</span>
            <span>v</span>
            <span>e</span>
          </span>
        </div>
        <ul role="marquee">
          <For each={Array(5).fill("https://placehold.co/400x300")}>
            {(src) => (
              <li>
                <img src={src} />
              </li>
            )}
          </For>
        </ul>
        <q>&hellip;is a moment I treasure.</q>
      </div>
    </section>
  );
}
