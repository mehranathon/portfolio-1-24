'use client'
import { TooltipContext } from "../Providers";
import { useContext, useRef } from "react"
import styles from "./ToolTip.module.css"

export const TtButton = ({onClick,className,hidden,icon,tooltip,style})=>{
    const ttContext = useContext(TooltipContext)
    const onMouseEnter = () => ttContext.dispatch({visible:true,text:tooltip})
    const onMouseLeave = () => ttContext.dispatch({visible:false})

    return(
            <button 
            {...{
                className,
                onClick,
                hidden,
                onMouseEnter,
                onMouseLeave,
                style:style
            }}
            >
                {icon}
            </button>
    )
}

export const ToolTip = () => {
    const ttContext=useContext(TooltipContext)
    const {visible,text,mouseXy}=ttContext.state
    const ttRef=useRef(null)
    const style={...(mouseXy?getCoords(mouseXy,ttRef.current):{}),padding}

    return(
        <div
            className={styles.tooltip}
            hidden={!visible}
            style={style}
            ref={ttRef}
        >
            {text}
        </div>
    )

}

const offset=[10,20]
const padding="0.5rem"
const getCoords=(mouseXy,elem)=>{
    const coords= !elem?{top:0,left:0}:
    {
        top:`min(100vh - ${elem.offsetHeight+offset[1]}px - ${padding},${mouseXy[1]+offset[1]}px)`,
        left:`min(100vw - ${elem.offsetWidth+offset[0]}px - ${padding},${mouseXy[0]+offset[0]}px)`
    }
    return coords
}