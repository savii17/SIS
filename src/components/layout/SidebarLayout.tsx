import { useMemo, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

import { authRepository } from "../../repositories/authRepository";

import { useLanguage } from "../../i18n/useLanguage";


const managementRoutes = [
  { to: "/lugares-turisticos", label: "Lugares turísticos" },
  { to: "/hospedajes", label: "Hospedajes" },
  { to: "/restaurantes", label: "Restaurantes" },
  { to: "/emergencias", label: "Emergencias" },
  { to: "/usuario", label: "Usuario" },
];

const configurationRoutes = [
  { to: "/categorias", label: "Categorías" },
  { to: "/servicios", label: "Servicios" },
  { to: "/configuracion", label: "Configuración" },
  { to: "/administrador", label: "Administrador" },
];

const notifications = [
  "Nuevo hospedaje pendiente de revisión.",
  "Se actualizó la categoría de restaurantes.",
  "Hay 3 solicitudes turísticas por atender.",
];


function SidebarLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  const { language, setLanguage, t } = useLanguage();
  const user = authRepository.getCurrentUser();
  const managementRoutes = [
    { to: "/lugares-turisticos", label: t("touristPlaces") }, { to: "/hospedajes", label: t("accommodations") }, { to: "/restaurantes", label: t("restaurants") }, { to: "/emergencias", label: t("emergencies") }, { to: "/usuario", label: t("user") },
  ];
  const configurationRoutes = [
    { to: "/categorias", label: t("categories") }, { to: "/servicios", label: t("services") }, { to: "/configuracion", label: t("settings") }, { to: "/administrador", label: t("administrator") },
  ];
  const notifications = language === "es"
    ? ["Nuevo hospedaje pendiente de revisión.", "Se actualizó la categoría de restaurantes.", "Hay 3 solicitudes turísticas por atender."]
    : ["A new accommodation is pending review.", "The restaurant category was updated.", "There are 3 tourism requests to review."];

  const user = authRepository.getCurrentUser();


  const initials = useMemo(() => {
    if (!user) {
      return "ST";
    }

    return `${user.nombres.charAt(0)}${user.apellido_paterno.charAt(0)}`.toUpperCase();
  }, [user]);

  return (
    <div className={`app-shell ${isSidebarOpen ? "" : "app-shell--sidebar-collapsed"}`}>

      <aside className="sidebar" aria-label={t("navigation")}>

      <aside className="sidebar" aria-label="Nave"
        <div className="sidebar__brand">SIS Turismo</div>

        <nav className="sidebar__nav">
          <NavLink to="/" end className="sidebar__link">
            {t("home")}
          </NavLink>

          <section className="sidebar__section" aria-labelledby="gestion-heading">

            <h2 id="gestion-heading" className="sidebar__heading">{t("management")}</h2>

            <h2 id="gestion-heading" className="sidebar__heading">Gestión</h2>


            {managementRoutes.map((route) => (
              <NavLink key={route.to} to={route.to} className="sidebar__link">
                {route.label}
              </NavLink>
            ))}
          </section>

          <section className="sidebar__section" aria-labelledby="configuracion-heading">

            <h2 id="configuracion-heading" className="sidebar__heading">{t("configuration")}</h2>

            <h2 id="configuracion-heading" className="sidebar__heading">Configuración</h2>


            {configurationRoutes.map((route) => (
              <NavLink key={route.to} to={route.to} className="sidebar__link">
                {route.label}
              </NavLink>
            ))}
          </section>
        </nav>
      </aside>

      <div className="app-shell__main">
        <header className="topbar">
          <div className="topbar__left">
            <button
              type="button"
              className="hamburger-button"

              aria-label={isSidebarOpen ? t("hideSidebar") : t("showSidebar")}

              aria-label={isSidebarOpen ? "Ocultar menú lateral" : "Mostrar menú lateral"}

              aria-expanded={isSidebarOpen}
              onClick={() => setIsSidebarOpen((currentValue) => !currentValue)}
            >
              <span />
              <span />
              <span />
            </button>

            <div>

              <p className="eyebrow">{t("dashboard")}</p>
              <h1 className="topbar__title">{t("systemTitle")}</h1>

              <p className="eyebrow">Dashboard</p>
              <h1 className="topbar__title">Sistema de gestión turística</h1>

            </div>
          </div>

          <div className="topbar__actions">

            
            <label className="language-selector">
              <span className="sr-only">{t("language")}</span>
              <span aria-hidden="true">🌐</span>
              <select value={language} onChange={(event) => setLanguage(event.target.value as "es" | "en")} aria-label={t("language")}>
                <option value="es">{t("spanish")}</option>
                <option value="en">{t("english")}</option>
              </select>
            </label>

            <div className="notifications">
              <button
                type="button"
                className="icon-button"

                
                aria-label={t("viewNotifications")}

                aria-label="Ver notificaciones"

                aria-expanded={isNotificationsOpen}
                onClick={() => setIsNotificationsOpen((currentValue) => !currentValue)}
              >
                🔔
                <span className="notification-badge">{notifications.length}</span>
              </button>

              {isNotificationsOpen && (
                <div className="notifications__panel" role="status" aria-live="polite">

                  
                  <h2>{t("notifications")}</h2>

                  <h2>Notificaciones</h2>

                  <ul>
                    {notifications.map((notification) => (
                      <li key={notification}>{notification}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>


            
            <div className="profile-card" aria-label={t("accountProfile")}>
              <div className="profile-card__avatar">{initials}</div>
              <div>
                <strong>{user ? `${user.nombres} ${user.apellido_paterno}` : t("guest")}</strong>
                <span>{user?.rol ?? t("noSession")}</span>

            <div className="profile-card" aria-label="Perfil de la cuenta">
              <div className="profile-card__avatar">{initials}</div>
              <div>
                <strong>{user ? `${user.nombres} ${user.apellido_paterno}` : "Invitado"}</strong>
                <span>{user?.rol ?? "Sin sesión"}</span>

              </div>
            </div>
          </div>
        </header>


            
        <section className="dashboard-hero" aria-labelledby="dashboard-hero-title">
          <div className="dashboard-hero__media" aria-label={t("videoSlot")}>


        <section className="dashboard-hero" aria-labelledby="dashboard-hero-title">
          <div className="dashboard-hero__media" aria-label="Espacio para video o collage turístico">

            <video
              className="dashboard-hero__video"
              autoPlay
              loop
              muted
              playsInline
              poster="/dashboard-collage.jpg"
            >
              <source src="/dashboard-header-video.mp4" type="video/mp4" />
            </video>
            <div className="dashboard-hero__placeholder">

              
              {t("videoSlot")}

              Coloca tu video en public/dashboard-header-video.mp4

            </div>
          </div>

          <div className="dashboard-hero__content">

            
            <p className="eyebrow">{t("heroKicker")}</p>
            <h2 id="dashboard-hero-title">{t("heroTitle")}</h2>
            <p>{t("heroDescription")}</p>
          </div>
        </section>

            <p className="eyebrow">Panel turístico</p>
            <h2 id="dashboard-hero-title">Administra destinos, servicios y experiencias desde un solo lugar.</h2>
            <p>Este encabezado está listo para mostrar un video de fondo o un collage visual de tu sistema turístico.</p>
          </div>
        </section>



        <main className="app-shell__content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default SidebarLayout;
