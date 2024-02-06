import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Main from "./components/Main";

export default function App() {
  return (
    <div className="container">
      <Navbar className="navbar" />
      <Main className="content" />
      <Hero />
    </div>
  );
}
