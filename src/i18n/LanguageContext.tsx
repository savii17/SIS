import { useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { LanguageContext } from "./languageStore";

export type Language = "es" | "en";

type TranslationKey = keyof typeof translations.es;

const translations = {
  es: {
    language: "Idioma", spanish: "Español", english: "English", dashboard: "Panel", systemTitle: "Sistema de gestión turística",
    hideSidebar: "Ocultar menú lateral", showSidebar: "Mostrar menú lateral", navigation: "Navegación lateral", home: "Inicio", management: "Gestión", configuration: "Configuración",
    touristPlaces: "Lugares turísticos", accommodations: "Hospedajes", restaurants: "Restaurantes", emergencies: "Emergencias", user: "Usuario", categories: "Categorías", services: "Servicios", settings: "Configuración", administrator: "Administrador",
    notifications: "Notificaciones", viewNotifications: "Ver notificaciones", accountProfile: "Perfil de la cuenta", guest: "Invitado", noSession: "Sin sesión",
    heroKicker: "Panel turístico", heroTitle: "Administra destinos, servicios y experiencias desde un solo lugar.", heroDescription: "Este encabezado está listo para mostrar un video de fondo o un collage visual de tu sistema turístico.", videoSlot: "Coloca tu video en public/dashboard-header-video.mp4",
    discover: "Descubre la región", homeTitle: "Lugares para inspirar tu próxima visita", homeDescription: "Explora una selección de destinos con la información esencial para tus visitantes.", allPlaces: "Ver todos los lugares",
    explore: "Explora el destino", placesDescription: "Consulta todos los atractivos registrados y sus datos para planificar cada visita.", placesCount: "lugares", location: "Ubicación", hours: "Horario", seeMore: "Ver más",
    backToPlaces: "Volver a lugares turísticos", placeNotFound: "Lugar no encontrado", placeNotFoundDescription: "No encontramos este lugar turístico.", aboutPlace: "Sobre este lugar", memorableExperience: "Una experiencia para recordar", highlights: "Lo más destacado", availableServices: "Servicios disponibles", planVisit: "Planifica tu visita", address: "Dirección", savePlace: "Guardar lugar",
    module: "Módulo", signIn: "Iniciar sesión", email: "Correo electrónico", password: "Contraseña", emailPlaceholder: "Ingrese su correo electrónico", passwordPlaceholder: "Ingrese su contraseña", login: "Ingresar", invalidLogin: "El correo electrónico o la contraseña son incorrectos.",
    accommodationsDescription: "Administración de hoteles, hostales y alojamientos.", restaurantsDescription: "Gestión de restaurantes y opciones gastronómicas.", emergenciesDescription: "Directorio y control de servicios de emergencia.", userDescription: "Administración de usuarios del sistema.", categoriesDescription: "Configuración de categorías para clasificar información turística.", servicesDescription: "Configuración de servicios disponibles en la plataforma.", settingsDescription: "Opciones generales de configuración del sistema.", administratorDescription: "Panel de configuración para el administrador.",
  },
  en: {
    language: "Language", spanish: "Español", english: "English", dashboard: "Dashboard", systemTitle: "Tourism management system",
    hideSidebar: "Hide side menu", showSidebar: "Show side menu", navigation: "Side navigation", home: "Home", management: "Management", configuration: "Settings",
    touristPlaces: "Tourist places", accommodations: "Accommodations", restaurants: "Restaurants", emergencies: "Emergencies", user: "User", categories: "Categories", services: "Services", settings: "Settings", administrator: "Administrator",
    notifications: "Notifications", viewNotifications: "View notifications", accountProfile: "Account profile", guest: "Guest", noSession: "No session",
    heroKicker: "Tourism dashboard", heroTitle: "Manage destinations, services and experiences from one place.", heroDescription: "This header is ready to display a background video or a visual collage for your tourism system.", videoSlot: "Place your video in public/dashboard-header-video.mp4",
    discover: "Discover the region", homeTitle: "Places to inspire your next visit", homeDescription: "Explore a selection of destinations with the essential information for your visitors.", allPlaces: "View all places",
    explore: "Explore the destination", placesDescription: "Browse every registered attraction and its details to plan each visit.", placesCount: "places", location: "Location", hours: "Hours", seeMore: "See more",
    backToPlaces: "Back to tourist places", placeNotFound: "Place not found", placeNotFoundDescription: "We could not find this tourist place.", aboutPlace: "About this place", memorableExperience: "An experience to remember", highlights: "Highlights", availableServices: "Available services", planVisit: "Plan your visit", address: "Address", savePlace: "Save place",
    module: "Module", signIn: "Sign in", email: "Email", password: "Password", emailPlaceholder: "Enter your email", passwordPlaceholder: "Enter your password", login: "Sign in", invalidLogin: "The email or password is incorrect.",
    accommodationsDescription: "Manage hotels, hostels and accommodations.", restaurantsDescription: "Manage restaurants and dining options.", emergenciesDescription: "Directory and control of emergency services.", userDescription: "System user management.", categoriesDescription: "Configure categories for classifying tourist information.", servicesDescription: "Configure services available on the platform.", settingsDescription: "General configuration options for the system.", administratorDescription: "Configuration panel for the administrator.",
  },
} as const;

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => localStorage.getItem("sis-language") === "en" ? "en" : "es");
  useEffect(() => { localStorage.setItem("sis-language", language); document.documentElement.lang = language; }, [language]);
  const value = useMemo(() => ({ language, setLanguage, t: (key: TranslationKey) => translations[language][key] }), [language]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
