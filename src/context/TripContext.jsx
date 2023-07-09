/* eslint-disable react/prop-types */
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { data } from "../DB/trip";

const TripContext = createContext(null);

const TripProvider = ({ children }) => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    setTrips(data.continents);
  }, []);

  const value = { trips };
  return <TripContext.Provider value={value}>{children}</TripContext.Provider>;
};

const useTrips = () => {
  const context = useContext(TripContext);
  if (!context) throw new Error("useTrips must be used within a TripProvider");
  return context;
};

export { TripProvider, useTrips };
