'use client'

import { skills } from "@/skills";
import styles from "./Skills.module.css";
import ArrowBackIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIcon from '@mui/icons-material/ArrowForwardIos';
import { TtButton } from "@/app/TtButton/TtButton";
import { useEffect, useState } from "react";
import { SkillEntry } from "./SkillEntry";

export const SkillCarousel=()=>{
    const [currentSkill,setCurrentSkill]=useState(parseInt(sessionStorage.getItem("skill"))||0)
    const skill=skillList[currentSkill]
    const [upDown,setUpDown]=useState(null)
    const [delayTransition,setDelayTranstition]=useState(true)

    const cycleSkill=(upDown)=>{
        const ind=getInd(upDown)
        setCurrentSkill(ind)
        setDelayTranstition(true)
        sessionStorage.setItem("skill",ind)
        setUpDown(upDown>0)
    }
    const getInd=(upDown)=>{
        if(upDown+currentSkill>=skillList.length) return 0;
        if(upDown+currentSkill<0) return skillList.length-1;
        return upDown+currentSkill;
    }

    useEffect(()=>{
        /**
         * no transition if css prop changed on render; need to delay setting 
         * elem style filter:(rotateHue deg) for hue transition;
         * cannot hardcode as keyframes in css module because deg is dynamic
         */
        setTimeout(()=>{setDelayTranstition(false)},250)
    },[currentSkill])

    return(
        <div className={styles.container}>
            <h1
                key={`${skill}_header`} 
                className={`${styles.skillHeader} ${styles[upDown?"slideRight":"slideLeft"]}`}
            >
                {skill}
            </h1>
            <div className={styles.SkillsContainer}>
                <TtButton
                    className={styles.cycleButton} 
                    onClick={()=>cycleSkill(-1)}
                    icon=<ArrowBackIcon/>
                    tooltip="Previous"
                
                />
                <div className={styles.skillContent}>
                {
                skills[skill].map((entry,ind) => 
                    <SkillEntry key={`${entry.name}_entry`} 
                    {...{
                        entry, 
                        ind, 
                        upDown, 
                        delayTransition
                    }}    
                    />
                )}
                </div>
                <TtButton
                    className={styles.cycleButton} 
                    onClick={()=>cycleSkill(1)}
                    icon=<ArrowForwardIcon/>
                    tooltip="Next"
                />
            </div>
        </div>
    )
}

const skillList=Object.keys(skills)