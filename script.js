const messages = [
    "Why..",
    "Are u sure cucu??",
    "Are u really sure..?",
    "CUCU PLEASE...",
    "THINK ABT IT..!",
    "If you say no, I will be very sad...",
    "Very very sad...",
    ":c",
    "alright then, I will stop asking...",
    "NOOO IM JS KIDDING!, SAY YES PLEASE!<3"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}