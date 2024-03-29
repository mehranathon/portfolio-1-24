'use client'
import { createContext, useEffect, useReducer, useRef } from "react";

export const TooltipContext=createContext(null)

const initialState =
{
    visible:false,
    text:"",
    mouseXy:[0,0],
    personalStatement:null,
}

const reducer=(state,action)=>({...state,...action})

export const TtProvider=(props)=>{
    const [state,dispatch]=useReducer(reducer,initialState)
    const stateRef=useRef(state)
    const trackmouse=({pageX,pageY})=>{
        if(!stateRef.current.visible) return;
        else dispatch({mouseXy:[pageX,pageY]});
    }

    useEffect(()=>{
        document.head.append(<link rel='shortcut icon' type='image/x-icon' href='/smiley.svg' />)
        window.addEventListener("mousemove",trackmouse)
        dispatch({sessionStorage})
    },[])
    useEffect(()=>{stateRef.current=state})

    return(
        <TooltipContext.Provider value={{state,dispatch}}>
            {props.children}
        </TooltipContext.Provider>
    )
}