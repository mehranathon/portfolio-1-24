'use client'

import { workHistory } from "@/workHistory"
import styles from "./WorkHistory.module.css"
import { WorkEntry } from "./workEntry";
import { useEffect, useState } from "react";


export const WorkHistory=()=>{
    const stored=sessionStorage.getItem("expanded-entries")
    const [expanded,setExpanded]=useState(stored?JSON.parse(stored):workHistory.map(()=>true))
    const trackExpanded=(ind,bool)=>{
        console.log("tracking",expanded)
        const prevExpanded=[...expanded]
        prevExpanded.splice(ind,1,bool)
        setExpanded(prevExpanded)
    }
    useEffect(()=>{
        console.log("storing: ",expanded)
        storeExpanded(expanded)
    },[expanded])

    const storeExpanded=(exp)=>sessionStorage.setItem("expanded-entries",JSON.stringify(exp))
    return(
        <div className={styles.container}>
            <h1>Work History</h1>
            <div className={styles.entries}>
                {workHistory.map((entry,ind)=><WorkEntry key={`${entry.company}_entry`} {...{entry,ind,expanded:expanded[ind],trackExpanded}}/>)}
            </div>
        </div>
        
    )
}