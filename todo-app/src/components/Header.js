import React, { useState } from 'react'

const initialValues={id:0,todoText:"",isCompleted:false}
export default function Header({addTodo,todos}) {
    const [item, setItem] = useState(initialValues)
    const [itemId, setItemId] = useState(0)

    const handleChange=(e)=>{
        setItem({...item,todoText:e.target.value,id:itemId,isCompleted:false})
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(item.todoText===""){
            return false
        }
        addTodo([...todos,item])
        setItemId(item.id+1)
        setItem(initialValues)
        console.log(item)
    }
    return (
        <div>
            <header className="header">
                <h1>todos</h1>
                <form onSubmit={handleSubmit}>
                    <input className="new-todo" name='todoText' value={item.todoText} placeholder="What needs to be done?"  onChange={handleChange}/>
                </form>
            </header>
        </div>
    )
}
