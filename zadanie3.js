const shoppingList = [
  { name: "chleb", quantity: 2, urgent: true },
  { name: "mleko", quantity: 1, urgent: false },
  { name: "jajka", quantity: 10, urgent: true },
  { name: "makaron", quantity: 3, urgent: false }
]

console.log("=== Wszystkie produkty ===");
shoppingList.forEach(item => {
    console.log(`- ${item.name} (ilość: ${item.quantity})`)
})

const urgentItems = shoppingList.filter(item => item.urgent)

console.log(`\n=== Produkty pilne: ${urgentItems.length} ===`)
urgentItems.forEach(item => console.log(`- ${item.name}`))

console.log(`\n=== Wszystkie nazwy (wielkie litery) ===`)
console.log(shoppingList.map(item => item.name.toUpperCase()).join(", "))

console.log(`\nCałkowita ilość jednostek produktów pilnych: ${urgentItems.reduce((sum, item) => sum + item.quantity, 0)}`)