import { useMemo, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

import { authRepository } from "../../repositories/authRepository";

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
  const user = authRepository.getCurrentUser();

  const initials = useMemo(() => {
    if (!user) {
      return "ST";
    }

    return `${user.nombres.charAt(0)}${user.apellido_paterno.charAt(0)}`.toUpperCase();
  }, [user]);

  return (
    <div className={`app-shell ${isSidebarOpen ? "" : "app-shell--sidebar-collapsed"}`}>
      <aside className="sidebar" aria-label="Navegación lateral">
        <div className="sidebar__brand">SIS Turismo</div>

        <nav className="sidebar__nav">
          <NavLink to="/" end className="sidebar__link">
            Inicio
          </NavLink>

          <section className="sidebar__section" aria-labelledby="gestion-heading">
            <h2 id="gestion-heading" className="sidebar__heading">Gestión</h2>

            {managementRoutes.map((route) => (
              <NavLink key={route.to} to={route.to} className="sidebar__link">
                {route.label}
              </NavLink>
            ))}
          </section>

          <section className="sidebar__section" aria-labelledby="configuracion-heading">
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
              aria-label={isSidebarOpen ? "Ocultar menú lateral" : "Mostrar menú lateral"}
              aria-expanded={isSidebarOpen}
              onClick={() => setIsSidebarOpen((currentValue) => !currentValue)}
            >
              <span />
              <span />
              <span />
            </button>

            <div>
              <p className="eyebrow">Dashboard</p>
              <h1 className="topbar__title">Sistema de gestión turística</h1>
            </div>
          </div>

          <div className="topbar__actions">
            <div className="notifications">
              <button
                type="button"
                className="icon-button"
                aria-label="Ver notificaciones"
                aria-expanded={isNotificationsOpen}
                onClick={() => setIsNotificationsOpen((currentValue) => !currentValue)}
              >
                🔔
                <span className="notification-badge">{notifications.length}</span>
              </button>

              {isNotificationsOpen && (
                <div className="notifications__panel" role="status" aria-live="polite">
                  <h2>Notificaciones</h2>
                  <ul>
                    {notifications.map((notification) => (
                      <li key={notification}>{notification}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

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
              Coloca tu video en public/dashboard-header-video.mp4
            </div>
          </div>

          <div className="dashboard-hero__content">
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
