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

  const localizedPlace = getLocalizedTouristPlace(place, language) as unknown as Record<string, any>;

  // support optional fields that may not exist yet in the type
  const image = (localizedPlace.imagenes_url && localizedPlace.imagenes_url.length > 0)
    ? localizedPlace.imagenes_url[0]
    : localizedPlace.image;

  const price = localizedPlace.precio_entrada ?? localizedPlace.price ?? null;
  const rating = localizedPlace.calificacion ?? localizedPlace.rating ?? null;

  return (
    <article className="tourist-place-card">
      <div className="tourist-place-card__image-wrap">
        {image ? (
          <img
            className="tourist-place-card__image"
            src={image}
            alt={`${t("touristPlaces")}: ${localizedPlace.name}`}
            onError={(event) => {
              // hide failed image and let placeholder show
              event.currentTarget.hidden = true;
            }}
          />
        ) : (
          <div className="tourist-place-card__image--fallback" aria-hidden>
            ⌁
          </div>
        )}

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

        <div className="tourist-place-card__meta">
          {rating != null && (
            <div className="tourist-place-card__rating" aria-hidden>
              <strong>{rating}</strong>
              <span>{" ★"}</span>
            </div>
          )}

          {price != null && (
            <div className="tourist-place-card__price">
              <strong>{price}</strong>
            </div>
          )}
        </div>

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
