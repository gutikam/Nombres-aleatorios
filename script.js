const firstNames = ["Carlos", "María", "Juan", "Ana", "Luis", "Sofía", "Miguel", "Lucía", "Pedro", "Marta"];
const lastNames = ["García", "Rodríguez", "Martínez", "Hernández", "López", "González", "Pérez", "Sánchez", "Ramírez", "Torres"];

const btn = document.getElementById("generate-btn");

btn.addEventListener("click", function(){
    const nameDisplay = document.getElementById("name-display");
    nameDisplay.textContent = generateRandomNames();
})

function generateRandomNames() {
    const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    return `${randomFirstName} ${randomLastName}`
}
