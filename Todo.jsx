import './Todo.css'

function Todo({ title }) {
    function deleteTodo(id) {
        console.log('delete.Todo()', title)
    }

    return ( 
        <div className="todo">
        <h2>{ title }</h2>
        <button onClick={() => deleteTodo(1)} >Delete</button>
      </div>
    )
}

export default Todo;