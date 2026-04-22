// Los caracteres que se pueden usar
const minusculas = "abcdefghijklmnopqrstuvwxyz";
const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numeros = "0123456789";
const simbolos = "!@#$%^&*()_+-=[]{}|;:,.<>?";

// Los elementos de la página
const passDisplay = document.getElementById("passwordDisplay");
const barraFuerza = document.getElementById("strengthFill");
const textoFuerza = document.getElementById("strengthLabel");
const sliderLargo = document.getElementById("lengthSlider");
const largoTexto = document.getElementById("lengthDisplay");
const botonGenerar = document.getElementById("generateBtn");
const botonCopiar = document.getElementById("copyBtn");

const chkMinus = document.getElementById("chkLower");
const chkMayus = document.getElementById("chkUpper");
const chkNumeros = document.getElementById("chkNumbers");
const chkSimbolos = document.getElementById("chkSymbols");

// Arma el string con todos los caracteres permitidos
function armarCaracteres() {
  let chars = "";
  if (chkMinus.checked) chars += minusculas;
  if (chkMayus.checked) chars += mayusculas;
  if (chkNumeros.checked) chars += numeros;
  if (chkSimbolos.checked) chars += simbolos;
  return chars;
}

// Genera la contraseña
function generarPass() {
  let caracteres = armarCaracteres();
  if (caracteres === "") {
    passDisplay.textContent = "Activá al menos una opción";
    return null;
  }
  
  let largo = parseInt(sliderLargo.value);
  let pass = "";
  for (let i = 0; i < largo; i++) {
    let pos = Math.floor(Math.random() * caracteres.length);
    pass += caracteres[pos];
  }
  return pass;
}

// Calcula qué tan fuerte es la contraseña
function calcularFuerza(pass) {
  if (!pass) return 0;
  let puntos = 0;
  if (pass.length >= 8) puntos++;
  if (pass.length >= 16) puntos++;
  if (/[A-Z]/.test(pass)) puntos++;
  if (/[0-9]/.test(pass)) puntos++;
  if (/[^a-zA-Z0-9]/.test(pass)) puntos++;
  return puntos;
}

// Actualiza la barrita de fuerza
function actualizarFuerza(pass) {
  let puntos = calcularFuerza(pass);
  let niveles = ["Muy débil", "Débil", "Regular", "Buena", "Muy buena", "Excelente"];
  let anchos = ["10%", "25%", "50%", "70%", "88%", "100%"];
  
  if (pass) {
    barraFuerza.style.width = anchos[puntos];
    textoFuerza.textContent = niveles[puntos];
  } else {
    barraFuerza.style.width = "0";
    textoFuerza.textContent = "—";
  }
}

// Muestra la contraseña en la pantalla
function mostrarPass() {
  let pass = generarPass();
  if (pass) {
    passDisplay.textContent = pass;
    actualizarFuerza(pass);
  } else {
    actualizarFuerza(null);
  }
}

// Copia al portapapeles
function copiarPass() {
  let texto = passDisplay.textContent;
  if (texto === "Presioná Generar" || texto === "Activá al menos una opción") {
    return;
  }
  
  navigator.clipboard.writeText(texto);
  botonCopiar.textContent = "¡Copiado!";
  setTimeout(function() {
    botonCopiar.textContent = "Copiar";
  }, 2000);
}

// Cuando cambia el slider, actualiza el número
sliderLargo.addEventListener("input", function() {
  largoTexto.textContent = sliderLargo.value;
});

// Los botones
botonGenerar.addEventListener("click", mostrarPass);
botonCopiar.addEventListener("click", copiarPass);

// Generar una al abrir la página
mostrarPass();