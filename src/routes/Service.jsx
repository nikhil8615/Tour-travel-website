import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/nature-4216505_1280.jpg";
import Footer from "../components/Footer";
import Recent from "../components/Recent";
function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Service"
        btnClass="hide"
      />
      <Recent />
      <Footer />
    </>
  );
}
export default Service;
