import { Link } from "react-router-dom";

import TouristPlaceCard from "../components/tourist/TouristPlaceCard";
import StatisticsCards from "../components/dashboard/StatisticsCards";
import { touristPlaces } from "../data/touristPlaces";
import { useLanguage } from "../i18n/useLanguage";

function HomePage() {
  const { t } = useLanguage();

  return (
    <section className="home-page" aria-labelledby="home-title">
      <StatisticsCards />

      <div className="page-heading">
        <div>
          <p className="eyebrow">{t("discover")}</p>

          <h1 id="home-title">{t("homeTitle")}</h1>

          <p>{t("homeDescription")}</p>
        </div>

        <Link className="see-all-link" to="/lugares-turisticos">
          {t("allPlaces")} <span aria-hidden="true">→</span>
        </Link>
      </div>

      {/* Featured places section */}
      <section aria-labelledby="featured-places-heading" className="page-card">
        <div className="page-heading" style={{ marginBottom: 18 }}>
          <div>
            <p className="eyebrow">{t("featuredKicker")}</p>
            <h2 id="featured-places-heading">{t("featuredPlaces")}</h2>
          </div>

          <Link className="see-all-link" to="/lugares-turisticos">
            {t("allPlaces")} <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="tourist-places-grid tourist-places-grid--featured">
          {touristPlaces.slice(0, 8).map((place) => (
            <TouristPlaceCard key={place.id} place={place} />
          ))}
        </div>
      </section>

      {/* Existing preview of places (kept for backward compatibility) */}
      <div className="tourist-places-grid tourist-places-grid--home">
        {touristPlaces.slice(0, 3).map((place) => (
          <TouristPlaceCard key={place.id} place={place} />
        ))}
      </div>
    </section>
  );
}

export default HomePage;
