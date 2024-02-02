import { useEffect, useRef } from "react"
import styles from "./ToolTip.module.css"

export const ToolTip = ({visible,text,mouseXy}) => {
    const ttRef=useRef(null)
    return(
        <div
            className={styles.tooltip}
            hidden={!visible}
            style={mouseXy?getCoords(mouseXy,ttRef.current):{}}
            ref={ttRef}
        >
            {text}
        </div>
    )

}

const offset=[10,20]
const padding="0.5rem"

const getCoords=(mouseXy,elem)=>{
    if(!elem)return({top:0,left:0})
    return({
        left:`min(100vw - ${elem.offsetWidth+offset[0]}px - ${padding},${mouseXy[0]+offset[0]}px)`,
        top:`min(100vh - ${elem.offsetHeight+offset[1]}px - ${padding},${mouseXy[1]+offset[1]}px)`
    }
    // return({
    //     left:`${mouseXy[0]+offset[0]}px`,
    //     top:`${mouseXy[1]+offset[1]}px`
    // }

    )

}