import { Link } from "react-router-dom";

import type { TouristPlace } from "../../data/touristPlaces";

type TouristPlaceCardProps = {
  place: TouristPlace;
};

function TouristPlaceCard({ place }: TouristPlaceCardProps) {
  return (
    <article className="tourist-place-card">
      <div className="tourist-place-card__image-wrap">
        <img
          className="tourist-place-card__image"
          src={place.image}
          alt={`Vista de ${place.name}`}
          onError={(event) => {
            event.currentTarget.hidden = true;
          }}
        />
        <span className="tourist-place-card__category">{place.category}</span>
        <span className="tourist-place-card__image-placeholder" aria-hidden="true">⌁</span>
      </div>

      <div className="tourist-place-card__body">
        <h2>{place.name}</h2>
        <p className="tourist-place-card__description">{place.shortDescription}</p>
        <dl className="tourist-place-card__details">
          <div><dt>Ubicación</dt><dd>{place.address}</dd></div>
          <div><dt>Horario</dt><dd>{place.hours}</dd></div>
        </dl>
        <Link className="tourist-place-card__link" to={`/lugares-turisticos/${place.id}`}>
          Ver más <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}

export default TouristPlaceCard;
