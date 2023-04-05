import { createContext, useState } from "react";

// 1. Crear el Contexto
export const FiltersContext = createContext()

// 2. Crear el Provider para proveer el Contexto a los componentes
export const FiltersProvider = ({children}) =>{
    const [filters, setFilters] = useState({
        category:'all',
        minPrice:0
    })

    return(
        <FiltersContext.Provider value={{
        filters, 
        setFilters}}>
        {children}
        </FiltersContext.Provider>
    )
}