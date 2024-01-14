"use client"
import React, { useState } from "react"
import style from "./page.module.css"
import { IoMdCloseCircleOutline } from "react-icons/io";

export default function Home() {

  const [input, setInput] = useState({ name: "", id: "" });
  const [todolist, setTodolist] = useState([]);

  const addFunc = () => {
    if (input.name !== "") {
      setTodolist([...todolist, input])
      setInput({ name: "" });
    }
    else {
      alert("Boş bırakamazsınız...")
    }
  }

  const deleteItemFunc = (id) => {
    setTodolist(todolist.filter(listitem => listitem.id !== id));
  }

  console.log("todolist", todolist)

  return (
    <div className={style.container}>
      <div className={style.todoCard}>
        <h1 style={{ color: "white" }}>TODO LIST</h1>

        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "15px", width: "100%", marginTop: "20px", marginBottom: "20px" }}>
          <input value={input.name} type="text" placeholder="Yapılacak bir şey yazınız..." style={{ outline: "none", paddingLeft: "15px", border: "none", borderRadius: "3px", height: "30px", flex: "2", }}
            onChange={(e) => setInput({ name: e.target.value, id: Math.random() * 100 })} />
          <button style={{ border: "none", borderRadius: "3px", height: "30px", flex: "1", backgroundColor: "green" }} onClick={addFunc}>ADD</button>
        </div>



        <div style={{ width: "100%", textAlign: "center" }}>

          {
            todolist.length == 0 ?
              <p style={{ color: "white" }}>Henüz listeniz boş</p>

              :
              todolist.map((item, index) => {
                return (
                  <div key={index} style={{ marginBottom: "20px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", backgroundColor: "white", padding: "10px 20px", width: "100%" }}>
                      <p style={{ textAlign: "center", fontSize: "20px" }}>{item.name}</p>
                      <IoMdCloseCircleOutline size={20} onClick={() => deleteItemFunc(item.id)} />
                    </div>
                  </div>
                )
              })
          }


        </div>
      </div>
    </div >
  )
}
