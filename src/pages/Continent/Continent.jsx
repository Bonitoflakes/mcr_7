/* eslint-disable react/prop-types */
import { useTrips } from "../../context/TripContext";
import { Card } from "../../components/Card";
import { Link } from "react-router-dom";

export const ContinentPage = () => {
  const { trips } = useTrips();

  return (
    <div>
      <h1>Welcome to Trip Advisor</h1>
      <h2>Top continents for your next holiday</h2>
      <div className="flex gap-8 flex-wrap">
        {trips.map((continent) => (
          <Link to={`/continent/${continent.id}`} key={continent.id}>
            <Card {...continent} />
          </Link>
        ))}
      </div>
    </div>
  );
};
