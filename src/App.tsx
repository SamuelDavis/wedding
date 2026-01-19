import { Route, HashRouter as Router } from "@solidjs/router";
import { lazy } from "solid-js";
import { InterestSlugs } from "./Pages/Discover";

const Layout = lazy(() => import("./Pages/Layout"));
const Home = lazy(() => import("./Pages/Home"));
const OurStory = lazy(() => import("./Pages/OurStory"));
const YourTrip = lazy(() => import("./Pages/YourTrip"));
const Discover = lazy(() => import("./Pages/Discover"));
const NotFound = lazy(() => import("./Pages/NotFound"));

export default function App() {
  return (
    <Router root={Layout}>
      <Route path="/" component={Home} />
      <Route path="/our-story" component={OurStory} />
      <Route
        path="/your-trip/:interest"
        component={Discover}
        matchFilters={{ interest: InterestSlugs }}
      />
      <Route path="/your-trip" component={YourTrip} />
      <Route path="*404" component={NotFound} />
    </Router>
  );
}
