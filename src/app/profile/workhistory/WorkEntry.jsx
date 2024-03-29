import { logGrowth } from "@/logGrowth"
import styles from "./WorkHistory.module.css"
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { TtButton } from "../../TtButton/TtButton";

export const WorkEntry=({entry,ind,expanded,trackExpanded})=>{
    const toggleExpanded=()=>{
        trackExpanded(ind,!expanded)
    }

    return(
        <div 
            className={styles.entry} 
            key={entry.company}
            style={{animationDelay:.25+logGrowth[ind]+"s"}}
        >
            <h2>{entry.title}</h2>
            <TtButton 
                className={styles.toggleCollapse}
                onClick={toggleExpanded}
                icon={expanded?<RemoveIcon/>:<AddIcon/>}
                tooltip={expanded?"collapse":"expand"}
            />
            <h3 className={styles.company}>{entry.company}</h3>
            <span className={styles.dates}>{entry.dates}</span>
            <ul 
                className={`${styles.responsibilities}${expanded?" "+styles.expanded:" "+styles.collapsed}`}
                style={{animationDelay:1+logGrowth[ind*2]+"s"}}
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