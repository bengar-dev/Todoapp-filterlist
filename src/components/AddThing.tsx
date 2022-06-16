import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import {v4 as uuidv4} from 'uuid'

export default function AddThing() {

  const dispatch = useDispatch()
  const [inputTodo, setInputTodo] = useState<string>('')

  const {todoList} = useSelector((state:any) => (
    {
      ...state.todoReducer
    }
  ))

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTodo(e.target.value)
  }

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    dispatch({
      type: "ADDTHING",
      payload: {
        text: inputTodo,
        id: uuidv4()
      }
    })
    setInputTodo('')
  }

  return (
    <form className="w-11/12 lg:w-7/12 bg-white p-4 rounded shadow">
        <input 
        value={inputTodo}
        onChange={(e) => handleChange(e)}
        type="text" name="addthing" id="addthing"
        className="border border-black w-full rounded p-2 outline-none" />
        <button 
        onClick={(e) => handleSubmit(e)}
        className="transition-all duration-500 mt-2 w-full bg-cyan-400 hover:bg-rose-400 rounded p-2">
            Submit
        </button>
    </form>
  )
}
