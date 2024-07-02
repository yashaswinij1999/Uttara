import { createContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

export const todoContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [
        ...state,
        { id: uuidv4(), todo: action.payload.todo, completed: false },
      ];

    case "toggle":
      return state.map((el) =>
        el.id === action.payload.id ? { ...el, completed: !el.completed } : el
      );

    case "delete":
      return state.filter((el) => el.id !== action.payload.id);

    case "edit":
      return state.map((el) =>
        el.id === action.payload.id ? { ...el, todo: action.payload.todo } : el
      );
  }
};

function UseContext({ children }) {
  const [state, dispatch] = useReducer(reducer, [
    { id: "1", todo: "buy milk", completed: true },
  ]);
  return (
    <>
      <todoContext.Provider value={{ state, dispatch }}>
        {children}
      </todoContext.Provider>
    </>
  );
}

export default UseContext;
