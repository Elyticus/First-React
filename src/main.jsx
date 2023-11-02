import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import MainContent from "./MainContent.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <Header />
    <MainContent />
    <Footer />
  </React.StrictMode>
);
