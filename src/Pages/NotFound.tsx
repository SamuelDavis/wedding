import Link from "../Components/Link";

export default function NotFound() {
  return (
    <article>
      <header>
        <h1>Page Not Found</h1>
      </header>
      <p>
        Try returning <Link href="/">Home</Link>.
      </p>
    </article>
  );
}
