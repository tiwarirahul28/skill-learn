import "./App.css";
import Sidebar from "./components/Navbar/Sidebar";
import { Routes, Route } from "react-router-dom";
import Html from "./Pages/Html";
import Css from "./Pages/Css";
import JavaScript from "./Pages/Javascript";
import AdvanceJS from "./Pages/AdvanceJS";
import Github from "./Pages/Github";
import NodeJS from "./Pages/NodeJS";
import ReactJS from "./Pages/ReactJS";
import MongoDB from "./Pages/MongoDB";
import NextJS from "./Pages/NextJS";
import { useState } from "react";
import WP from "./Pages/WP";
import FrontPage from "./Pages/FrontPage";
import NotFiund from "./components/NotFound";
import Php from "./Pages/Php";

function App() {
  const [Show, setstate] = useState(false);
  const routes = [
    {
      path: "/",
      element: <FrontPage />,
    },
    {
      path: "/html",
      element: <Html />,
    },
    {
      path: "/css",
      element: <Css />,
    },
    {
      path: "/github",
      element: <Github />,
    },
    {
      path: "/wordpress",
      element: <WP />,
    },
    {
      path: "/javascript",
      element: <JavaScript />,
    },
    {
      path: "/php",
      element: <Php />,
    },
    {
      path: "/advance-javascript",
      element: <AdvanceJS />,
    },
    {
      path: "/github",
      element: <Github />,
    },
    {
      path: "/reactjs",
      element: <ReactJS />,
    },
    {
      path: "/nodejs",
      element: <NodeJS />,
    },
    {
      path: "/mongodb",
      element: <MongoDB />,
    },
    {
      path: "/nextjs",
      element: <NextJS />,
    },
    {
      path: "*",
      element: <NotFiund />,
    },
  ];
  return (
    <>
      <Sidebar Show={Show} setstate={setstate} />
      <main className={Show ? "open" : ""}>
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route?.path}
              element={route?.element}
            ></Route>
          ))}
        </Routes>
      </main>
    </>
  );
}

export default App;
