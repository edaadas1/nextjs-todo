"use client"
import React, { useState } from "react"
import style from "./page.module.css"

export default function Home() {

  const [input, setInput] = useState("");
  const [todolist, setTodolist] = useState([]);

  const addFunc = () => {
    setTodolist([...todolist, input])
    setInput("");
  }

  return (
    <div className={style.container}>
      <div className={style.todoCard}>
        <h1>TODO LIST</h1>

        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "5px", width: "100%" }}>
          <input value={input} type="text" placeholder="Yapılacak bir şey yazınız..." style={{ outline: "none", border: "none", borderRadius: "3px", height: "30px", flex: "2", }}
            onChange={(e) => setInput(e.target.value)} />
          <button style={{ border: "none", borderRadius: "3px", height: "30px", flex: "1", }} onClick={addFunc}>ADD</button>
        </div>

        <div>
          {todolist.map((item, index) => {
            return (
              <div key={index}>
                <p style={{ textAlign: "center" }}>{item}</p>
              </div>
            )
          })}

        </div>
      </div>
    </div>
  )
}
