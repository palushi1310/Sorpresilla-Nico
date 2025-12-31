document.getElementById("abrirBtn").addEventListener("click", () => {
  const ahora = new Date();

  // 1 de enero 2026 00:00 Argentina (UTC-3)
  const fechaObjetivo = new Date("2026-01-01T03:00:00Z");

  if (ahora >= fechaObjetivo) {
    document.getElementById("abrirBtn").style.display = "none";
    document.getElementById("mensaje").style.display = "none";
    document.getElementById("carta").classList.remove("hidden");
  } else {
    document.getElementById("extra").classList.remove("hidden");
  }
});
