const repairs = [
    { id: 1, client: "Anna", device: "laptop", status: "nowe" },
    { id: 2, client: "Piotr", device: "telefon", status: "w trakcie" },
    { id: 3, client: "Ola", device: "tablet", status: "zakończone" }
]

const findById = id => repairs.find(repair => repair.id === id)
console.log(`Znalezione zgłoszenie o id 2: ${JSON.stringify(findById(2))}`)

const updatedRepairs = repairs.map(repair => repair.id === 2 ? { ...repair, status: "zakończone" } : repair)

console.log(`Liczba zgłoszeń w trakcie: ${repairs.filter(repair => repair.status === "w trakcie").length}`)

console.log("Oryginalna tablica:", repairs)
console.log("Zaktualizowana tablica:", updatedRepairs)