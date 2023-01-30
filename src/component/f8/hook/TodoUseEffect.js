import React, { useState } from 'react'

export default function TodoUseEffect() {
    const [works, setWorks] = useState([]);
    const [newWork, setNewWork] = useState("");
  return (
    <div>
        <input value={newWork} onChange={(e) => {setNewWork(e.target.value)}}></input>
        <button onClick={() => {
            setWorks( prevwork => {
                const newWorks = [...prevwork, newWork]
                return newWorks
            })
            setNewWork("")
        }}>Add</button>

        <ul>
            {works.map((work, index) => {
                return (
                    <li key={index}>
                        {work}
                    </li>
                )
            })}
        </ul>
    </div>
  )
}
