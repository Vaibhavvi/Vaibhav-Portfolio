import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Footer from "./components/Footer";
import Background from "./components/Background";

// Layout Component
function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main style={{ position: "relative", zIndex: 1 }}>{children}</main>
      <Footer />
    </>
  );
}

// Routes
const router = createBrowserRouter([
  { path: "/", element: <Layout><Home /></Layout> },
  { path: "/about", element: <Layout><About /></Layout> },
  { path: "/project", element: <Layout><Project /></Layout> },
  { path: "/skill", element: <Layout><Skill /></Layout> },
  { path: "/contact", element: <Layout><Contact /></Layout> },
]);

function App() {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      {/* Particle Background */}
      <Background />

      {/* App Content */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
