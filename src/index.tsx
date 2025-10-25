/* @refresh reload */
import { render } from "solid-js/web";
import "@picocss/pico/css/pico.min.css";
import "./index.css";
import { Route, Router } from "@solidjs/router";
import Layout from "./Pages/Layout.tsx";
import { lazy } from "solid-js";

const Home = lazy(() => import("./Pages/Home.tsx"));
const OurStory = lazy(() => import("./Pages/OurStory.tsx"));
const RSVP = lazy(() => import("./Pages/RSVP.tsx"));
const NotFound = lazy(() => import("./Pages/NotFound.tsx"));

render(
  () => (
    <Router root={Layout}>
      <Route path="/" component={Home} />
      <Route path="/our-story" component={OurStory} />
      <Route path="/rsvp" component={RSVP} />
      <Route path="*404" component={NotFound} />
    </Router>
  ),
  document.body,
);
