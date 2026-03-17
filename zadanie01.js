const user = {
  firstName: "Jan",
  lastName: "Kowalski",
  city: "Katowice",
  age: 21,
  fieldOfStudy: "informatyka"
}

console.log(`${user.firstName} ${user.lastName}`)

console.log(`${user.firstName} mieszka w mieście ${user.city} i studiuje ${user.fieldOfStudy}.`)

console.log(user.age >= 18 ? `${user.firstName} jest pełnoletni/a.` : `${user.firstName} nie jest jeszcze pełnoletni/a.`)

user.favoriteLanguage = "JavaScript"

console.log(`Ulubiony język programowania ${user.firstName} to ${user.favoriteLanguage}.`)


user.isStudent = true
user.semester = 5

const getStudentStatus = ({ isStudent, semester, firstName }) => {

    if (isStudent) return `${firstName} jest na ${Math.ceil(semester / 2)} roku studiów.`
    else return `${firstName} nie studiuje.`
};

console.log(getStudentStatus(user))