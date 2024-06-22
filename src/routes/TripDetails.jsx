import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Trip1 from "../assets/nature-4216505_1280.jpg";
import Trip2 from "../assets/pexels-photo-2267339.jpeg";
import Trip3 from "../assets/pexels-photo-4577707.jpeg";
import "./TripDetails.css";

const tripData = {
  1: {
    image: Trip1,
    heading: "Adventure in Indonesia",
    text: "Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea.",
    details:
      "Indonesia offers a wide variety of experiences, from the bustling city life of Jakarta to the tranquil beaches of Bali. Visitors can explore ancient temples, dive in world-renowned coral reefs, and enjoy the vibrant culture and cuisine.",
    highlights: [
      "Explore the ancient temples of Borobudur and Prambanan.",
      "Dive in the stunning coral reefs of Raja Ampat.",
      "Relax on the beaches of Bali and Lombok.",
      "Experience the vibrant culture and cuisine in Jakarta.",
    ],
    moreInfo:
      "Indonesia's diverse landscapes range from volcanic mountains to lush rainforests and serene beaches. Each island offers unique attractions and experiences, making it a perfect destination for adventure seekers and nature lovers alike. Don't miss the chance to witness traditional dance performances and taste exotic local dishes.",
  },
  2: {
    image: Trip2,
    heading: "Romantic Getaway in France",
    text: "France, in Western Europe, encompasses medieval cities, alpine villages and Mediterranean beaches. Paris, its capital, is famed for its fashion houses, classical art museums including the Louvre, and monuments like the Eiffel Tower.",
    details:
      "France is a country known for its rich history, art, and cuisine. Tourists can visit iconic landmarks like the Eiffel Tower and the Palace of Versailles, enjoy world-class wines in Bordeaux, and ski in the French Alps.",
    highlights: [
      "Visit the Eiffel Tower and the Louvre in Paris.",
      "Taste world-class wines in Bordeaux.",
      "Ski in the French Alps during winter.",
      "Relax on the Mediterranean beaches of the French Riviera.",
    ],
    moreInfo:
      "France offers a perfect blend of modernity and tradition. From the bustling streets of Paris to the serene countryside of Provence, there is something for everyone. Enjoy gourmet dining, world-famous art, and picturesque landscapes. France is also known for its festivals and vibrant cultural life.",
  },
  3: {
    image: Trip3,
    heading: "Cultural Exploration in Malaysia",
    text: "Malaysia is a Southeast Asian country occupying parts of the Malay Peninsula and the island of Borneo. It's known for its beaches, rainforests, and mix of Malay, Chinese, Indian, and European cultural influences.",
    details:
      "Malaysia offers diverse attractions, from the vibrant city of Kuala Lumpur with its modern skyline to the pristine beaches of the Perhentian Islands. The country is also home to unique wildlife in Borneo and the cultural heritage of Penang.",
    highlights: [
      "Explore the modern cityscape of Kuala Lumpur.",
      "Relax on the pristine beaches of the Perhentian Islands.",
      "Discover the unique wildlife in Borneo.",
      "Experience the cultural heritage and cuisine in Penang.",
    ],
    moreInfo:
      "Malaysia is a melting pot of cultures, where traditional and contemporary lifestyles blend seamlessly. Visitors can enjoy bustling markets, historic sites, and diverse culinary delights. The country's natural beauty includes stunning islands, tropical rainforests, and vibrant marine life, making it an ideal destination for both cultural enthusiasts and nature lovers.",
  },
};

const TripDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const trip = tripData[id];

  if (!trip) {
    return <div>Trip not found</div>;
  }

  const handleBookNowClick = () => {
    navigate(`/booking`);
  };

  return (
    <>
      <Navbar />
      <div className="trip-details">
        <div className="trip-details-card">
          <div className="trip-details-image">
            <img src={trip.image} alt={trip.heading} />
          </div>
          <div className="trip-details-content">
            <h2>{trip.heading}</h2>
            <p>{trip.text}</p>
            <p>{trip.details}</p>
            <h3>Highlights:</h3>
            <ul>
              {trip.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
            <p>{trip.moreInfo}</p>
            <div className="cta">
              <button onClick={handleBookNowClick}>Book Now</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TripDetails;
