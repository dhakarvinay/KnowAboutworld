import { FaArrowCircleRight } from "react-icons/fa";
export const HeroSection = () => {
    return (
         <main className="hero-section main">
    <div className="container grid grid-two-cols">
      <div className="hero-content">
      <h1 className="heading-xl">
        Explore the World, One Country at a Time.
      </h1>
      <p className="paragraph">
        Discover the history, culture, and geography of every nation with our comprehensive country atlas.
      </p>
      <button className="btn btn-darken btn-inline bg-white-box">
        Start Exploring <FaArrowCircleRight /></button>"
      </div>
      <div className="hero-image">
      <img src="/images/world.png"
       alt="World image"
       className="banner-image" />
      </div>
    </div>
  </main>
  );
};