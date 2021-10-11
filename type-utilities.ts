type ToDo = {
  title: string;
  description: string;
  completed: boolean;
}

const todo: Readonly<ToDo> = {
  title: "Assistir Dark novamente",
  description: "Relembrar os detalhes",
  completed: false,
};

console.log(todo);

//todo.completed = true;
function updateToDo(todo: ToDo, fieldsToUpdate:Partial<ToDo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo2: ToDo = updateToDo(todo, {completed:true});

console.log(todo2);

// Pick
type ToDoPreview = Pick<ToDo, "title" | "completed">

const todo3: ToDoPreview = {
  title: "Fechar Ghost of Tsushima",
  completed: false,
};

console.log(todo3);

// Omit
type ToDoPreview2 = Omit<ToDo, "description">

const todo4: ToDoPreview = {
  title: "Fechar Ghost of Tsushima",
  completed: false,
};

console.log(todo4);