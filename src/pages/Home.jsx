import Hero from "../components/Hero";
import FeaturedCars from "../components/FeaturedCars";
import Stats from "../components/Stats";
import Services from "../components/Services";
import GalleryPreview from "../components/GalleryPreview";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";

function Home() {
  return (
    <div className="home-page">
      <Hero />
      <FeaturedCars />
      <Stats />
      <Services />
      <GalleryPreview />
      <Testimonials />
      <Newsletter />
    </div>
  );
}

export default Home;