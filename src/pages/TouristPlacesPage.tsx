import TouristPlaceCard from "../components/tourist/TouristPlaceCard";
import { touristPlaces } from "../data/touristPlaces";
import { useLanguage } from "../i18n/useLanguage";

function TouristPlacesPage() {
  const { t } = useLanguage();
  return (
    <section className="tourist-places-page" aria-labelledby="tourist-places-title">
      <div className="page-heading">
        <div>
          <p className="eyebrow">{t("explore")}</p>
          <h1 id="tourist-places-title">{t("touristPlaces")}</h1>
          <p>{t("placesDescription")}</p>
        </div>
        <span className="results-count">{touristPlaces.length} {t("placesCount")}</span>
      </div>
      <div className="tourist-places-grid">
        {touristPlaces.map((place) => <TouristPlaceCard key={place.id} place={place} />)}
      </div>
    </section>
  );
}

export default TouristPlacesPage;
