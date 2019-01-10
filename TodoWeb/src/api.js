import axios from 'axios';

async function fetchTodos() {
  const res = await axios.get('http://localhost:3000/todos');
  return res.data.slice(0, 10)
                 .map((todo) => ({id: todo.id, text: todo.title, completed: todo.completed}));
}

/**
 *
 * @param {object} todo
 * @param {string} todo.text
 * @param {boolean} todo.completed
 */
async function postTodo(todo) {
  const data = {
    title: todo.text,
    completed: todo.completed,
  };

  const res = await axios.post('http://localhost:3000/todos', data);
  return {
    text: res.data.title,
    // ...res.data,
    id: res.data.id,
    completed: res.data.completed,
  };
}

/**
 *
 * @param {number} id
 */
async function deleteTodoById(id) {
  await axios.delete(`http://localhost:3000/todos/${id}`);
}

// 2 nouvelles requetes
// Ajouter :
// POST /todos
// {
//   "title": "A ajouter",
//   "completed": false
// }

// REPONSE (status 201)
// => { "id": 2, "title": "A ajouter", "completed": false}
//

// Supprimer
// DELETE /todos/2
// REPONSE (status 200 ou 204)

export {
  fetchTodos,
  postTodo,
  deleteTodoById,
};
