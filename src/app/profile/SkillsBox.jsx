'use client'

import { proficiencyKey, skills } from "@/skills"
import styles from "./Profile.module.css"
import ArrowBackIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIcon from '@mui/icons-material/ArrowForwardIos';
import { logGrowth } from "@/logGrowth";
import { TtButton } from "../TtButton/TtButton";
import { useState } from "react";

export const SkillsBox=()=>{
    const [currentSkill,setCurrentSkill]=useState(0)
    const [upDown,setUpDown]=useState(null)
    const cycleSkill=(upDown)=>{
        setCurrentSkill(getInd(upDown))
        setUpDown(upDown>0)
    }
    const getInd=(upDown)=>{
        if(upDown+currentSkill>=skillList.length) return 0;
        if(upDown+currentSkill<0) return skillList.length-1;
        return upDown+currentSkill;
    }

    const skill=skillList[currentSkill]
    return(
        <div className={styles.SkillsContainer}>
            <TtButton
                className={styles.cycleButton} 
                onClick={()=>cycleSkill(-1)}
                icon=<ArrowBackIcon/>
                tooltip="Previous"
            
            />
            <div className={styles.skillContent}>
            {
                skills[skill].map((entry,ind)=>{
                    return (
                        <div className={styles.skill} key={entry.name}>
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
                        </div>
                    )
            })}
            </div>
            <TtButton
                className={styles.cycleButton} 
                onClick={()=>cycleSkill(1)}
                icon=<ArrowForwardIcon/>
                tooltip="Next"
            />
        </div>
    )
}

const skillList=Object.keys(skills)