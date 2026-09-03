import { Link } from "react-router-dom";

import {
  getLocalizedTouristPlace,
  type TouristPlace,
} from "../../data/touristPlaces";
import { useLanguage } from "../../i18n/useLanguage";

type TouristPlaceCardProps = {
  place: TouristPlace;
};

function TouristPlaceCard({ place }: TouristPlaceCardProps) {
  const { language, t } = useLanguage();

  const localizedPlace = getLocalizedTouristPlace(place, language);

  return (
    <article className="tourist-place-card">
      <div className="tourist-place-card__image-wrap">
        <img
          className="tourist-place-card__image"
          src={localizedPlace.image}
          alt={`${t("touristPlaces")}: ${localizedPlace.name}`}
          onError={(event) => {
            event.currentTarget.hidden = true;
          }}
        />

        <span className="tourist-place-card__category">
          {localizedPlace.category}
        </span>

        <span
          className="tourist-place-card__image-placeholder"
          aria-hidden="true"
        >
          ⌁
        </span>
      </div>

      <div className="tourist-place-card__body">
        <h2>{localizedPlace.name}</h2>

        <p className="tourist-place-card__description">
          {localizedPlace.shortDescription}
        </p>

        <dl className="tourist-place-card__details">
          <div>
            <dt>{t("location")}</dt>
            <dd>{localizedPlace.address}</dd>
          </div>

          <div>
            <dt>{t("hours")}</dt>
            <dd>{localizedPlace.hours}</dd>
          </div>
        </dl>

        <Link
          className="tourist-place-card__link"
          to={`/lugares-turisticos/${place.id}`}
        >
          {t("seeMore")} <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}

export default TouristPlaceCard;
