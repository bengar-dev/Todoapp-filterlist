import { actionProps, todoListProps, thingsProps } from "../../types/todoTypes";

const INITIAL_STATE = {
  todoList: [],
  filterList: []
};

function todoReducer(
  state = INITIAL_STATE,
  action: actionProps
) {
  switch (action.type) {

    case "GETLIST": {
      const newArray: any [] = [...state.todoList]

      return {
        ...state,
        filterList: newArray
      }
    }

    case "ADDTHING": {
      const newArray: any [] = [...state.todoList];
      newArray.unshift(action.payload)
      return {
        ...state,
        todoList: newArray,
      };
    }

    case "DELTHING": {
      const newArray: any [] = [...state.todoList]
      const findIndex = newArray.findIndex(p => p.id === action.payload)
      if(findIndex !== -1) {
        newArray.splice(findIndex, 1)
      }
      return {
        ...state,
        todoList: newArray
      }
    }

    case "FILTERLIST": {
      const newArray: any [] = [...state.todoList]
      const filterArray = newArray.filter(p => p.text.includes(action.payload))
      return {
        ...state,
        filterList: filterArray
      }
    }

    case "EDITTHING": {
      const newArray: any[] = [...state.todoList]
      const findIndex = newArray.findIndex(p => p.id === action.payload.id)
      newArray[findIndex] = {
        text: action.payload.text,
        id: action.payload.id
      }
      return {
        ...state,
        todoList: newArray
      }
    }
  }

  return state;
}

export default todoReducer;
