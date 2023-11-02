import reactLogo from "./assets/react.svg";

export default function Header() {
  return (
    <header>
      <nav className="nav">
        <img className="nav--icon" src={reactLogo} />
        <h3 className="nav--logo_text">ReactFacts</h3>
        <h4 className="nav--title">React Course - Project 1</h4>
      </nav>
    </header>
  );
}
