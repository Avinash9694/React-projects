import React, { useReducer, useState } from "react";
import { reducer } from "./reducer1";
import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from "./reducer1";
import { Person } from "./data";

const defaultStore = {
  people: Person,
  isLoading: false,
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
