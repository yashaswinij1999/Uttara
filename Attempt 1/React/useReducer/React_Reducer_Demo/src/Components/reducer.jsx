import { v4 as uuidv4 } from "uuid";

export const reducer = function (state, action) {
  switch (action.type) {
    case "Add":
      return [...state, { id: action.payload.id, task: action.payload.task }];

    case "update":
      return state.map((el) =>
        el.id === action.payload.id
          ? { id: action.payload.id, task: action.payload.task }
          : el
      );

    case "delete":
      return state.filter((el) => el.id !== action.payload.id);

    default:
      return state;
  }
};
