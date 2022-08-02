/* eslint-disable @next/next/no-img-element */
import React from "react";
import {} from "next/image"; 

export const Login = () => {
    return (
        <div className="container-login">
            <img src="/logo.svg"  alt="logo fiap" className="logo"/>
            <form action="">
                <div className="input">
                    <img src="/mail.svg" alt="Informe seu login"/>
                    <input type="text" placeholder="Login" className="input" />
                </div>
                <div className="input">
                    <img src="/lock.svg" alt="Informe sua senha" />
                    <input type="password" placeholder="Senha" className="input" />
                </div>
                <button>Login</button>
            </form>
        </div>
    );
}