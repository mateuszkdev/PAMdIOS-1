const cart = [
    { name: "Chleb", price: 4.5, quantity: 2 },
    { name: "Ser", price: 9.9, quantity: 1 },
    { name: "Sok", price: 6.2, quantity: 3 }
]

const discountThreshold = 30
const discountPercent = 10

const formatCurrency = (value) => value.toFixed(2)

const itemTotals = cart.map(item => ({
    ...item,
    total: item.price * item.quantity
}))

const itemDescriptions = itemTotals.map(item => `${item.quantity} × ${item.name}`)

const cartTotal = itemTotals.reduce((sum, item) => sum + item.total, 0)

const mostExpensiveItem = itemTotals.reduce((best, item) => item.total > best.total ? item : best, itemTotals[0]);

const hasDiscount = cartTotal > discountThreshold;
const discountAmount = hasDiscount ? (cartTotal * discountPercent) / 100 : 0;
const totalAfterDiscount = cartTotal - discountAmount;

console.log(`
    Pozycje w koszyku: ${itemDescriptions.join(", ")}
    Suma przed rabatem: ${formatCurrency(cartTotal)} ${hasDiscount ? `| Rabat ${discountPercent}%: -${formatCurrency(discountAmount)}
    Suma po rabacie: ${formatCurrency(totalAfterDiscount)}` : "Brak rabatu (nie przekroczono progu)."}
    Najdroższa pozycja: ${mostExpensiveItem.name} (${formatCurrency(mostExpensiveItem.total)})    
`)