// Define la fecha de tu regreso (año, mes - 1, día, hora, minuto, segundo)
const returnDate = new Date(2025, 5, 8, 16, 10, 0); // Ejemplo: 15 de mayo de 2024 a las 18:00

// Frases motivacionales
const motivationalPhrases = [
    "Ya mismo estamo comiendo valdi otra vez.",
    "Cuando vuelva ya vas a ser socorrista y todo.",
    "Esto pasa volao niña.",
    "Ya veras el veranazo que vamos a echar.",
    "Cuando vuelva te vas a dar cuenta lo tranquila que estabas sin mi."
];

function updateCountdown() {
    const now = new Date();
    const timeDifference = returnDate - now;

    // Cálculos para días, horas, minutos y segundos
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Cálculos adicionales
    const weeks = Math.floor(days / 7);
    const weekends = Math.floor(days / 7) * 2; // Aproximación de fines de semana
    const sleepHours = days * 8; // Suponiendo 8 horas de sueño por día

    // Actualiza el HTML con los valores calculados
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
    document.getElementById('weeks').textContent = weeks;
    document.getElementById('weekends').textContent = weekends;
    document.getElementById('sleep-hours').textContent = sleepHours;

    // Cambia la frase motivacional cada 5 segundos
    const phraseElement = document.getElementById('motivational-phrase');
    const randomPhrase = motivationalPhrases[Math.floor(Math.random() * motivationalPhrases.length)];
    phraseElement.textContent = randomPhrase;

    // Si la fecha ya pasó, muestra un mensaje
    if (timeDifference < 0) {
        clearInterval(interval);
        document.getElementById('countdown').innerHTML = "<h2>¡Ya estamos juntos de nuevo!</h2>";
        document.getElementById('motivational-phrase').textContent = "¡Finalmente estamos juntos!";
    }
}

// Actualiza el contador cada segundo
const interval = setInterval(updateCountdown, 1000);

// Ejecuta la función una vez al cargar la página
updateCountdown();