import React from "react";
import "./Recent.css";
import TripData from "./TripData";
import Trip1 from "../assets/nature-4216505_1280.jpg";
import Trip2 from "../assets/pexels-photo-2267339.jpeg";
import Trip3 from "../assets/pexels-photo-4577707.jpeg";

function Recent(props) {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps</p>
      <div className="tripcard">
        <TripData
          id="1"
          image={Trip1}
          heading="Trip in Indonesia"
          shortText="Discover the diverse and beautiful landscapes of Indonesia."
          longText="Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 Islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea. Indonesia offers a wide variety of experiences, from the bustling city life of Jakarta to the tranquil beaches of Bali. Visitors can explore ancient temples, dive in world-renowned coral reefs, and enjoy the vibrant culture and cuisine."
        />
        <TripData
          id="2"
          image={Trip2}
          heading="Trip in France"
          shortText="Experience the rich culture and history of France."
          longText="France, in Western Europe, encompasses medieval cities, alpine villages and Mediterranean beaches. Paris, its capital, is famed for its fashion houses, classical art museums including the Louvre and monuments like the Eiffel Tower. France is a country known for its rich history, art, and cuisine. Tourists can visit iconic landmarks like the Eiffel Tower and the Palace of Versailles, enjoy world-class wines in Bordeaux, and ski in the French Alps."
        />
        <TripData
          id="3"
          image={Trip3}
          heading="Trip in Malaysia"
          shortText="Explore the cultural diversity and natural beauty of Malaysia."
          longText="Malaysia is a Southeast Asian country occupying parts of the Malay Peninsula and the island of Borneo. It's known for its beaches, rainforests and mix of Malay, Chinese, Indian and European cultural influences. Malaysia offers diverse attractions, from the vibrant city of Kuala Lumpur with its modern skyline to the pristine beaches of the Perhentian Islands. The country is also home to unique wildlife in Borneo and the cultural heritage of Penang."
        />
      </div>
    </div>
  );
}

export default Recent;
