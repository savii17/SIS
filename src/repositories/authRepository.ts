import initialUsers from "../data/users.json";
import { storageService } from "../services/storageService";


import type {
  LoginCredentials,
  User,
  UserRecord,
} from "../types/auth";


const SESSION_KEY = "app_session";


const users = initialUsers as UserRecord[];


export const authRepository = {
  login(credentials: LoginCredentials): User | null {
    const foundUser = users.find(
      (user) =>
        user.email === credentials.email &&
        user.password === credentials.password
    );


    if (!foundUser) {
      return null;
    }


    const sessionUser: User = {
      nombres: foundUser.nombres,
      apellido_paterno: foundUser.apellido_paterno,
      apellido_materno: foundUser.apellido_materno,
      edad: foundUser.edad,
      email: foundUser.email,
      nacionalidad: foundUser.nacionalidad,
      idioma: foundUser.idioma,
      rol: foundUser.rol,
      estado: foundUser.estado,
      fecha_registrro: foundUser.fecha_registrro,
    };


    storageService.set<User>(SESSION_KEY, sessionUser);


    return sessionUser;
  },


  getCurrentUser(): User | null {
    return storageService.get<User>(SESSION_KEY);
  },


  isAuthenticated(): boolean {
    return this.getCurrentUser() !== null;
  },


  logout(): void {
    storageService.remove(SESSION_KEY);
  },
};
