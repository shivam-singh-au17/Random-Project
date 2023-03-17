import {useState, React } from 'react'

export default function Todo() {
    const [text, setText] = useState("")
    const [todoList, setTodoList] = useState("")
    return (
        <div>
            <input type="text" />
            <button>Add TODO</button>
            {todoList.map(e => <div> {e.tittel}</div>)}
        </div>
    )
}

// json-server db.json --port 3001 --watch
