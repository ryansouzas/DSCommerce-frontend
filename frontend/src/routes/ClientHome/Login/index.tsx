import { useContext, useState } from "react";
import FormInput from "../../../components/FormInput";
import { useNavigate } from "react-router-dom";
import * as authservice from "../../../services/auth-service";
import { ContextToken } from "../../../utils/context-token";
import "./styles.css";

export default function Login() {

  const navigate = useNavigate();

  const { setContextTokenPayload } = useContext(ContextToken);


  const [formData, setFormData] = useState<any>({
    username: {
      value: "",
      id: "username",
      name: "username",
      type: "text",
      placeholder: "Email",
      validation: function (value: string) {
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value.toLowerCase());
      },
      message: "Favor informar um email válido",
    },
    password: {
      value: "",
      id: "password",
      name: "password",
      type: "password",
      placeholder: "Senha",
    }
  });

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    authservice.loginRequest({
      username: formData.username.value,
      password: formData.password.value
    })
      .then(response => {
        authservice.saveAccessToken(response.data.access_token);
        const payload = authservice.getAccessTokenPayload();
        setContextTokenPayload(payload);
        navigate("/cart");
      })
      .catch(error => {
        console.error("Erro ao realizar login:", error);
      });
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {

    const name = event.target.name;
    const value = event.target.value;

    setFormData({
      ...formData,
      [name]: {
        ...formData[name],
        value: value
      }
    });

  }


  return (
    <main>
      <section id="login-section" className="dsc-container">
        <div className="dsc-login-form-container">
          <form className="dsc-card dsc-form" onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div className="dsc-form-controls-container">
              <div>
                <FormInput
                  {...formData.username}
                  onChange={handleInputChange}
                  className="dsc-form-control "
                  />
                <div className="dsc-form-error"></div>
              </div>
              <div>
                <FormInput
                  {...formData.password}
                  onChange={handleInputChange}
                  className="dsc-form-control"
                  />
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