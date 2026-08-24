import { Link, useParams } from "react-router-dom";

import { getTouristPlaceById } from "../data/touristPlaces";

function TouristPlaceDetailPage() {
  const { placeId } = useParams();
  const place = getTouristPlaceById(placeId);

  if (!place) {
    return (
      <section className="page-card empty-state">
        <p className="eyebrow">Lugar no encontrado</p>
        <h1>No encontramos este lugar turístico.</h1>
        <Link className="tourist-place-card__link" to="/lugares-turisticos">Volver a lugares turísticos →</Link>
      </section>
    );
  }

  return (
    <article className="tourist-detail">
      <Link className="back-link" to="/lugares-turisticos">← Volver a lugares turísticos</Link>
      <header className="tourist-detail__hero">
        <img src={place.image} alt={`Vista de ${place.name}`} onError={(event) => { event.currentTarget.hidden = true; }} />
        <div className="tourist-detail__hero-content">
          <span className="tourist-place-card__category">{place.category}</span>
          <h1>{place.name}</h1>
          <p>{place.shortDescription}</p>
        </div>
      </header>

      <div className="tourist-detail__layout">
        <section className="tourist-detail__about">
          <p className="eyebrow">Sobre este lugar</p>
          <h2>Una experiencia para recordar</h2>
          <p>{place.description}</p>
          <div className="detail-list-grid">
            <div><h3>Lo más destacado</h3><ul>{place.highlights.map((item) => <li key={item}>{item}</li>)}</ul></div>
            <div><h3>Servicios disponibles</h3><ul>{place.services.map((item) => <li key={item}>{item}</li>)}</ul></div>
          </div>
        </section>
        <aside className="tourist-detail__info" aria-label="Información de visita">
          <p className="eyebrow">Planifica tu visita</p>
          <dl>
            <div><dt>Dirección</dt><dd>{place.address}</dd></div>
            <div><dt>Horarios</dt><dd>{place.hours}</dd></div>
          </dl>
          <button type="button">Guardar lugar</button>
        </aside>
      </div>
    </article>
  );
}

export default TouristPlaceDetailPage;
