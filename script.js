const chatBox = document.getElementById("chat-box");
const input = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");
const botonesRapidos = document.querySelectorAll(".pregunta");

const respuestas = {

    "hola":"¡Hola! Soy ITRH Assistant. ¿En qué puedo ayudarte hoy?",

    "buenos dias":"¡Buenos días! Espero que tengas un excelente día.",

    "cuantos alumnos tiene el instituto":"La institucion cuenta con aproximadamente 282, estudiantes activos",

    "buenas tardes":"¡Buenas tardes! ¿Cómo puedo ayudarte?",

    "buenas noches":"¡Buenas noches! Estoy listo para responder tus preguntas.",

    "quien eres":"Soy ITRH Assistant, un asistente virtual educativo del Instituto Gubernamental Tecnico Republica de Holanda.",

    "que es el itrh":"El Instituto Gubernamental Técnico República de Holanda es una institución educativa ubicada en El Pedernal, El Porvenir, Francisco Morazán, Honduras.",

    "cuando te fundaron":"Fui fundado en Noviembre de 1990 por la aldea del Pedernal.",

    "quien fue el primer director":"El primer director de nuestra institucion es Oscar Danilo Portillo Leon.",

    "como comenzo el centro educativo":"Comenzo con secciones 1 y 2 de segundo, Comenzo aproximado de 30 o 40 alumnos sus primeras clases fueron en el centro de rubenia y en el centro comunal.",

    "itrh":"El ITRH es una institución comprometida con la formación académica y técnica de calidad.",

    "donde esta ubicado":"El instituto está ubicado en El Pedernal, municipio de El Porvenir, departamento de Francisco Morazán, Honduras.",

    "ubicacion":"El ITRH se encuentra en El Pedernal, El Porvenir, Francisco Morazán.",

    "cual es el proposito":"Formar estudiantes con valores, conocimientos y competencias que contribuyan al desarrollo de la sociedad.",

    "vision":"Ser una institución reconocida por la excelencia académica, técnica y humana de sus estudiantes.",

    "historia":"El Instituto Gubernamental Técnico República de Holanda ha contribuido durante años a la formación académica y técnica de jóvenes de la región.",

    "carreras":"El instituto ofrece modalidades técnicas y académicas según la oferta educativa vigente Humanidades, Informatica Tecnico.",

    "porque te crearon":"Se utilizo en La Feria de Ciencias y Tecnología permite a los estudiantes presentar proyectos innovadores y demostrar sus conocimientos.",

    "proyecto":"Este proyecto consiste en un asistente virtual capaz de responder preguntas sobre el instituto, la educación y la tecnología.",

    "quien desarrollo este proyecto":"Este proyecto fue desarrollado por Steven Hernández de 11vo BTPI y sus compañeros.",

    "11vo btpi":"11vo BTPI desarrolló este proyecto como parte de la Feria de Ciencias y Tecnología.",

    "quien es el director": "El diector de la institucion, la cual a mantenido la reputacion muy impecable es Juan Edilberto Ortega.",

    "inteligencia artificial":"La inteligencia artificial es una rama de la informática que permite que las máquinas aprendan y respondan de forma inteligente.",

    "ia":"La inteligencia artificial permite automatizar tareas y generar respuestas inteligentes.",

    "tecnologia":"La tecnología es la aplicación de conocimientos científicos para resolver problemas y mejorar la vida de las personas.",

    "html":"HTML es el lenguaje utilizado para construir la estructura de una página web.",

    "css":"CSS es el lenguaje utilizado para diseñar y dar estilo a una página web.",

    "javascript":"JavaScript permite agregar funciones dinámicas e interactivas a las páginas web.",

    "programacion":"La programación consiste en crear instrucciones para que una computadora realice tareas específicas.",

    "robot":"Un robot es una máquina programable capaz de realizar tareas automáticamente.",

    "internet":"Internet es una red global que conecta millones de dispositivos en todo el mundo.",

    "computadora":"Una computadora es un dispositivo electrónico capaz de procesar información.",

    "gracias":"¡Con gusto! Estoy aquí para ayudarte.",

    "adios":"¡Hasta luego! Gracias por visitar ITRH Assistant.",

    "hasta luego":"¡Hasta pronto! Que tengas un excelente día."


};

function horaActual() {

    const ahora = new Date();

    return ahora.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
    });

}

function agregarMensaje(texto, tipo) {

    const mensaje = document.createElement("div");

    mensaje.classList.add("mensaje", tipo);

    mensaje.innerHTML = `
        <div class="avatar">
            ${tipo === "bot" ? "AI" : "TÚ"}
        </div>

        <div class="contenido">
            ${texto}
            <br><br>
            <small>${horaActual()}</small>
        </div>
    `;

    chatBox.appendChild(mensaje);

    chatBox.scrollTop = chatBox.scrollHeight;
}

function obtenerRespuesta(texto) {

    texto = texto.toLowerCase();

    for (let clave in respuestas) {

        if (texto.includes(clave)) {

            return respuestas[clave];

        }

    }

    return "Lo siento, no encontré información sobre esa consulta, visita inteligencia artificial mas avanzada yo estoy para resolver tus dudas y problemas tecnologicos.";
}

function mostrarEscribiendo() {

    const typing = document.createElement("div");

    typing.classList.add("mensaje", "bot");

    typing.id = "typing";

    typing.innerHTML = `
        <div class="avatar">AI</div>

        <div class="contenido">
            Escribiendo...
        </div>
    `;

    chatBox.appendChild(typing);

    chatBox.scrollTop = chatBox.scrollHeight;
}

function quitarEscribiendo() {

    const typing = document.getElementById("typing");

    if (typing) {

        typing.remove();

    }

}

function responderPregunta(pregunta) {

    agregarMensaje(pregunta, "usuario");

    mostrarEscribiendo();

    const respuesta = obtenerRespuesta(pregunta);

    setTimeout(() => {

        quitarEscribiendo();

        agregarMensaje(respuesta, "bot");

    }, 1000);

}

sendBtn.addEventListener("click", () => {

    const pregunta = input.value.trim();

    if (pregunta === "") return;

    responderPregunta(pregunta);

    input.value = "";

});

input.addEventListener("keypress", (e) => {

    if (e.key === "Enter") {

        sendBtn.click();

    }

});

botonesRapidos.forEach(boton => {

    boton.addEventListener("click", () => {

        responderPregunta(boton.textContent);

    });

});