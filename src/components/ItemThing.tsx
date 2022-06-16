import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AiFillDelete, AiFillEdit, AiOutlineCheck } from "react-icons/ai";
import { thingsProps } from "../types/todoTypes";

export default function ItemThing({ text, id }: thingsProps) {
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);
  const [editValue, setEditValue] = useState<string>("")

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setToggle(!toggle);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditValue(e.target.value)
  }

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch({
      type: "DELTHING",
      payload: id,
    });
  };

  const handleEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if(editValue !== "") {
      dispatch({
        type: "EDITTHING",
        payload: {
          text: editValue,
          id: id
        }
      })
      setEditValue("")
      setToggle(!toggle)
    }
  };

  return (
    <article className="flex items-center justify-between p-2 border mb-2 hover:bg-zinc-100">
      {toggle ? (
        <form className="flex">
          <input
          value={editValue}
          onChange={(e) => handleInput(e)}
            className="p-2 border border-zinc-400 h-10 outline-none"
            type="text"
            placeholder={text}
          />
          <button 
          onClick={(e) => handleEdit(e)}
          className="flex items-center justify-center transition-all w-10 h-10 bg-emerald-300 border border-emerald-500 hover:bg-emerald-400"
          type="submit"><AiOutlineCheck /></button>
        </form>
      ) : (
        <p>{text}</p>
      )}
      <div className="flex space-x-2">
        <button
          onClick={(e) => handleToggle(e)}
          className="transition-all w-10 h-10 bg-orange-200 hover:bg-orange-500 hover:text-white flex justify-center items-center rounded-lg"
        >
          <AiFillEdit />
        </button>
        <button
          onClick={(e) => handleDelete(e)}
          className="transition-all w-10 h-10 bg-red-200 hover:bg-red-500 hover:text-white flex justify-center items-center rounded-lg"
        >
          <AiFillDelete />
        </button>
      </div>
    </article>
  );
}
