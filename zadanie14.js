let todos = [
  { id: 1, title: "Oddać projekt", done: false, priority: "high" },
  { id: 2, title: "Przeczytać rozdział", done: true, priority: "low" },
  { id: 3, title: "Przygotować prezentację", done: false, priority: "medium" }
]

const add = (list, title, priority) => {
  return [...list, {
    id: list.length + 1,
    title, priority,
    done: false,
  }]
}

const markAsDone = (list, id) => {
  return list.map(todo =>
    todo.id === id ? { ...todo, done: true } : todo
  )
}

const getUndone = list => list.filter(todo => !todo.done)

const getByPriority = (list, priority) => list.filter(todo => todo.priority === priority)

const todosAfterAdd = add(todos, "Napisać raport", "high");
console.log("Po dodaniu zadania:", todosAfterAdd);

const todosAfterDone = markAsDone(todosAfterAdd, 1);
console.log("Po oznaczeniu zadania jako wykonane:", todosAfterDone);

const undoneTodos = getUndone(todosAfterDone);
console.log("Niewykonane zadania:", undoneTodos);

const highPriority = getByPriority(todosAfterDone, "high");
console.log("Zadania o wysokim priorytecie:", highPriority);

console.log("Oryginalna lista:");
console.log(todos);