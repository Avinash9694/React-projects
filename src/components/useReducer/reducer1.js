import { Person } from "./data";

export const CLEAR_LIST = "CLEAR_LIST";
export const RESET_LIST = "RESET_LIST";
export const REMOVE_ITEM = "REMOVE_ITEM";

export const reducer = (state, action) => {
  if (action.type === CLEAR_LIST) {
    return { ...state, people: [] };
  }
  if (action.type === RESET_LIST) {
    return { ...state, people: Person };
  }
  if (action.type == REMOVE_ITEM) {
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload.id
    );
    return { ...state, people: newPeople };
  }
  throw new Error(`not matching "${action.type}" - action type`);
};
