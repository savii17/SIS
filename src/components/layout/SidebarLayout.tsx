import { NavLink, Outlet } from "react-router-dom";


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


function SidebarLayout() {
  return (
    <div className="app-shell">
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


      <div className="app-shell__content">
        <Outlet />
      </div>
    </div>
  );
}


export default SidebarLayout;