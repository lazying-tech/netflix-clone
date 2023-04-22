import { useReducer } from "react";
import { createContext } from "react";
import ListReducer from "./ListReducer";

const INITIAL_STATE = {
  lists: [],
  isFetching: false,
  error: false,
};

export const ListContext = createContext(INITIAL_STATE);

export const ListContextProvider = (props) => {
  const [state, dispatch] = useReducer(ListReducer, INITIAL_STATE);

  return (
    <ListContext.Provider
      value={{
        lists: state.lists,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {props.children}
    </ListContext.Provider>
  );
};
