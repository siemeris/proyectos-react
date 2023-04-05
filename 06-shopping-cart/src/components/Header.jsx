import { Filters } from "./Filters";


export function Header({changeFilters}){
    return (
        <header>
            <h1>React Store</h1>
            <Filters changeFilters={changeFilters} />
        </header>
    )
}