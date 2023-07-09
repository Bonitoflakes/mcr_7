import { useTrips } from "../../context/TripContext";
import { Card } from "../../components/Card";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export const CountryPage = () => {
  const { continentID } = useParams();
  const { trips } = useTrips();

  const continent = trips.find((trip) => trip.id === Number(continentID));

  return (
    <div>
      <h2>Top countries in {continent.name} for your next holiday</h2>
      <div className="flex gap-8 flex-wrap">
        {continent.countries.map((country) => (
          <Link key={country.id} to={`/continent/${continent.id}/country/${country.id}`}>
            <Card key={country.id} {...country} />
          </Link>
        ))}
      </div>
    </div>
  );
};
