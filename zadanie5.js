const tasks = ["zajęcia", "zakupy", "trening"]

const tasksFormater = (tasks) => tasks.map((task, index) => `${index + 1}. ${task}`).join("\n")

const createDayPlan = (name, tasks = ["praca", "obiad", "oglądanie meczu"]) => {

    return `\nPlan dnia ${name}:\n${tasksFormater(tasks)}`

}

console.log(`
    ${createDayPlan("Michał", tasks)}
    ${createDayPlan("Ania")}
    ${createDayPlan("Kasia", ["zajęcia", "obiad", "kino"])}
`)