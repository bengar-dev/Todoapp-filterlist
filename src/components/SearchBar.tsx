import React from "react"
import { useDispatch } from "react-redux"

export default function SearchBar() {

  const dispatch = useDispatch()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.value.length > 1) {
      dispatch({
        type: "FILTERLIST",
        payload: e.target.value
      })
    }
    else if(e.target.value.length === 0) {
      dispatch({
        type: "GETLIST",
        payload: 1
      })
    }
  }

  return (
    <form className="flex justify-center w-full">
        <input 
        onChange={(e) => handleChange(e)}
        type="search" id="search" name="search" 
        placeholder='Search things...'
        className="w-full p-2 outline-none border-2 border-rose-500" />
    </form>
  )
}
