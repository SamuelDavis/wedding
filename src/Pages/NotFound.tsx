import { A } from "@solidjs/router";

export default function NotFound() {
  return (
    <article>
      <h1>Page Not Found</h1>
      <p>
        Try returning <A href="/">Home</A>.
      </p>
    </article>
  );
}
