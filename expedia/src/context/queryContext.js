import { createContext, useReducer} from "react"
const INTIAL_STATE = {
    destination: "",
    date: [],
    option:{
        adult:undefined,
        children:undefined,
        room:undefined

    } 
}

const Searchreducer = (state, action) => {
    switch (action.type) {
        case "Change":
            return action.payload
        case "reset":
            return INTIAL_STATE
        default:
            return state;
    }
}


export const URLContext = createContext()
export const QueryContextProviver = ({ children }) => {
    const [state, dispatch] = useReducer(Searchreducer, INTIAL_STATE)
    // const searchTerm = searchParams.get('name')

    return (
        <URLContext.Provider value={{destination: state.destination, date: state.date,option:state.option ,dispatch}}>
            {children}
        </URLContext.Provider>
    )
}


