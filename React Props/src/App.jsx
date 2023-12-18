import "./App.css";
import Contact from "./Contact.jsx";

export default function App() {
  return (
    <>
      <div className="contacts">
        <Contact
          img="../public/images/char-1.jpg"
          name="Mr. Whiskerson"
          superpower="Be invisible"
          land="He's comming from the Ghosty Land"
        />
        <Contact
          img="../public/images/char-2.jpg"
          name="Fluffykins"
          superpower="Cmouflage"
          land="He lives in the woods, under the trees"
        />
        <Contact
          img="../public/images/char-3.jpg"
          name="Muerta"
          superpower="Give you nightmare dreams"
          land="She has no land, is constantly hunting"
        />
        <Contact
          img="../public/images/char-4.jpg"
          name="Pumpkin"
          superpower="Walking through the walls"
          land="He lives under the city canals"
        />
      </div>
    </>
  );
}
