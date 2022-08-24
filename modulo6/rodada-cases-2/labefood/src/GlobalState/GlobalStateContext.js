import { createContext, useContext } from 'react'

const GlobalStateContext = createContext()

export const useGlobal = () => {
    return useContext(GlobalStateContext)
}

export default GlobalStateContext;