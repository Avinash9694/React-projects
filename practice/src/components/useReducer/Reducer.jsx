import React, { useReducer, useState } from "react";
import { Person } from "./data";

const CLEAR_LIST = "CLEAR_LIST";
const RESET_LIST = "RESET_LIST";
const REMOVE_ITEM = "REMOVE_ITEM";
const defaultStore = {
  people: Person,
  isLoading: false,
};

const reducer = (state, action) => {
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

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, defaultStore);

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: { id } });
  };
  const clearList = () => {
    dispatch({ type: CLEAR_LIST });
  };

  const resetList = () => {
    dispatch({ type: RESET_LIST });
  };

  console.log(state);
  return (
    <>
      {state.people.length ? (
        <div>
          {state.people.map((persons) => {
            const { id, name } = persons;
            return (
              <div key={id}>
                <h4>{name}</h4>
                <button
                  onClick={() => {
                    removeItem(id);
                  }}
                >
                  remove
                </button>
              </div>
            );
          })}
          <button onClick={clearList} className="btn btn-danger">
            clear list
          </button>
        </div>
      ) : (
        <button onClick={resetList}>Reset</button>
      )}
    </>
  );
};

export default Reducer;
