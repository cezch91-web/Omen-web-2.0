// ===== LOGIN =====
function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const error = document.getElementById("login-error");

  if (user === "OmenPrivado" && pass === "Ibce3406") {
    document.getElementById("login-container").style.display = "none";
    document.getElementById("panel-container").style.display = "block";
  } else {
    error.textContent = "❌ Usuario o contraseña incorrectos";
  }
}

// ===== GUARDAR PARTIDO =====
function agregarPartido() {
  const partido = {
    equipo1: document.getElementById("equipo1").value,
    equipo2: document.getElementById("equipo2").value,
    resultado: document.getElementById("resultado").value,
    liga: document.getElementById("liga").value,
    estadisticas: document.getElementById("estadisticas").value,
    fecha: new Date().toLocaleDateString()
  };

  guardarEnLocalStorage("partidos", partido);
  alert("✅ Partido guardado correctamente");
}

// ===== GUARDAR PICK =====
function agregarPick() {
  const pick = {
    partido: document.getElementById("pickPartido").value,
    momio: document.getElementById("pickMomio").value,
    analisis: document.getElementById("pickAnalisis").value,
    confianza: document.getElementById("pickConfianza").value,
    fecha: new Date().toLocaleDateString()
  };

  guardarEnLocalStorage("picks", pick);
  mostrarHistorial();
  alert("✅ Pick guardado y enviado a la página principal");
}

// ===== GUARDAR NOTICIA =====
function agregarNoticia() {
  const noticia = {
    titulo: document.getElementById("noticiaTitulo").value,
    texto: document.getElementById("noticiaTexto").value,
    fecha: new Date().toLocaleDateString()
  };

  guardarEnLocalStorage("noticias", noticia);
  alert("✅ Noticia publicada");
}

// ===== GUARDAR EN LOCALSTORAGE =====
function guardarEnLocalStorage(clave, objeto) {
  let datos = JSON.parse(localStorage.getItem(clave)) || [];
  datos.push(objeto);
  localStorage.setItem(clave, JSON.stringify(datos));
}

// ===== MOSTRAR HISTORIAL =====
function mostrarHistorial() {
  const lista = document.getElementById("historial-lista");
  lista.innerHTML = "";
  let picks = JSON.parse(localStorage.getItem("picks")) || [];

  picks.forEach(p => {
    let li = document.createElement("li");
    li.textContent = `${p.fecha} - ${p.partido} | Momio: ${p.momio} | Confianza: ${p.confianza}`;
    lista.appendChild(li);
  });
}

window.onload = mostrarHistorial;
