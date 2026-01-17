import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main style={{ position: "relative", zIndex: 1 }}>{children}</main>
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  { path: "/", element: <Layout><Home /></Layout> },
]);

function App() {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <div style={{ position: "relative", zIndex: 1 }}>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
