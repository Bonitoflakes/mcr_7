import { ContinentPage } from "../pages/Continent/Continent";
import { CountryPage } from "../pages/Country/Country";
import { DestinationPage } from "../pages/Destination/Destination";
import { DestinationDetailPage } from "../pages/Destination/DetailPage";

import { Route, Routes } from "react-router-dom";

export const AppLayout = () => (
  <Routes>
    <Route path="/" element={<ContinentPage />} />
    <Route path="/continent/:continentID" element={<CountryPage />} />
    <Route path="/continent/:continentID/country/:countryID" element={<DestinationPage />} />
    <Route
      path="/continent/:continentID/country/:countryID/destination/:destinationID"
      element={<DestinationDetailPage />}
    />
    <Route path="*" element={<h1>404 Not found</h1>} />
  </Routes>
);
