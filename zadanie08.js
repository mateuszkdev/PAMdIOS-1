const grades = [3.0, 4.0, 5.0, 3.5, 4.5]

const calcAverage = grades => grades.reduce((sum, grade) => sum + grade, 0) / grades.length
const PASS = 3

const calculateGrades = grades => {

    const average = calcAverage(grades)
    let rating = ''

    switch (average) {
        case 5: case 4:
            rating = 'Bardzo dobry'
            break
        case 3.5: case 3:
            rating = 'Dobry'
            break
        default:
            rating = 'Dostateczny'
    }
    
    return {
        average, rating,
        status: calcAverage(grades) >= PASS ? 'Zaliczone' : 'Niezaliczone',
    }

}

console.log(calculateGrades(grades))