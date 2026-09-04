import { Link, useParams } from "react-router-dom";

import { getLocalizedTouristPlace, getTouristPlaceById } from "../data/touristPlaces";
import { useLanguage } from "../i18n/useLanguage";

function TouristPlaceDetailPage() {
  const { placeId } = useParams<{ placeId: string }>();
  const { language, t } = useLanguage();
  const place = getTouristPlaceById(placeId);

  if (!place) {
    return (
      <section className="page-card tourist-detail">
        <h1>{t("placeNotFound")}</h1>
        <p>{t("placeNotFoundDescription")}</p>
        <Link className="see-all-link" to="/lugares-turisticos">{t("backToPlaces")}</Link>
      </section>
    );
  }

  const localizedPlace = getLocalizedTouristPlace(place, language);
  const image = localizedPlace.imagenes_url?.[0] ?? localizedPlace.image;
  const name = localizedPlace.nombre_lugar ?? localizedPlace.name;

  return (
    <article className="page-card tourist-detail">
      <Link className="see-all-link" to="/lugares-turisticos">← {t("backToPlaces")}</Link>
      {image && <img className="tourist-detail__image" src={image} alt={name} />}
      <p className="eyebrow">{localizedPlace.category}</p>
      <h1>{name}</h1>
      <p>{localizedPlace.descripcion ?? localizedPlace.description}</p>
      <dl className="tourist-detail__facts">
        <div><dt>{t("address")}</dt><dd>{localizedPlace.ubicacion ?? localizedPlace.address}</dd></div>
        <div><dt>{t("hours")}</dt><dd>{localizedPlace.horario_inicio && localizedPlace.horario_fin ? `${localizedPlace.horario_inicio} – ${localizedPlace.horario_fin}` : localizedPlace.hours}</dd></div>
        {localizedPlace.calificacion != null && <div><dt>★</dt><dd>{localizedPlace.calificacion.toFixed(1)}</dd></div>}
      </dl>
    </article>
  );
}

export default TouristPlaceDetailPage;
