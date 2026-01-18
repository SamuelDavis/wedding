import Marquee from "../Components/Marquee";

export default function OurStory() {
  return (
    <section>
      <div>
        <div>
          <img src="https://placehold.co/200x300" />
          <q>Every moment spent with you&hellip;</q>
        </div>
        <div>
          <h2>Let's Make This Official</h2>
          <p>
            Our story began in 2019, chatting during work breaks about
            animation, music, and movies.
          </p>
          <p>
            Fast forward to the fall of 2020 &mdash; we wnt on a casual morning
            walk that we jokingly called a "date". But eight miles and a hundred
            tangents later, we realized how much we enjoyed eachother's company.
          </p>
          <p>
            We are excited to invite you &mdash; our family and closest friends
            to celebrate with us on our wedding day. We can't wait!
          </p>
          <footer>
            <div>Here's to love,</div>
            <i>Love Us</i>
          </footer>
        </div>
      </div>
      <div>
        <header>
          <span>A look back on our </span>
          <span>
            <span>l</span>
            <span>o</span>
            <span>v</span>
            <span>e</span>
          </span>
        </header>
        <Marquee srcs={Array(5).fill("https://placehold.co/200x200")} />
        <footer>
          <q>&hellip;is a moment I treasure.</q>
        </footer>
      </div>
    </section>
  );
}
