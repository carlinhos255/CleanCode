# CompareInsta - password
  
EEST N°1 "Eduardo Ader" — Vicente López · 7° año 2° · 1° Cuatrimestre 2026

---

## 📝 Descripción

**CompareInsta - password** es un generador de contraseñas simple pero funcional que permite crear contraseñas aleatorias con diferentes niveles de complejidad. El usuario puede seleccionar si quiere incluir símbolos, números y mayúsculas, además de definir la longitud deseada (entre 4 y 64 caracteres).

El proyecto incluye una función básica para calcular la "fuerza" de la contraseña y un botón para copiarla al portapapeles.

Este proyecto forma parte de la articulación **Intra/Interdepartamental 2026** de la escuela.

---

## 🚀 Cómo ejecutar

No requiere dependencias ni servidor. Solo abrí el archivo en tu navegador:

```bash
# Opción 1: doble clic en el archivo
index.html

# Opción 2: desde VS Code con Live Server
# Clic derecho en index.html → "Open with Live Server"

# Opción 3: servidor local rápido con Python
python3 -m http.server 3000
# Luego abrí http://localhost:3000
##  Cómo ejecutar

No requiere dependencias ni servidor. Solo abrí el archivo en tu navegador:

```bash
# Opción 1: doble clic en el archivo
index.html

# Opción 2: desde VS Code con Live Server
# Clic derecho en index.html → "Open with Live Server"

# Opción 3: servidor local rápido con Python
python3 -m http.server 3000
# Luego abrí http://localhost:3000
```

---

## 📁 Estructura del proyecto

```
CompareInst/
├── index.html          # Estructura HTML principal
├── styles/
│   └── style.css       # Estilos + variables de modo adulto/infantil
├── scripts/
│   └── script.js         # Lógica: switch de modo, calculadora, 
├── .gitignore
├── LICENSE
└── README.md

---

## 🛠️ Tecnologías

| Tecnología | Uso |
|------------|-----|
| HTML5 semántico | Estructura de la página |
| CSS3 (variables, animaciones, grid) | Estilos y ambos modos visuales |
| JavaScript (ES6+) | Lógica, DOM, Web Speech API |
| Google Fonts (DM Sans / DM Mono) | Tipografía |

---

## funciones 

Función	Descripción
generarPassword()	Genera una contraseña aleatoria según las opciones seleccionadas
copiarPassword()	Copia la contraseña generada al portapapeles
calcularFuerza(p)	Calcula un puntaje de fuerza (0-5) según longitud y complejidad

## 📸 Capturas

> *(Agregar capturas del sistema funcionando en ambos modos)*

---

## 👥 Integrantes

| Nombre | Rol |
|--------|-----|
| *Carlos* | Desarrollo |

---

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver [LICENSE](LICENSE) para más detalles.
