import React from 'react';
import '../styles/form.scss';
import { useForm } from 'react-hook-form'
import axios from 'axios';
import { useSelector } from 'react-redux';

const URL = "https://murmuring-peak-43417.herokuapp.com/api/users";


export default function Form() {

    const { register, handleSubmit, errors } = useForm();
    const page = useSelector(state => state.page);


    const Submit = (data, e) => {
        let loader = document.getElementById("div_loader");
        let box = document.getElementById("fade-out");
        let message = document.getElementById("text");
        loader.style.display = "flex";
        axios.post(URL, { "name": data.name, "email": data.email, "phone": data.phone, "nickname": data.email.split("@")[0], "vehicle": page, "age": data.age }).then(res => {
            loader.style.display = "none";
            if (res.data === "Usuario Existente") {
                box.style.backgroundColor = "red"
            } else {
                box.style.backgroundColor = "green"
            }
            e.target.reset();
            message.textContent = res.data;
            fadeOut(box);
        });
    }

    const fadeOut = (elem) => {
        let newValue = 1;
        elem.style.opacity = 1;
        let fadeOutInterval = setInterval(function () {
            if (newValue > 0) {
                newValue -= 0.2;
            } else if (newValue < 0) {
                elem.style.opacity = 0;
                clearInterval(fadeOutInterval);
            }

            elem.style.opacity = newValue;

        }, 1000);

    }




    return (
        <div className="center">
            <div className="form">
                <form onSubmit={handleSubmit(Submit)}>
                    <h2>Formulario</h2>
                    <label>Nombre Completo</label>
                    <input
                        type="text"
                        name="name"
                        ref={
                            register({
                                required: "El campo nombre no debe ir vacío.",
                                pattern: {
                                    value: /^[\u00F1A-Za-z _]*[\u00F1A-Za-z][\u00F1A-Za-z _]*$/,
                                    message: "El nombre digitado no es valido."
                                }
                            })
                        }
                    />
                    <label>Email</label>
                    <input
                        type="text"
                        name="email"
                        ref={
                            register({
                                required: "El campo email no debe ir vacío.",
                                pattern: {
                                    value: /\S+@\S+\.\S+/,
                                    message: "El email digitado no es valido."
                                }
                            })
                        }
                    />
                    <label>Celular</label>
                    <input
                        type="text"
                        name="phone"
                        ref={
                            register({
                                required: "El campo celular no debe ir vacío.",
                                pattern: {
                                    value: /^3[\d]{9}$/,
                                    message: "El número del celular no es valido."
                                },
                            })
                        }
                    />
                    <label>Edad</label>
                    <input
                        type="text"
                        name="age"
                        ref={
                            register({
                                required: "El campo edad no debe ir vacío.",
                                pattern: {
                                    value: /^[0-9.]+$/,
                                    message: "La edad digitada no es valida."
                                },
                                min: {
                                    value: 18,
                                    message: "La edad minima es de 18."
                                },
                                max: {
                                    value: 100,
                                    message: "La edad maxima es de 100."
                                },
                            })
                        }
                    />
                    {errors.name && <p className="error">{errors.name.message}</p>}
                    {errors.email && <p className="error">{errors.email.message}</p>}
                    {errors.phone && <p className="error">{errors.phone.message}</p>}
                    {errors.age && <p className="error">{errors.age.message}</p>}
                    <div className="center">
                        <button >Guardar</button>
                    </div>
                </form>
            </div>
            <div className="fade-out" id="fade-out">
                <p id="text"></p>
            </div>
        </div>
    );
}