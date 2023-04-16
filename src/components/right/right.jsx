import React, { useState } from 'react'
import './right.scss'

const Right = () => {
    const [inpt, setInpt] = useState('')
    const [todos, setTodos] = useState([

    ])
    const AddTodo = () => {

        const newTodos = [...todos, { taskName: inpt }]

        setTodos(newTodos)

    }

    return (
        <div className='right'>
            <div className="button">
                <img src="./imgs/full.svg" alt="" />
                <img src="./imgs/tab.svg" alt="" />
                <img src="./imgs/close.svg" alt="" />
            </div>
            <div className="chat">
                <div className="yazi">
                    <h1>Chats</h1>
                </div>
                <div className="sohbet">
                    <div className="sohbe">
                        <div className="yyazi">
                            <img src="./imgs/kisi.svg" alt="" />
                            <h1>Courtney</h1>
                        </div>
                        <h1>The product design process has experienced huge leaps in evolution over the last few years.</h1>
                    </div>
                    <div className="sohbe">
                        <div className="yyazi">
                            <img src="./imgs/cavan.svg" alt="" />
                            <h1>Marjorie</h1>
                        </div>
                        <h1>There are various product design processes and many focus on different aspects.</h1>
                    </div>
                    <div className="sohbe">
                        <div className="yyazi">
                            <img src="./imgs/lebron.svg" alt="" />
                            <h1>大神</h1>
                        </div>
                        <h1>A design specification is a detailed document providing a list of points regarding a product or process.</h1>
                    </div>
                    <div className="sohbe">
                        <div className="yyazi">
                            <img src="./imgs/ozlem.svg" alt="" />
                            <h1>UI</h1>
                        </div>
                        <h1>A design specification is a detailed document providing a list of points regarding a product or process.</h1>
                    </div>
                    
                    {
                        todos.map(todo => {
                            return (
                                <div className="sohbe">
                                    <div className="yyazi">
                                        <img src="./imgs/Zahid.png" alt="" />
                                        <h1>Zahid</h1>
                                    </div>
                                    <h1>{todo.taskName}</h1>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="input">
                    <div className="inat">
                        <input onChange={(e) => setInpt(e.target.value)} type="text" />
                        <button onClick={AddTodo}><img src="./imgs/right.svg" alt="" /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Right