const contacts = [
  { name: "Anna Nowak", phone: "500-100-200", city: "Katowice", favorite: true },
  { name: "Piotr Lis", phone: "501-300-700", city: "Sosnowiec", favorite: false },
  { name: "Ola Marek", phone: "502-400-900", city: "Katowice", favorite: true }
]

const searchByCity = (contacts, city) => contacts.filter(contact => contact.city === city)
const returnFavorites = (contacts) => contacts.filter(contact => contact.favorite)
const formatContacts = (contacts) => contacts.map(contact => `${contact.name} - ${contact.phone}`)

const searchByName = (contacts, name) => contacts.filter(contact => contact.name.toLowerCase().includes(name.toLowerCase()))

console.log(searchByCity(contacts, "Katowice"))
console.log(returnFavorites(contacts))
console.log(formatContacts(contacts))
console.log(searchByName(contacts, "Piotr"))