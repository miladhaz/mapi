import { FC } from "react";
import { BsInfoCircle } from "react-icons/bs";
import { RiArticleLine } from "react-icons/ri";
import { BiMapAlt } from "react-icons/bi";
import { MdContactMail } from "react-icons/md";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Map from "./pages/map";
import About from "./pages/about";
import Blog from "./pages/blog";
import AsideNavLink from "./template/AsideNavLink";
import MapNav from "./template/MapNav";
import Nav from "./template/Nav";
import ContactUs from "./pages/contact-us";
const App: FC = () => {
  return (
    <AnimateSharedLayout type="switch">
      <Router>
        <div
          style={{ height: "100%" }}
          className="sm:relative fixed top-0 bottom-0"
        >
          <section className="h-full sm:h-screen w-screen bg-gray-200 flex flex-col-reverse sm:flex-row min-h-0 min-w-0 overflow-hidden">
            <aside className="z-50 sm:h-full sm:w-16 transition-all duration-200 lg:w-48 w-full h-12 bg-gray-800 text-gray-200">
              <ul className="text-center flex flex-row sm:flex-col w-full">
                <li className="h-14 border-b border-gray-900 hidden sm:block">
                  <Link
                    id="page-icon"
                    to="/"
                    className="h-full w-full hover:bg-gray-700 block p-3"
                  >
                    <img
                      className="object-contain h-full w-full"
                      src="https://avatars1.githubusercontent.com/u/6157842?v=4"
                      alt="open-source"
                    />
                  </Link>
                </li>

                <AsideNavLink
                  id="map-page-aside"
                  to="/"
                  Icon={BiMapAlt}
                  title={"نقشه"}
                />
                <AsideNavLink
                  id="about-page-aside"
                  to="/blog"
                  Icon={RiArticleLine}
                  title={"مقاله ها"}
                />
                <AsideNavLink
                  id="about-page-aside"
                  to="/about"
                  Icon={BsInfoCircle}
                  title={"دریاره ما"}
                />
                <AsideNavLink
                  id="contactus-page-aside"
                  to="/contact_us"
                  Icon={MdContactMail}
                  title={"ارتباط با ما"}
                />
              </ul>
            </aside>
            <main className="sm:h-full flex-1 flex flex-col min-h-0 min-w-0 overflow-hidden">
              <Route
                render={({ location }) => (
                  <AnimatePresence exitBeforeEnter initial={false}>
                    <Switch location={location} key={location.pathname}>
                      <Route exact path="/" component={MapNav} />
                      <Route path="/" component={Nav} />
                    </Switch>
                  </AnimatePresence>
                )}
              />
              <div className="flex flex-1 overflow-hidden ">
                <Route
                  render={({ location }) => (
                    <AnimatePresence exitBeforeEnter initial={false}>
                      <Switch location={location} key={location.pathname}>
                        <Route exact path="/" component={Map} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/contact_us" component={ContactUs} />
                        <Route
                          exact
                          path={["/blog/:id", "/blog"]}
                          component={Blog}
                        />
                      </Switch>
                    </AnimatePresence>
                  )}
                />
              </div>
            </main>
          </section>
        </div>
      </Router>
    </AnimateSharedLayout>
  );
};

export default App;
