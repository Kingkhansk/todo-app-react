import { useState, useEffect } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

function App() {
  const [todo, setTodo] = useState('');
  // const [todos, setTodos] = useState([]);
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todos')) || [] // Load initial todos from localStorage
  );
  const [selectedValue, setSelectedValue] = useState('incomplete');
  useEffect(() => {
    // Save todos to localStorage whenever the state changes
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]); // Only run when todos change
  const handleChange = (e) => {
    setTodo(e.target.value)
  }
  const handleAdd = (e) => {
    e.preventDefault(); // prevent page refres
    //todo is new key with value of todo means {todo:todo} write todo due ot same name
    if (todo.trim()) { // Ignore empty input
      setTodos([...todos, { id: Date.now(), todo, isCompleted: false }]);
      setTodo('');
    }

  }
  const handleSelect = (e) => {
    const value = e.target.value;
    setSelectedValue(value);
  }
  const handleCheckbox = (e) => {
    // Get the id and the checked value of the checkbox
    const id = e.target.name;
    const checked = e.target.checked;

    // Find the index of the item that matches the id
    const index = todos.findIndex(item => item.id == id);

    // Create a copy of the todos array using the spread operator
    const newTodos = [...todos];

    // Toggle the isCompleted property of the item at that index
    if (index !== -1) { // Ensure item exists
      newTodos[index].isCompleted = checked;
      setTodos(newTodos);
    }

  }
  const handleDelete = (e, id) => {
    // const id = e.target.id;
    const newTodos = [...todos.filter(item => item.id != id)];
    setTodos(newTodos)
  }
  const handleEdit = (e, id) => {
    const existingTodo = todos.find((item) => item.id === id);

    if (existingTodo) { // Ensure item exists
      setTodo(existingTodo.todo);
      const newTodos = todos.filter((item) => item.id !== id);
      setTodos(newTodos);
    }

  }
  return (
    <>
      <NavBar />
      <section className='container mx-auto text-center mt-2'>
        <h1 className='text-lg font-bold'>Add A Todo</h1>
        <form onSubmit={handleAdd}>
          <div className='sm:flex max-sm:mx-2'>
            <input type="text" onChange={handleChange} value={todo} className='sm:mx-2 px-1 my-1 w-full border border-gray-300 rounded-sm' required />
            <button className='bg-purple-700 px-2 py-1 text-white rounded hover:bg-purple-950'>
              Add
            </button>
          </div>
        </form>
        <div className="flex justify-between border border-b-purple-400">
          <span className='font-semibold max-sm:ps-2'>All Todos</span>
          <select className='text-right pr-1 max-sm:mr-1' onChange={handleSelect} value={selectedValue}>
            <option value="all">Show All</option>
            <option value="completed">Show Completed</option>
            <option value="incomplete">Show Incomplete</option>
          </select>
        </div>
        {todos.filter((item) => (
          selectedValue === 'all' ||
          (selectedValue === 'completed' && item.isCompleted) ||
          (selectedValue === 'incomplete' && !item.isCompleted)
        )).map((item) => (

          <div key={item.id} className='flex justify-between my-1 m-auto mx-2'>
            <input type="checkbox" name={item.id} checked={item.isCompleted} value={item.isCompleted} onChange={handleCheckbox} />
            <div className={item.isCompleted ? 'line-through' : undefined} >
              <span>{item.todo}</span>
            </div>
            <div className='flex items-center'>
              <button onClick={(e) => handleEdit(e, item.id)} className='bg-purple-700 px-2 py-1 text-white rounded hover:bg-purple-950 mx-2'>
                <FaRegEdit />
              </button>
              {/* <button onClick={handleDelete} id={item.id} className='bg-purple-700 px-2 py-1 text-white rounded hover:bg-purple-950'>
                <MdDeleteOutline />
              </button> */}
              {/* we can also pass id like that */}
              <button onClick={(e) => handleDelete(e, item.id)} className='bg-purple-700 px-2 py-1 text-white rounded hover:bg-purple-950'>
                <MdDeleteOutline />
              </button>
            </div>

          </div>
        ))}
        {todos.filter((item) => (
          selectedValue === 'all' ||
          (selectedValue === 'completed' && item.isCompleted) ||
          (selectedValue === 'incomplete' && !item.isCompleted)
        )).length === 0 && (
          <div className='bg-red-300 sm:w-1/4 m-auto mt-1'>No todos to display</div>
        )}
      </section>
    </>
  )
}

export default App
