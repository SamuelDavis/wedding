import { Route, Router } from "@solidjs/router";
import { lazy } from "solid-js";

const Layout = lazy(() => import("./Pages/Layout"));
const Home = lazy(() => import("./Pages/Home"));
const NotFound = lazy(() => import("./Pages/NotFound"));

export default function App() {
  return (
    <Router root={Layout}>
      <Route path="/" component={Home} />
      <Route path="*404" component={NotFound} />
    </Router>
  );
}
