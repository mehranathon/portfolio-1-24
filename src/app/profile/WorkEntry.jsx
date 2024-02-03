import { logGrowth } from "@/logGrowth"
import styles from "./WorkHistory.module.css"
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
import { TtButton } from "../TtButton/TtButton";
export const WorkEntry=({entry,ind})=>{
    const [collapsed,setCollapsed]=useState(false)
    const toggleCollapsed=()=>setCollapsed(!collapsed)

    return(
        <div 
            className={styles.entry} 
            key={entry.company}
            style={{animationDelay:0.01+logGrowth[ind]+"s"}}
        >
            <h2>{entry.title}</h2>
            <TtButton 
                className={styles.toggleCollapse}
                onClick={toggleCollapsed}
                icon={collapsed?<AddIcon/>:<RemoveIcon/>}
                tooltip={collapsed?"expand":"collapse"}
            />
            <h3 className={styles.company}>{entry.company}</h3>
            <span className={styles.dates}>{entry.dates}</span>
            <ul 
                className={`${styles.responsibilities}${collapsed?" "+styles.collapsed:" "+styles.expanded}`}
                style={{animationDelay:0.75+logGrowth[ind*2]+"s"}}
            >
            {
                entry.responsibilities.map( (bullet,ind) =>
                <li key={`${entry.company}_bullet${ind}`}>
                    {bullet}
                </li>)
            }
            </ul>
        </div>
    )

}