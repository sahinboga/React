import React from 'react'

export default function Header() {
    return (
        <div>
            <header className="header">
                <h1>todos</h1>
                <form>
                    <input className="new-todo" placeholder="What needs to be done?" autofocus />
                </form>
            </header>
        </div>
    )
}
