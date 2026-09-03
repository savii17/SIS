import { useLanguage } from "../../i18n/useLanguage";
import { touristPlaces } from "../../data/touristPlaces";
import initialUsers from "../../data/users.json";

type Statistic = {
  id: "places" | "accommodations" | "restaurants" | "emergencies" | "users";
  title: string;
  value: number;
  active: number;
  increase: number;
  icon: "location" | "bed" | "restaurant" | "emergency" | "users";
};

function StatisticIcon({ icon }: { icon: Statistic["icon"] }) {
  const paths = {
    location: <path d="M12 21s6-5.17 6-11A6 6 0 0 0 6 10c0 5.83 6 11 6 11Zm0-8.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" />,
    bed: <path d="M4 18v2m16-2v2M3 14h18v5H3v-5Zm2-7h6a3 3 0 0 1 3 3v4H5V7Zm10 2h2a2 2 0 0 1 2 2v3h-4V9Z" />,
    restaurant: <path d="M7 3v7m-3-7v4a3 3 0 0 0 6 0V3m-3 7v11m8-18v7m0 0a3 3 0 0 0 3-3V3m-3 7v11" />,
    emergency: <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm-2-9h4m-2-2v4" />,
    users: <path d="M16 20v-1a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v1m6-9a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm11 9v-1a4 4 0 0 0-3-3.87m-1-12.1a4 4 0 0 1 0 7.75" />,
  };

  return <svg viewBox="0 0 24 24" aria-hidden="true">{paths[icon]}</svg>;
}

function StatisticsCards() {
  const { t } = useLanguage();

  const statistics = [
    { id: "places", title: t("touristPlaces"), value: touristPlaces.length, active: Math.max(0, touristPlaces.length - 2), increase: 8, icon: "location" },
    { id: "accommodations", title: t("accommodations"), value: 18, active: 15, increase: 5, icon: "bed" },
    { id: "restaurants", title: t("restaurants"), value: 32, active: 28, increase: 12, icon: "restaurant" },
    { id: "emergencies", title: t("emergencies"), value: 12, active: 10, increase: 2, icon: "emergency" },
    { id: "users", title: t("users"), value: (initialUsers as any[]).length, active: Math.max(0, (initialUsers as any[]).length - 5), increase: 7, icon: "users" },
  ] as const;

  return (
    <section className="statistics-grid" aria-label={t("dashboardStatistics")}>
      {statistics.map((statistic) => (
        <article key={statistic.id} className={`statistic-card statistic-card--${statistic.id}`}>
          <div className="statistic-card__icon"><StatisticIcon icon={statistic.icon} /></div>
          <div className="statistic-card__content">
            <p className="statistic-card__title">{statistic.title}</p>
            <strong className="statistic-card__value">{statistic.value}</strong>
            <div className="statistic-card__footer">
              <span>{t("active")}:{" "}{statistic.active}</span>
              <span className="statistic-card__increase">↑ {statistic.increase}%</span>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}

export default StatisticsCards;
