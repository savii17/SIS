import { useNavigate } from "react-router-dom";


import { authRepository } from "../repositories/authRepository";


function HomePage() {
  const navigate = useNavigate();
  const user = authRepository.getCurrentUser();


  const handleLogout = () => {
    authRepository.logout();
    navigate("/login", { replace: true });
  };


  return (
    <main>
      <h1>Página principal</h1>


      {user ? (
        <>
          <p>Bienvenido, {user.nombres} {user.apellido_paterno} {user.apellido_materno}</p>
          <p>Email: {user.email}</p>
          <p>Edad: {user.edad}</p>
          <p>Nacionalidad: {user.nacionalidad}</p>
          <p>Idioma: {user.idioma}</p>
          <p>Estado: {user.estado}</p>
          <p>Fecha de registro: {user.fecha_registrro}</p>
          <p>Rol: {user.rol}</p>


          <button type="button" onClick={handleLogout}>
            Cerrar sesión
          </button>
        </>
      ) : (
        <p>No existe una sesión activa.</p>
      )}
    </main>
  );
}


export default HomePage;
