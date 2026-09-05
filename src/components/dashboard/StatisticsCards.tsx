import { touristPlaces } from "../../data/touristPlaces";
import initialUsers from "../../data/users.json";
import { useLanguage } from "../../i18n/useLanguage";

type StatisticIconName = "places" | "users";

function StatisticIcon({ name }: { name: StatisticIconName }) {
  return name === "places" ? (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s6-5.17 6-11A6 6 0 0 0 6 10c0 5.83 6 11 6 11Zm0-8.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" /></svg>
  ) : (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 20v-1a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v1m6-9a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm11 9v-1a4 4 0 0 0-3-3.87m-1-12.1a4 4 0 0 1 0 7.75" /></svg>
  );
}

function StatisticsCards() {
  const { t } = useLanguage();
  const activePlaces = touristPlaces.filter((place) => place.estado?.toUpperCase() === "ACTIVO").length;
  const activeUsers = initialUsers.filter((user) => user.estado === "ACTIVO").length;

  // Only render metrics supported by the data sources currently connected to this UI.
  // Accommodation, restaurant and emergency collections are not available in this project yet.
  const statistics = [
    { id: "places", title: t("touristPlaces"), value: touristPlaces.length, active: activePlaces, icon: "places" as const },
    { id: "users", title: t("users"), value: initialUsers.length, active: activeUsers, icon: "users" as const },
  ];

  return (
    <section className="statistics-grid" aria-label={t("dashboardStatistics")}>
      {statistics.map((statistic) => (
        <article key={statistic.id} className={`statistic-card statistic-card--${statistic.id}`}>
          <div className="statistic-card__icon"><StatisticIcon name={statistic.icon} /></div>
          <div className="statistic-card__content">
            <p className="statistic-card__title">{statistic.title}</p>
            <strong className="statistic-card__value">{statistic.value}</strong>
            <div className="statistic-card__footer">
              <span>{t("active")}: {statistic.active}</span><i aria-hidden="true" />
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}

export default StatisticsCards;
