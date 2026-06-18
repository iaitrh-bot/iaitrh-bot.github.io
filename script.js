document.addEventListener("DOMContentLoaded", () => {
    
    // VARIABLES ELEMENTALES
    const chatBox = document.getElementById("chat-box");
    const input = document.getElementById("user-input");
    const sendBtn = document.getElementById("send-btn");
    const micBtn = document.getElementById("mic-btn");
    const botonesRapidos = document.querySelectorAll(".pregunta");
    
    const tabs = document.querySelectorAll(".menu-btn");
    const tabContents = document.querySelectorAll(".tab-content");

    const logoClickZone = document.getElementById("logo-click-zone");
    const logoUploader = document.getElementById("logo-uploader");
    const appLogo = document.getElementById("app-logo");

    // 1. CONTROL DE PESTAÑAS (MENÚ SIDEBAR) - ULTRA SEGURO
    if (tabs && tabs.length > 0) {
        tabs.forEach(tab => {
            if (!tab) return;
            tab.addEventListener("click", () => {
                // Limpiar botones activos de forma segura
                tabs.forEach(t => {
                    if (t) t.classList.remove("activo");
                });
                
                // Limpiar contenidos activos de forma segura
                if (tabContents) {
                    tabContents.forEach(c => {
                        if (c) c.classList.remove("activo");
                    });
                }

                // Activar pestaña seleccionada
                tab.classList.add("activo");
                
                const targetTab = tab.getAttribute("data-tab");
                if (targetTab) {
                    // Cambiado a concatenación tradicional con comillas normales para evitar fallos de lectura
                    const targetElement = document.getElementById("tab-" + targetTab);
                    if (targetElement) {
                        targetElement.classList.add("activo");
                    }
                }
            });
        });
    }

    // 2. CONTROL DEL CARGADOR DE LOGO PERSONALIZADO
    if (logoClickZone && logoUploader && appLogo) {
        logoClickZone.addEventListener("click", () => {
            logoUploader.click();
        });

        logoUploader.addEventListener("change", (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(event) {
                    appLogo.src = event.target.result;
                };
                reader.readAsDataURL(file);
            }
        });
    }

    // 3. BASE DE DATOS DE CONOCIMIENTO
    const respuestas = {
        "director": "El director de nuestra prestigiosa institución es el profesor Juan Edilberto Ortega, caracterizado por mantener una administración con altos estándares de excelencia.",
        "subdirector": "El subdirector encargado del área académica del centro es el profesor Raúl Elvir.",
        "secretario": "El secretario general encargado del control de expedientes y registros es el profesor Osman Barahona.",
        "consejeros": "El departamento de orientación y consejería estudiantil está conformado por los profesores Renán Pantoja, Manuel Arteaga y Víctor Gómez.",
        "docentes": "El cuerpo docente está integrado por ingenieros y licenciados altamente calificados, incluyendo al profesor Víctor Gómez en las asignaturas de orientación técnica.",
        "alumnos": "El Instituto cuenta actualmente con una matrícula robusta de aproximadamente 282 estudiantes distribuidos en las jornadas vigentes.",
        "fundacion": "Nuestra institución fue fundada con orgullo en noviembre del año 1990 bajo el esfuerzo unificado de la aldea El Pedernal.",
        "historia": "Iniciamos labores con secciones 1 y 2 de ciclo común, atendiendo entre 30 y 40 estudiantes. Las primeras clases históricas se impartieron en los predios de Rubenia y en el centro comunal.",
        "carreras": "Actualmente ofrecemos formación media avanzada: Bachillerato Técnico Profesional en Informática (BTPI) y Bachillerato en Ciencias y Humanidades.",
        "itrh": "El Instituto Técnico República de Holanda es un pilar fundamental en El Porvenir, Francisco Morazán, enfocado en dotar a Honduras de profesionales técnicos de primer nivel.",
        "quien descubrio honduras": "Honduras fue descubierta por Cristóbal Colón en su cuarto y último viaje al continente americano, en el año 1502, llegando a las costas de Trujillo.",
        "heroes nacionales": "Los héroes y próceres nacionales de Honduras son: el Cacique Lempira, el General Francisco Morazán, José Cecilio del Valle, Dionisio de Herrera y el General José Trinidad Cabañas.",
        "capital de honduras": "La capital de la República de Honduras es el Distrito Central, conformado geográficamente por las ciudades hermanas de Tegucigalpa y Comayagüela.",
        "capital de francia": "La capital oficial de la República Francesa es la hermosa e histórica ciudad de París.",
        "velocidad de la luz": "La velocidad de la luz en el vacío es de aproximadamente 299,792 kilómetros por segundo (299,792 km/s).",
        "fotosintesis": "La fotosíntesis es el proceso biológico mediante el cual las plantas, algas y algunas bacterias convierten la luz solar, agua y dióxido de carbono en oxígeno y nutrientes energéticos.",
        "primer hombre en la luna": "El primer ser humano en pisar la superficie lunar fue el astronauta estadounidense Neil Armstrong, el 20 de julio de 1969, durante la histórica misión Apolo 11.",
        "ia": "La Inteligencia Artificial es la disciplina científica e informática dedicada a la creación de sistemas capaces de emular procesos cognitivos humanos, como el razonamiento y el autoaprendizaje.",
        "inteligencia artificial": "La Inteligencia Artificial automatiza tareas masivas, resuelve ecuaciones complejas y procesa lenguaje natural (como el motor algorítmico que ejecuta este chat).",
        "html": "HTML (HyperText Markup Language) es el estándar técnico que define la semántica y estructura jerárquica de cualquier página web en el mundo.",
        "css": "CSS (Cascading Style Sheets) es el lenguaje encargado del ecosistema visual y estético de la web, manipulando diseños de cuadrículas, colores y animaciones complejas.",
        "javascript": "JavaScript es el lenguaje de programación de alto nivel interpretado que permite dar lógica dinámica, procesar eventos en tiempo real y conectar periféricos como el micrófono de tu PC.",
        "proyecto": "Este software interactivo fue desarrollado como propuesta de vanguardia para la Feria de Ciencias y Tecnología 2026, demostrando la aplicación práctica del desarrollo front-end.",
        "creadores": "Esta plataforma inteligente fue estructurada, diseñada y programada por el equipo técnico avanzado de estudiantes de 11vo BTPI.",
        "hola": "¡Hola! Bienvenido al centro de control del ITRH Assistant. ¿Qué consulta técnica o histórica deseas realizar hoy?",
        "buenos dias": "¡Muy buenos días! Que tengas una jornada muy productiva. Estoy listo para procesar tus preguntas.",
        "buenas tardes": "¡Buenas tardes! ¿En qué puedo colaborar con tu investigación sobre el instituto el día de hoy?",
        "buenas noches": "¡Buenas noches! Monitoreando sistemas en línea. ¿Tienes dudas sobre alguna carrera o dato cultural?",
        "gracias": "¡Es un absoluto placer! Estoy programado para servir a la comunidad del 11vo BTPI.",
        "adios": "¡Sistemas cerrados con éxito! Gracias por interactuar con el ITRH Assistant. ¡Muchos éxitos!"
    };

    function obtenerHora() {
        return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    }

    function agregarMensaje(texto, tipo) {
        if (!chatBox) return;
        const mensaje = document.createElement("div");
        mensaje.classList.add("mensaje", tipo);

        mensaje.innerHTML = `
            <div class="avatar">${tipo === "bot" ? "AI" : "TÚ"}</div>
            <div class="contenido">
                ${texto}
                <br><br>
                <small style="font-size: 0.7rem; opacity: 0.6; display: block; text-align: right;">${obtenerHora()}</small>
            </div>
        `;

        chatBox.appendChild(mensaje);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function buscarRespuesta(texto) {
        const normalizado = texto.toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/[¿?¡!]/g, "");

        for (let clave in respuestas) {
            const claveNormalizada = clave.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            if (normalizado.includes(claveNormalizada)) {
                return respuestas[clave];
            }
        }
        return "No cuento con ese dato específico en mi almacenamiento local, te invito a reformular tu pregunta o consultar sobre las autoridades de la institución.";
    }

    function toggleEscribiendo(mostrar) {
        if (!chatBox) return;
        if (mostrar) {
            const typing = document.createElement("div");
            typing.classList.add("mensaje", "bot");
            typing.id = "typing";
            chatBox.appendChild(typing);
            chatBox.scrollTop = chatBox.scrollHeight;
        } else {
            const typing = document.getElementById("typing");
            if (typing) typing.remove();
        }
    }

    function procesarPregunta(pregunta) {
        if (pregunta.trim() === "") return;
        agregarMensaje(pregunta, "usuario");
        toggleEscribiendo(true);

        const respuesta = buscarRespuesta(pregunta);

        setTimeout(() => {
            toggleEscribiendo(false);
            agregarMensaje(respuesta, "bot");
        }, 750);
    }

    // 4. CONTROLADORES DE EVENTOS DEL CHAT
    if (sendBtn && input) {
        sendBtn.addEventListener("click", () => {
            const val = input.value.trim();
            if (val === "") return;
            procesarPregunta(val);
            input.value = "";
        });

        input.addEventListener("keypress", (e) => {
            if (e.key === "Enter") sendBtn.click();
        });
    }

    if (botonesRapidos.length > 0) {
        botonesRapidos.forEach(btn => {
            btn.addEventListener("click", () => {
                procesarPregunta(btn.textContent.trim());
            });
        });
    }

    // 5. CONTROLADOR DEL MICRÓFONO (SISTEMA DE AUDIO)
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (SpeechRecognition && micBtn && input) {
        const recognition = new SpeechRecognition();
        recognition.lang = 'es-HN';
        recognition.interimResults = false;

        micBtn.addEventListener('click', () => {
            if (micBtn.classList.contains('recording')) {
                recognition.stop();
            } else {
                try {
                    recognition.start();
                } catch (err) {
                    console.log("El reconocimiento ya inició o fue bloqueado localmente.");
                }
            }
        });

        recognition.onstart = () => {
            micBtn.classList.add('recording');
            micBtn.textContent = '🛑';
            input.placeholder = 'Transcribiendo tu voz...';
        };

        recognition.onspeechend = () => recognition.stop();

        recognition.onend = () => {
            micBtn.classList.remove('recording');
            micBtn.textContent = '🎙️';
            input.placeholder = 'Escribe o haz una pregunta en voz alta...';
        };

        recognition.onresult = (event) => {
            const vozCapturada = event.results[0][0].transcript;
            input.value = vozCapturada;
            setTimeout(() => {
                if (sendBtn) sendBtn.click();
            }, 500);
        };
    } else if (micBtn) {
        micBtn.style.opacity = '0.3';
        micBtn.title = 'Entorno de voz bloqueado por el protocolo de archivo local';
    }
});
