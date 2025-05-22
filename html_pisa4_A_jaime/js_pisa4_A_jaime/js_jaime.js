// Funcionalidades dinámicas para el proyecto de sostenibilidad - Creado el 20/05/2025 23:25 CEST

// Desplazamiento suave para los enlaces de navegación
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            
            // Si el enlace es a otra página, redirige directamente
            if (!targetId.startsWith("#")) {
                window.location.href = targetId;
                return;
            }

            // Si el enlace es a un ancla en la misma página, hace desplazamiento suave
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });

    // Mensaje de bienvenida al cargar la página
    const welcomeMessage = "Bienvenido/a al proyecto de Sostenibilidad en Informática y Comunicaciones - Ana Jaime";
    const mainSection = document.querySelector("main");
    if (mainSection) {
        const welcomeDiv = document.createElement("div");
        welcomeDiv.textContent = welcomeMessage;
        welcomeDiv.style.backgroundColor = "#81C784"; // Verde claro de la paleta
        welcomeDiv.style.color = "#212121";
        welcomeDiv.style.padding = "10px";
        welcomeDiv.style.marginBottom = "20px";
        welcomeDiv.style.textAlign = "center";
        welcomeDiv.style.fontStyle = "italic";
        mainSection.insertBefore(welcomeDiv, mainSection.firstChild);
    }
});