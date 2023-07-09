import { useTrips } from "../../context/TripContext";
import { Card } from "../../components/Card";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export const DestinationPage = () => {
  const { continentID, countryID } = useParams();
  const { trips } = useTrips();

  const continent = trips.find((trip) => trip.id === Number(continentID));
  const country = continent.countries.find((country) => country.id === Number(countryID));

  return (
    <div>
      <h2>Top Places in {country.name} for your next holiday</h2>
      <div className="flex gap-8 flex-wrap">
        {country.destinations.map((destination) => (
          <Link
            key={destination.id}
            to={`/continent/${continent.id}/country/${country.id}/destination/${destination.id}`}
          >
            <Card key={destination.id} {...destination} />
          </Link>
        ))}
      </div>
    </div>
  );
};
