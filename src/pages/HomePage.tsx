import { Link } from "react-router-dom";

import StatisticsCards from "../components/dashboard/StatisticsCards";
import TouristPlaceCard from "../components/tourist/TouristPlaceCard";
import { touristPlaces } from "../data/touristPlaces";
import { useLanguage } from "../i18n/useLanguage";

const quickActions = [
  { to: "/lugares-turisticos", icon: "⌖", label: "Nuevo Lugar Turístico" },
  { to: "/hospedajes", icon: "▣", label: "Nuevo Hospedaje" },
  { to: "/restaurantes", icon: "⌁", label: "Nuevo Restaurante" },
  { to: "/emergencias", icon: "+", label: "Nueva Emergencia" },
  { to: "/usuario", icon: "♙", label: "Nuevo Usuario" },
  { to: "/reportes", icon: "↗", label: "Generar Reporte" },
];

function HomePage() {
  const { t } = useLanguage();
  const categories = Array.from(new Set(touristPlaces.map((place) => place.category)));
  const categorySummary = categories.map((category) => ({
    category,
    total: touristPlaces.filter((place) => place.category === category).length,
  }));

  return (
    <section className="home-page" aria-labelledby="home-title">
      <StatisticsCards />

      <div className="dashboard-layout">
        <section className="dashboard-primary">
          <div className="section-heading">
            <div><p className="eyebrow">{t("featuredKicker")}</p><h1 id="home-title">{t("featuredPlaces")}</h1><p>{t("featuredDescription")}</p></div>
            <Link className="see-all-link" to="/lugares-turisticos">{t("allPlaces")} <span aria-hidden="true">→</span></Link>
          </div>
          <div className="tourist-places-grid tourist-places-grid--featured">
            {touristPlaces.slice(0, 3).map((place) => <TouristPlaceCard key={place.id} place={place} />)}
          </div>
        </section>

        <aside className="dashboard-aside" aria-label="Resumen turístico">
          <section className="dashboard-panel">
            <p className="eyebrow">Panorama</p><h2>Resumen Turístico</h2>
            <dl className="summary-list">
              <div><dt>Lugares registrados</dt><dd>{touristPlaces.length}</dd></div>
              <div><dt>Categorías disponibles</dt><dd>{categories.length}</dd></div>
              <div><dt>Con calificación</dt><dd>{touristPlaces.filter((place) => place.calificacion != null).length}</dd></div>
            </dl>
          </section>
          <section className="dashboard-panel">
            <p className="eyebrow">Datos disponibles</p><h2>Visitas por categoría</h2>
            <div className="empty-chart" role="status"><span>◌</span><p>Aún no hay datos de visitas disponibles.</p><small>El panel está preparado para conectarse a esta métrica cuando el backend la exponga.</small></div>
            <ul className="category-list">{categorySummary.map(({ category, total }) => <li key={category}><span>{category}</span><strong>{total}</strong></li>)}</ul>
          </section>
          <section className="dashboard-panel dashboard-panel--muted">
            <p className="eyebrow">Próximamente</p><h2>Eventos y Festividades</h2><p>No existe una fuente de eventos conectada en el proyecto actual.</p>
          </section>
        </aside>
      </div>

      <section className="quick-actions" aria-labelledby="quick-actions-title">
        <div className="section-heading"><div><p className="eyebrow">Gestión ágil</p><h2 id="quick-actions-title">Acciones Rápidas</h2><p>Accede a los módulos existentes del sistema.</p></div></div>
        <div className="quick-actions__grid">{quickActions.map((action) => <Link key={action.to} className="quick-action" to={action.to}><span aria-hidden="true">{action.icon}</span>{action.label}<b aria-hidden="true">→</b></Link>)}</div>
      </section>
    </section>
  );
}

export default HomePage;
