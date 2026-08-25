import { useState } from "react";
import type { FormEventHandler } from "react";
import type { LoginCredentials } from "../../types/auth";
import { useLanguage } from "../../i18n/useLanguage";


interface LoginFormProps {
  error?: string;
  onSubmit: (credentials: LoginCredentials) => void;
}


function LoginForm({ error, onSubmit }: LoginFormProps) {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

  const normalizedEmail = email.trim();


     if (!normalizedEmail || !password) {
      return;
    }



    onSubmit({
      email: normalizedEmail,
      password,
    });
  };


  return (
    <form onSubmit={handleSubmit}>
      <h1>{t("signIn")}</h1>


      <div>
         <label htmlFor="email">{t("email")}</label>


        <input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder={t("emailPlaceholder")}
          autoComplete="username"
          required
        />
      </div>


      <div>
        <label htmlFor="password">{t("password")}</label>


        <input
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder={t("passwordPlaceholder")}
          autoComplete="current-password"
          required
        />
      </div>


      {error && (
        <p role="alert" aria-live="polite">
          {error}
        </p>
      )}


      <button type="submit">{t("login")}</button>
    </form>
  );
}


export default LoginForm;
