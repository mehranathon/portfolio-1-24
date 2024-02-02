import { createContext, useReducer } from "react";

export const TooltipContext=createContext(null)

const initialState={visible:false,text:"",mouseXy:[0,0]}
const reducer=(state,action)=>({...state,...action})
export const TtProvider=(props)=>{
    const [state,dispatch]=useReducer(reducer,initialState)
    return(
        <TooltipContext.Provider value={{state,dispatch}}>
            {props.children}
        </TooltipContext.Provider>
    )
}