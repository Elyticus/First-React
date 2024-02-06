export default function Hero() {
  return (
    <picture className="picture-element">
      <source
        className="desktop-image"
        media="(max-width: 499px)"
        width="100%"
        srcSet="/images/hero-mobile.jpg"
      />

      <source media="(min-width: 1024px)" srcSet="/images/hero-desktop.jpg" />

      <img
        width="100%"
        className="mobile-image"
        src="/images/hero-desktop.jpg"
        alt="The profile picture with a girl"
      />
    </picture>
  );
}
