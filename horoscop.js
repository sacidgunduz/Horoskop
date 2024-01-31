
function findHoroscope() {
    const day = document.getElementById("day");
    const month = document.getElementById("month");
    const resultat = document.getElementById("resultat");
    let inputTag = parseInt(day.value);
    let inputMonat = parseInt(month.value);
    let Sternzeichen = "";
    if (inputTag >= 21 && inputMonat == 1 || inputTag <= 19 && inputMonat == 2) {
        Sternzeichen = "Wassermann";
    } else if (inputTag >= 20 && inputMonat == 2 || inputTag <= 20 && inputMonat == 3) {
        Sternzeichen = "Fisch";
    } else if (inputTag >= 21 && inputMonat == 3 || inputTag <= 20 && inputMonat == 4) {
        Sternzeichen = "Widder";
    } else if (inputTag >= 21 && inputMonat == 4 || inputTag <= 20 && inputMonat == 5) {
        Sternzeichen = "Stier";
    } else if (inputTag >= 22 && inputMonat == 5 || inputTag <= 21 && inputMonat == 6) {
        Sternzeichen = "Zwillinge";
    } else if (inputTag >= 22 && inputMonat == 6 || inputTag <= 22 && inputMonat == 7) {
        Sternzeichen = "Krebs";
    } else if (inputTag >= 23 && inputMonat == 7 || inputTag <= 23 && inputMonat == 8) {
        Sternzeichen = "Löwe";
    } else if (inputTag >= 24 && inputMonat == 8 || inputTag <= 23 && inputMonat == 9) {
        Sternzeichen = "Jungfrau";
    } else if (inputTag >= 24 && inputMonat == 9 || inputTag <= 23 && inputMonat == 10) {
        Sternzeichen = "Waage";
    } else if (inputTag >= 24 && inputMonat == 10 || inputTag <= 22 && inputMonat == 11) {
        Sternzeichen = "Skorpion";
    } else if (inputTag >= 23 && inputMonat == 11 || inputTag <= 21 && inputMonat == 12) {
        Sternzeichen = "Schütze";
    } else if (inputTag >= 22 && inputMonat == 12 || inputTag <= 20 && inputMonat == 1) {
        Sternzeichen = "Steinbock";
    }
    resultat.textContent = "Dein Horoskop ist " + Sternzeichen;
}
document.getElementById("button").addEventListener("click", findHoroscope);







