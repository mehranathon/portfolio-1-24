import { proficiencyKey, skills } from "@/skills"
import styles from "./Profile.module.css"
import ArrowBackIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIcon from '@mui/icons-material/ArrowForwardIos';
import { logGrowth } from "@/logGrowth";
export const SkillsBox=({skill,cycleSkill,upDown})=>{
    const currentSkill=skill.toLowerCase()
    return(
        <div className={styles.SkillsContainer}>
            <button className={styles.cycleButton} onClick={()=>cycleSkill(-1)}><ArrowBackIcon/></button>
            <div className={styles.skillContent}>
            {
                skills[currentSkill].map((entry,ind)=>{
                    if (typeof entry==="string") return (
                        <li 
                            className={styles[upDown?"slideRight":"slideLeft"]}
                            style={{animationDelay:logGrowth[ind]+"s"}}
                        >
                            {entry}
                        </li>
                    )
                    return (<div className={styles.skill} key={entry.name}>
                    <div 
                        className={`${styles.title} ${styles[upDown?"slideRight":"slideLeft"]}`}
                        style={{animationDelay:logGrowth[ind]+"s"}}
                    >
                        <h3 
                            className={styles.skillName} 
                            style={{filter:`hue-rotate(${(entry.proficieny+1)*.25*180}deg)`,}}
                        >
                            {entry.name}
                        </h3>
                        <span>{entry.years} yrs</span>
                    </div>
                        <div className={styles.progressBar}>
                            <span 
                                className={styles.proficiency}
                                style={{animationDelay:(logGrowth[ind]+1)+"s"}}
                            >
                                {proficiencyKey[entry.proficieny]}
                            </span>
                            <div 
                                className={styles.progress} 
                                style={{
                                    width:entry.proficieny*25+25+"%",
                                    filter:`hue-rotate(${(entry.proficieny+1)*.25*180}deg)`,
                                    animationDelay:logGrowth[ind]+.5+"s"
                                    }}        
                            />
                        </div>
                    </div>)
            })}
            </div>
            <button className={styles.cycleButton} onClick={()=>cycleSkill(1)}><ArrowForwardIcon/></button>
        </div>
    )
}