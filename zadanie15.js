const schedule = [
  { day: "poniedziałek", subject: "Programowanie", room: "A12", online: false, teacher: "Jan Kowalski" },
  { day: "wtorek", subject: "Bazy danych", room: "online", online: true, teacher: "Anna Nowak" },
  { day: "czwartek", subject: "Grafika", room: "B03", online: false, teacher: " Paweł Wiśniewski" },
  { day: "piątek", subject: "UX", room: "online", online: true, teacher: "Anna Nowak" }
]

const getClassByDay = (plan, day) => plan.filter(item => item.day === day).map(e => e.subject).join(", ")
const formatClasses = classes => classes.map(e => `${e.subject} (${e.online ? "online" : `stacjonarne, sala: ${e.room}`})`)
const countClasses = classes => classes.length
const searchByTeacher = (plan, teacher) => plan.filter(item => item.teacher === teacher)

console.log(`
    Zajęcia w poniedziałek: ${getClassByDay(schedule, "poniedziałek")}\n
    Sformatowane zajęcia: ${formatClasses(schedule).join(", ")}
    Liczba zajęć: ${countClasses(schedule)}\n
    Zajęcia prowadzone przez Annę Nowak: ${searchByTeacher(schedule, "Anna Nowak").map(e => e.subject).join(", ")}
`)
