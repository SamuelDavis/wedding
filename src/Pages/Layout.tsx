import { createEffect, on, type ParentProps } from "solid-js";
import Footer from "../Content/Footer";
import Header from "../Content/Header";
import { useLocation } from "@solidjs/router";

export default function Layout(props: ParentProps) {
  const location = useLocation();

  createEffect(
    on(
      () => location.pathname + location.hash,
      () => {
        const hash = location.hash;
        if (hash) {
          const id = decodeURIComponent(hash.slice(1));
          queueMicrotask(() => {
            document
              .getElementById(id)
              ?.scrollIntoView({ block: "start", behavior: "smooth" });
          });
        } else window.scrollTo({ top: 0, behavior: "auto" });
      },
    ),
  );
  return (
    <main>
      <Header />
      {props.children}
      <Footer />
    </main>
  );
}
