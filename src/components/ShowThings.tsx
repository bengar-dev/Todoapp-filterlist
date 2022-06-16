import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { thingsProps } from "../types/todoTypes";

import ItemThing from "./ItemThing";

export default function ShowThings() {

  const dispatch = useDispatch()
  const {todoList, filterList} = useSelector((state:any) => (
    {
      ...state.todoReducer
    }
  ))

  useEffect(() => {

    dispatch({
      type: "GETLIST",
      payload: 1
    })

  }, [todoList])

  return (
    <div className="bg-white w-11/12 lg:w-7/12 rounded p-4 shadow">
        {filterList.map((el: thingsProps) => 
          <ItemThing key={el.id} text={el.text} id={el.id} />
          )}
    </div>
  )
}
