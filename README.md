# Conversor de Temperatura — Lógica de Programación 2
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![License: Unlicense](https://img.shields.io/badge/License-Unlicense-blue?style=for-the-badge)

---

## Descripción

Aplicación web basica interactiva desarrollada en JavaScript que solicita una temperatura en grados Celsius al usuario, valida la integridad del dato ingresado y calcula automáticamente sus equivalencias en las escalas **Kelvin** y **Fahrenheit**.

> **Nota:** El programa garantiza que únicamente se procesen valores numéricos mediante un ciclo de validación interactivo.

---

## Características Principales

| Función | Descripción |
| :--- | :--- |
| **Validación Continua** | Detecta entradas vacías, espacios o texto, solicitando el dato nuevamente. |
| **Salida** | Muestra los resultados en el DOM, mensaje de cancelacion de usuario en Consola del Navegador. |
| **Manejo de Cancelación** | Detiene la ejecución limpia si el usuario cancela la ventana emergente. |

---

## Fórmulas de Conversión

Las conversiones implementadas utilizan las siguientes relaciones matemáticas:

* **Grados Kelvin:**
  $$K = C + 273.15$$

* **Grados Fahrenheit:**
  $$F = \left(C \times \frac{9}{5}\right) + 32$$

---

## Estructura del Proyecto

```text
Logica-Programacion-2/
│
├── index.html            # Estructura principal y contenedor del DOM
├── ejercicio-logica2.js  # Algoritmo de validación y cálculo
└── README.md             # Documentación del proyecto