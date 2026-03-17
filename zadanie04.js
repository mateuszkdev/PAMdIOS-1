const hasLaptop = true;
const hasCharger = false;
const hasNotebook = true;
const dayType = "laboratorium";

const isReady = hasLaptop && hasNotebook;
const message = isReady ? "Gotowy na zajęcia!" : "Nie jesteś gotowy!";

if (hasLaptop && hasCharger && hasNotebook) console.log("Gotowy na zajęcia")
else console.log("Nie gotowy na zajęcia")

!hasCharger && console.log("Uwaga: Brakuje Ci ładowarki!");

if (dayType === "laboratorium") {
    console.log("Pamiętaj laboratorium wymaga laptopa i ładowarki!");
    if (!hasCharger) {
        console.log("Brakuje ładowarki!");
    }
} else if (dayType === "wykład") {
    console.log("Na wykład wystarczy notatnik.");
}