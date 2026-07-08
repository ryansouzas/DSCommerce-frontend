import { useContext, useState } from "react";
import type { CredentialsDTO } from "../../../models/auth";
import "./styles.css";
import * as authservice from "../../../services/auth-service";
import { useNavigate } from "react-router-dom";
import { ContextToken } from "../../../utils/context-token";

export default function Login() {

  const navigate = useNavigate();

    const {setContextTokenPayload} = useContext(ContextToken);
  

  const [formData, setFormData] = useState<CredentialsDTO>({
    username: "",
    password: ""
  });

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    authservice.loginRequest(formData)
        .then(response => {
        authservice.saveAccessToken(response.data.access_token);
        const payload = authservice.getAccessTokenPayload();
        setContextTokenPayload(payload);
        console.log(payload);
        navigate("/cart");

        })
        .catch(error => {
            console.error("Erro ao realizar login:", error);
        });
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {

    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]: value });
  
  }


  return (
    <main>
      <section id="login-section" className="dsc-container">
        <div className="dsc-login-form-container">
          <form className="dsc-card dsc-form" onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div className="dsc-form-controls-container">
              <div>
                <input 
                value={formData.username}
                onChange={handleInputChange}
                name="username"
                className="dsc-form-control " 
                type="text" 
                placeholder="Email" />
                <div className="dsc-form-error"></div>
              </div>
              <div>
                <input 
                value={formData.password}
                onChange={handleInputChange}
                name="password"
                className="dsc-form-control" 
                type="password" 
                placeholder="Senha" />
              </div>
            </div>

            <div className="dsc-login-form-buttons dsc-mt20">
              <button type="submit" className="dsc-btn dsc-btn-blue">Entrar</button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}