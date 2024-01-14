import React from "react"
import style from "./page.module.css"

export default function Home() {
  return (
    <div className={style.container}>
      <div className={style.todoCard}>
        <h1>TODO LIST</h1>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "5px", width: "100%" }}>
          <input type="text" style={{ border: "none", borderRadius: "3px", height: "30px", flex: "2", }} />
          <button style={{ border: "none", borderRadius: "3px", height: "30px", flex: "1", }}>Add</button>
        </div>
      </div>
    </div>
  )
}
