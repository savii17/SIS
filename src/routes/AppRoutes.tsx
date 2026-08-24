import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import SidebarLayout from "../components/layout/SidebarLayout";
import HomePage from "../pages/HomePage";
import PlaceholderPage from "../pages/PlaceholderPage";
import TouristPlaceDetailPage from "../pages/TouristPlaceDetailPage";
import TouristPlacesPage from "../pages/TouristPlacesPage";
import LoginPage from "../pages/auth/LoginPage";


function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
         <Route element={<SidebarLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/lugares-turisticos"
            element={<TouristPlacesPage />}
          />
          <Route path="/lugares-turisticos/:placeId" element={<TouristPlaceDetailPage />} />
          <Route
            path="/hospedajes"
            element={<PlaceholderPage title="Hospedajes" description="Administración de hoteles, hostales y alojamientos." />}
          />
          <Route
            path="/restaurantes"
            element={<PlaceholderPage title="Restaurantes" description="Gestión de restaurantes y opciones gastronómicas." />}
          />
          <Route
            path="/emergencias"
            element={<PlaceholderPage title="Emergencias" description="Directorio y control de servicios de emergencia." />}
          />
          <Route
            path="/usuario"
            element={<PlaceholderPage title="Usuario" description="Administración de usuarios del sistema." />}
          />
          <Route
            path="/categorias"
            element={<PlaceholderPage title="Categorías" description="Configuración de categorías para clasificar información turística." />}
          />
          <Route
            path="/servicios"
            element={<PlaceholderPage title="Servicios" description="Configuración de servicios disponibles en la plataforma." />}
          />
          <Route
            path="/configuracion"
            element={<PlaceholderPage title="Configuración" description="Opciones generales de configuración del sistema." />}
          />
          <Route
            path="/administrador"
            element={<PlaceholderPage title="Administrador" description="Panel de configuración para el administrador." />}
          />
        </Route>
      
        
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}


export default AppRoutes;
