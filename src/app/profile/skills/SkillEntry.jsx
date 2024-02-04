'use client'

import { proficiencyKey} from "@/skills";
import styles from "./Skills.module.css";
import { logGrowth } from "@/logGrowth";

export const SkillEntry=({entry,ind,upDown,delayTransition})=>{
    const titleStyle={
        filter:`hue-rotate(${delayTransition?0:(entry.proficieny+1)*.25*180}deg)`,
        transitionDelay:logGrowth[ind]+.5+"s",
    }  
    const barStyle={
        width:entry.proficieny*25+25+"%",
        filter:`hue-rotate(${delayTransition?0:(entry.proficieny+1)*.25*180}deg)`,
        animationDelay:logGrowth[ind]+.5+"s",
        transitionDelay:logGrowth[ind]+.5+"s"
    }
       
    return (
        <div className={styles.skill} key={entry.name}>
        <div 
            className={`${styles.title} ${upDown?styles.slideRight:styles.slideLeft}`}
        >
            <h3 
                className={styles.skillName} 
                style={titleStyle}
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
                    style={barStyle}        
                />
            </div>
        </div>
    )
}