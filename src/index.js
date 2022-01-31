const messages = [
    "Joaquin",
    "Arturo",
    "Ana",
    "Jessica",
    "Diego",
    "Laura",
    "Freddy",
    "Carolina",
    "Paulina"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
}

module.exports = {randomMsg};