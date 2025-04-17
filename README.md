# 💱 Proyecto: Cambio de Divisas

Este es un proyecto de aplicación web que permite registrar tipos de cambio entre diferentes monedas y realizar conversiones. Está construido con HTML, CSS, JavaScript y PHP, utilizando almacenamiento en caché del navegador (`localStorage`) y buenas prácticas de desarrollo con Git y GitHub.

## 🚀 Demo

🔗 [Ver aplicación en GitHub Pages](https://)  
📁 [Repositorio del Proyecto](https://github.com/cs-grupo-b-nrc-23731/pa2.git)

## 🎯 Objetivos del Proyecto

- Registrar tipos de cambio entre monedas.
- Realizar conversiones de divisas de manera rápida y precisa.
- Utilizar `localStorage` para persistencia de datos.
- Aplicar buenas prácticas con Git y GitHub (uso de ramas, pull requests, forks).
- Propuesta de CI/CD con GitHub Actions.

## 🛠️ Tecnologías Utilizadas

- **Frontend:** HTML5, CSS3, JavaScript (ES6)
- **Backend:** PHP
- **Control de versiones:** Git + GitHub
- **Automatización:** GitHub Actions (en desarrollo)
- **Almacenamiento:** Caché del navegador (`localStorage`)

## 📂 Estructura del Proyecto
📦 cambio-divisas/
├── index.html              # Interfaz principal
├── registrar.html          # Página para registrar tipos de cambio
├── convertir.html          # Página para convertir monedas
├── listado.html            # Página para visualizar la tabla de tipos de cambio
├── css/
│   └── style.css           # Estilos generales del proyecto
├── js/
│   ├── main.js             # Coordinador general de los módulos JavaScript
│   ├── registrar.js        # Lógica del registro de tipos de cambio
│   ├── conversion.js       # Funcionalidad para conversión de monedas
│   ├── tabla.js            # Visualización y actualización dinámica de la tabla
│   └── tasas.js            # Gestión de tasas en localStorage
## 📌 Funcionalidades

- ✅ Registrar nuevos tipos de cambio.
- ✅ Almacenar y recuperar datos desde el navegador.
- ✅ Mostrar una tabla de tipos de cambio.
- ✅ Convertir valores entre monedas.
- ✅ Validaciones básicas en formularios.

## 🧠 Arquitectura Modular

- `main.js`: Control principal.
- `conversion.js`: Lógica de conversión.
- `registrar.js`: Registro de tipos de cambio.
- `tabla.js`: Visualización de datos.

## 🧪 Pruebas

- Pruebas manuales realizadas en navegadores:
  - Chrome ✅
  - Firefox ✅
- Validación de persistencia en `localStorage`.
- Conversión correcta de divisas según tipo de cambio ingresado.

## 🤝 Contribución

Este proyecto se desarrolló como parte del curso **Construcción de Software**.  
Cada miembro del equipo trabajó desde un fork del repositorio, enviando cambios mediante **pull requests**.

### Miembros del equipo

- Carlos Ernesto Illacutipa Espinoza
- Daniel Fernando Cueva Reyes
- Gustavo Oscar Cutipa Perez
- Jacob Cisneros Arteaga
- Sebastian Martin Mamani Chino
- Wilfredo Callata Arizanca

## 🔀 Flujo de trabajo con Git

- Fork del repositorio principal.
- Trabajo en ramas `main`.
- Pull Requests para integrar cambios.
- Commits claros y documentados.

## ⚙️ CI/CD (Propuesta)

- Validación automática de código JavaScript.
- Despliegue automático con GitHub Pages.
- Minificación de archivos CSS/JS (en desarrollo).

## 📌 Licencia

Este proyecto se realizó con fines académicos y educativos.  
Para uso libre, con atribución.

---