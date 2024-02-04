'use client'

import { proficiencyKey, skills } from "@/skills";
import styles from "./Skills.module.css";
import ArrowBackIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIcon from '@mui/icons-material/ArrowForwardIos';
import { logGrowth } from "@/logGrowth";
import { TtButton } from "@/app/TtButton/TtButton";
import { useEffect, useState } from "react";

export const SkillsBox=()=>{
    const [currentSkill,setCurrentSkill]=useState(0)
    const skill=skillList[currentSkill]
    const [upDown,setUpDown]=useState(null)
    const [profficiencies,setProfficiencies]=useState(null)
    const cycleSkill=(upDown)=>{
        const ind=getInd(upDown)
        setCurrentSkill(ind)
        setProfficiencies(null)
        sessionStorage.setItem("skill",skillList[ind])
        setUpDown(upDown>0)
    }
    const getInd=(upDown)=>{
        if(upDown+currentSkill>=skillList.length) return 0;
        if(upDown+currentSkill<0) return skillList.length-1;
        return upDown+currentSkill;
    }

    useEffect(()=>{
        const stored=sessionStorage.getItem("skill")
        if(stored)setCurrentSkill(skillList.indexOf(stored))
    })

    useEffect(()=>{
        setTimeout(()=>{setProfficiencies(skills[skill].map((entry)=>entry.proficieny))},250)
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
                    skills[skill].map((entry,ind)=>{
                        return (
                            <div className={styles.skill} key={entry.name}>
                            <div 
                                className={`${styles.title} ${styles[upDown?"slideRight":"slideLeft"]}`}
                            >
                                <h3 
                                    className={styles.skillName} 
                                    style={{
                                        filter:`hue-rotate(${!profficiencies?0:(profficiencies[ind]+1)*.25*180}deg)`,
                                        transitionDelay:logGrowth[ind]+.5+"s",
                                    }}
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
                                            filter:`hue-rotate(${!profficiencies?0:(profficiencies[ind]+1)*.25*180}deg)`,
                                            animationDelay:logGrowth[ind]+.5+"s",
                                            transitionDelay:logGrowth[ind]+.5+"s"
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
        </div>
    )
}

const skillList=Object.keys(skills)