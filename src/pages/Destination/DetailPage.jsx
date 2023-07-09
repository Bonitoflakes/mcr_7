import { useTrips } from "../../context/TripContext";
import { useParams } from "react-router-dom";

export const DestinationDetailPage = () => {
  const { trips } = useTrips();
  const { continentID, countryID, destinationID } = useParams();

  const continent = trips.find(({ id }) => id === Number(continentID));
  const country = continent.countries.find(({ id }) => id === Number(countryID));
  const destination = country.destinations.find(({ id }) => id === Number(destinationID));

  return (
    <>
      <h2>{destination.name}</h2>

      <div className="flex ">
        <div className="flex-1">
          <img src={destination.image} alt={destination.name} />
        </div>

        <div className="flex-1">
          <p>Description: {destination.description}</p>
          <p>Ratings: {destination.ratings}</p>
          <p>Reviews: {destination.reviews}</p>
          <p>Location: {destination.location}</p>
          <p>Opening Hours: {destination.openingHours}</p>
          <p>Ticket Price: ${destination.ticketPrice}</p>
          <a target="_blank" rel="noopener noreferrer" href={destination.website}>
            Website
          </a>
        </div>
      </div>
    </>
  );
};
