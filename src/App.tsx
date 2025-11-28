import { Route, HashRouter as Router } from "@solidjs/router";
import { lazy } from "solid-js";

const Layout = lazy(() => import("./Pages/Layout"));
const Home = lazy(() => import("./Pages/Home"));
const OurStory = lazy(() => import("./Pages/OurStory"));
const NotFound = lazy(() => import("./Pages/NotFound"));

export default function App() {
  return (
    <Router root={Layout}>
      <Route path="/" component={Home} />
      <Route path="/our-story" component={OurStory} />
      <Route path="*404" component={NotFound} />
    </Router>
  );
}
