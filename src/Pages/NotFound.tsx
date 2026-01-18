import { A } from "@solidjs/router";

export default function NotFound() {
  return (
    <article>
      <header>
        <h1>Page Not Found</h1>
      </header>
      <p>
        Try returning <A href="/">Home</A>.
      </p>
    </article>
  );
}
