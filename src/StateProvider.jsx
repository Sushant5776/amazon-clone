import { createContext, useContext, useReducer } from "react"
import reducer from "./reducer"
import { initialState } from "./initialState"

// This is the Data Layer
export const StateContext = createContext()

// Build a Provider
export const StateProvider = ({ children }) => {
  const store = useReducer(reducer, initialState)
  return <StateContext.Provider value={store}>{children}</StateContext.Provider>
}

// This is how we use it inside of a component
export const useStateValue = () => useContext(StateContext)
