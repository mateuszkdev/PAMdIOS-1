const tripCosts = [
  { label: "nocleg", amount: 420, paidBy: "Anna" },
  { label: "paliwo", amount: 260, paidBy: "Piotr" },
  { label: "jedzenie", amount: 180, paidBy: "Anna" },
  { label: "bilety", amount: 140, paidBy: "Ola" }
]

const totalCost = tripCosts.reduce((total, cost) => total + cost.amount, 0)
const costPerPerson = totalCost / (new Set(tripCosts.map(cost => cost.paidBy)).size)

const paidByPerson = []
tripCosts.forEach(x => paidByPerson[x.paidBy] = (paidByPerson[x.paidBy] || 0) + x.amount)

const highestPayer = Object.keys(paidByPerson).reduce((a, b) => paidByPerson[a] > paidByPerson[b] ? a : b)

const equalization = Object.keys(paidByPerson).map(person => {
  return { person, difference: costPerPerson - paidByPerson[person] }
})

console.log(`
    Całkowity koszt podróży: ${totalCost} zł
    Koszt na osobę: ${costPerPerson.toFixed(2)} zł
    Osoba, która zapłaciła najwięcej: ${highestPayer} (${paidByPerson[highestPayer]} zł)
    \nRóżnica do wyrównania dla każdej osoby:
`)
equalization.forEach(({ person, difference }) => {
  console.log(`${person}: ${difference > 0 ? `powinna dopłacić ${difference.toFixed(2)} zł` : `powinna otrzymać ${-difference.toFixed(2)} zł`}`)
})