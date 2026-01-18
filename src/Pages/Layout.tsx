import type { ParentProps } from "solid-js";
import Footer from "../Content/Footer";
import Header from "../Content/Header";

export default function Layout(props: ParentProps) {
  return (
    <main>
      <Header />
      {props.children}
      <Footer />
    </main>
  );
}
