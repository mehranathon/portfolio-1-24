import { workHistory } from "@/workHistory"
import styles from "./WorkHistory.module.css"
import { WorkEntry } from "./workEntry";


export const WorkHistory=()=>{
    console.log(workHistory)
    return(
        <div className={styles.container}>
            <h1>Work History</h1>
            {workHistory.map((entry,ind)=><WorkEntry key={`${entry.company}_entry`} {...{entry,ind}}/>)}
        </div>
        
    )
}