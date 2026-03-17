const expenses = [18.5, 42, 9.99, 27, 61.3, 15, 33.5]

const sum = expenses.reduce((acc, exp) => acc + exp, 0)
const average = sum / expenses.length
const max = Math.max(...expenses)
const min = Math.min(...expenses)

// Dodatkowa własna cecha: kategorizacja wydatków
const categorizeExpense = (amount) => {
    if (amount < 15) return "Niski"
    if (amount < 35) return "Średni"
    return "Wysoki"
}

const categorized = expenses.map(exp => ({
    amount: exp,
    category: categorizeExpense(exp)
}))

console.log(`
    === RAPORT BUDŻETU ===
    Suma wydatków: ${sum.toFixed(2)} PLN
    Średni wydatek: ${average.toFixed(2)} PLN
    Maksymalny wydatek: ${max.toFixed(2)} PLN
    Minimalny wydatek: ${min.toFixed(2)} PLN
    Kategoryzacja wydatków:
`)
categorized.forEach(item => {
    console.log(`\t ${item.amount} PLN - ${item.category}`)
})