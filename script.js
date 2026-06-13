"use strict";

const nombreInput = document.querySelector("#nombre");
const edadInput = document.querySelector("#edad");
const formulario = document.querySelector("#formulario");
const mensaje = document.querySelector("#mensaje");

const validarFormulario = (e) => {
  e.preventDefault();

  const edad = Number(edadInput.value);
  const nombre = nombreInput.value;

  if (edad >= 18) {
    mensaje.textContent = `✅ Bienvenido, ${nombre}, tienes acceso al evento.`;
    mensaje.classList.remove("text-danger");
    mensaje.classList.add("text-success");
  } else {
    mensaje.textContent = `❌ Lo sentimos, ${nombre}, debes ser mayor de edad.`;
    mensaje.classList.remove("text-success");
    mensaje.classList.add("text-danger");
  }
};

formulario.addEventListener("submit", validarFormulario);
