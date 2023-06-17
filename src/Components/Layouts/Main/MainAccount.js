import React, { useEffect } from "react";

function MainAccount() {
    useEffect(() => {

        const btnLogin = document.getElementById("btn-login");
        const btnRegister = document.getElementById("btn-register");
        const rearBoxLogin = document.querySelector(".rear-box-login");
        const rearBoxRegister = document.querySelector(".rear-box-register");
        const formLogin = document.querySelector(".form-login");
        const formRegister = document.querySelector(".form-register");
        const containerLoginRegister = document.querySelector(".container-login-register");

        const widthPage = () => {
            if (window.innerWidth > 850) {
              rearBoxRegister.style.display = "block";
              rearBoxLogin.style.display = "block";
            } else {
              rearBoxRegister.style.display = "block";
              rearBoxRegister.style.opacity = "1";
              rearBoxLogin.style.display = "none";
              formLogin.style.display = "block";
              containerLoginRegister.style.left = "0px";
              formRegister.style.display = "none";
            }
        };

        const Login = () => {
            if (window.innerWidth > 850) {
              formLogin.style.display = "block";
              containerLoginRegister.style.left = "10px";
              formRegister.style.display = "none";
              rearBoxRegister.style.opacity = "1";
              rearBoxLogin.style.opacity = "0";
            } else {
              formLogin.style.display = "block";
              containerLoginRegister.style.left = "0px";
              formRegister.style.display = "none";
              rearBoxRegister.style.display = "block";
              rearBoxLogin.style.display = "none";
            }
        };

        const Register = () => {
            if (window.innerWidth > 850) {
              formRegister.style.display = "block";
              containerLoginRegister.style.left = "410px";
              formLogin.style.display = "none";
              rearBoxRegister.style.opacity = "0";
              rearBoxLogin.style.opacity = "1";
            } else {
              formRegister.style.display = "block";
              containerLoginRegister.style.left = "0px";
              formLogin.style.display = "none";
              rearBoxRegister.style.display = "none";
              rearBoxLogin.style.display = "block";
              rearBoxLogin.style.opacity = "1";
            }
        };

        widthPage();

        btnLogin.addEventListener('click', Login);
        btnRegister.addEventListener('click', Register);
        window.removeEventListener('resize', widthPage);

        return () => {
            btnLogin.addEventListener('click', Login);
            btnRegister.addEventListener('click', Register);
            window.removeEventListener('resize', widthPage);
        }
    }, [])

    return (
        <main>
            <div className="container-all">
                <div className="rear-box">
                    <div className="rear-box-login">
                        <h3>¿Ya tienes una cuenta?</h3>
                        <p>Inicia Sesión para entrar a la pagina</p>
                        <button id="btn-login">Iniciar Sesión</button>
                    </div>
                    <div className="rear-box-register">
                        <h3>¿Aún no tienes una cuenta?</h3>
                        <p>Registrate para que puedas Iniciar Sesion</p>
                        <button id="btn-register">Registrarse</button>
                        <button id="btn-register">Registrar Gimnasio</button>
                    </div>
                </div>

                <div className="container-login-register">
                    <form className="form-login">
                        <h2>Iniciar Sesion</h2>
                        <div className="field">         
                            <input autocomplete="off" placeholder="Nombre Usuario" className="input-field" type="text"></input>
                        </div>
                        <div className="field">
                            <input placeholder="Contraseña" className="input-field" type="password"></input>
                        </div>
                        <button>Entrar</button>
                    </form>

                    <form className="form-register">
                        <h2>Regsitrarse</h2>
                        <div className="field">        
                            <input autocomplete="off" placeholder="Nombre Usuario" className="input-field" type="text"></input>
                        </div>
                        <div className="field">
                            <input placeholder="Telefono" className="input-field" type="text"></input>
                        </div>
                        <div className="field">
                            <input placeholder="Correo" className="input-field" type="password"></input>
                        </div>
                        <div className="field">
                            <input placeholder="Contraseña" className="input-field" type="password"></input>
                        </div>
                        <div className="field">
                            <input placeholder="Cofirmacion" className="input-field" type="password"></input>
                        </div>
                        <button>Registrarse</button>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default MainAccount;