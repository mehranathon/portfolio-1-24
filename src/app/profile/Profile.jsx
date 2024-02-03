
import { useState } from 'react'
import styles from './Profile.module.css'
import { SkillsBox } from './SkillsBox'
import { skills } from '@/skills'
import { WorkHistory } from './WorkHistory'
import { AboutMe } from './AboutMe'

export const Profile=({currentPage})=>{
    console.log(skillList)
    // const lnX=Array.from(Array(10).keys())
    // console.log(Array.from(Array(100).keys()).map(n=>parseFloat(Math.log(1+n*.05).toFixed(2))))
    const [currentSkill,setCurrentSkill]=useState(0)
    const [upDown,setUpDown]=useState(null)
    const [imgLoaded,setImgLoaded]=useState(false)
    const cycleSkill=(upDown)=>{
        setCurrentSkill(getInd(upDown))
        setUpDown(upDown>0)
    }
    const getInd=(upDown)=>{
        if(upDown+currentSkill>=skillList.length) return 0;
        if(upDown+currentSkill<0) return skillList.length-1;
        return upDown+currentSkill;
    }
    if(currentPage==="aboutMe") return(
        <div className={styles.TopContainer}>
            <AboutMe {...{imgLoaded,setImgLoaded}}/>
        </div>
    )
    if(currentPage==="workHistory") return(
        <div className={styles.TopContainer}>
            <WorkHistory/>
        </div>
    )
    if(currentPage==="skills") return(

        <div className={styles.TopContainer}>
            <h2 
                key={skillList[currentSkill]} 
                className={styles[upDown?"slideRight":"slideLeft"]}
            >
                {skillList[currentSkill]}
            </h2>
            <SkillsBox 
                skill={skillList[currentSkill]} 
                cycleSkill={cycleSkill} 
                upDown={upDown}                
            />
        </div>
    )
}

const skillList=Object.keys(skills)