import {createContext, useReducer} from 'react'

export const DataContext = createContext()

const dataReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_DATA':
      return {...state, data: action.payload}
    default:
      return state
  }
}

export function DataProvider({ children }) {
  const [state, dispatch] = useReducer(dataReducer, {
    data: null
  })

  const updateData = (data) => {
    dispatch({type: 'UPDATE_DATA', payload: data})
  }

  return (
    <DataContext.Provider value={{...state, updateData}}>
      {children}
    </DataContext.Provider>
  )
}