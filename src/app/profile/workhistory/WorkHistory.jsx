'use client'

import { workHistory } from "@/workHistory"
import styles from "./WorkHistory.module.css"
import { WorkEntry } from "./WorkEntry";
import { useEffect, useState,useContext } from "react";
import { TooltipContext } from "@/app/Providers";


export const WorkHistory=()=>{
    const context=useContext(TooltipContext)
    const ssStorage=context.state.sessionStorage
    const stored=ssStorage?ssStorage.getItem("expanded-entries"):null
    const [expanded,setExpanded]=useState(stored?JSON.parse(stored):workHistory.map(()=>true))
    
    const trackExpanded=(ind,bool)=>{
        const prevExpanded=[...expanded]
        prevExpanded.splice(ind,1,bool)
        setExpanded(prevExpanded)
    }
    const storeExpanded=(exp)=>ssStorage?ssStorage.setItem("expanded-entries",JSON.stringify(exp)):null
    
    useEffect(() => { storeExpanded(expanded) }, [expanded])

    return(
        <div className={styles.container}>
            <h1>Work History</h1>
            <div className={styles.entries}>
                {
                workHistory.map((entry,ind)=>
                <WorkEntry key={`${entry.company}_entry`} 
                {...{
                    entry,
                    ind,
                    expanded:expanded[ind],
                    trackExpanded
                }}
                />)
                }
            </div>
        </div>
        
    )
}