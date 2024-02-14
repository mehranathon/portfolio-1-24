'use client'

import { skills } from "@/skills";
import styles from "./Skills.module.css";
import ArrowBackIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIcon from '@mui/icons-material/ArrowForwardIos';
import { TtButton } from "@/app/TtButton/TtButton";
import { useContext, useEffect, useRef, useState } from "react";
import { SkillEntry } from "./SkillEntry";
import { TooltipContext } from "@/app/Providers";

export const SkillCarousel=()=>{
    const context=useContext(TooltipContext)
    const ssStorage=context.state.sessionStorage
    const [currentSkill,setCurrentSkill]=useState(parseInt(ssStorage?.getItem("skill")||0))
    const skill=skillList[currentSkill]
    const [upDown,setUpDown]=useState(null)
    const [delayTransition,setDelayTranstition]=useState(true)
    const [swipeDir,setSwipeDir]=useState(null)
    const container=useRef(null)
    const skillContent=useRef(null)
    const touchStartX=useRef(null)

    const cycleSkill=(upDown)=>{
        const ind=getInd(upDown)
        setCurrentSkill(ind)
        setDelayTranstition(true)
        ssStorage.setItem("skill",ind)
        setUpDown(upDown>0)
    }
    
    const getInd=(upDown)=>{
        if(upDown+currentSkill>=skillList.length) return 0;
        if(upDown+currentSkill<0) return skillList.length-1;
        return upDown+currentSkill;
    }
    const setTouchStart = ({touches}) => touchStartX.current=touches[0].clientX
    const followTouch = ({touches}) => {
        const delta=touches[0].clientX-touchStartX.current

        skillContent.current.style.transform=`translateX(${delta}px)`
        skillContent.current.style.transition="none"
        if(Math.abs(delta)<swipeThreshold){
            useSwipeDir.current(null)
            return;
        }
        if(delta<0) useSwipeDir.current(1)
        else useSwipeDir.current(-1)
    }
    const useSwipeDir=useRef(setSwipeDir)
    const swipe = ({changedTouches}) => {
        const delta=touchStartX.current-changedTouches[0].clientX

        skillContent.current.style.transform="none"
        touchStartX.current=null
        useSwipeDir.current(null)
        if(Math.abs(delta)<swipeThreshold){
            skillContent.current.style.transition=".25s transform"
            return;
        }
        if(delta<0) useCycle.current(1)
        else useCycle.current(-1)
    }
    const useCycle=useRef(cycleSkill)

    useEffect(()=>{
        container.current.addEventListener("touchstart",setTouchStart)
        container.current.addEventListener("touchmove",followTouch)
        container.current.addEventListener("touchend",swipe)
    },[])
    useEffect(()=>{
        useCycle.current=cycleSkill
        useSwipeDir.current=setSwipeDir
    })
    useEffect(()=>{
        /**
         * no transition if css prop changed on render; need to delay setting 
         * elem style filter:(rotateHue n deg) for hue transition;
         * cannot hardcode as keyframes in css module because deg is dynamic
         */
        setTimeout(()=>{setDelayTranstition(false)},250)
    },[currentSkill])

    return(
        <div ref={container} className={styles.container}>
            <h1
                key={`${skill}_header`} 
                className={`${styles.skillHeader} ${styles[upDown?"slideRight":"slideLeft"]}`}
            >
                {skill}
            </h1>
            <TtButton
                    className={`${styles.cycleButton}${swipeDir<0?" "+styles.swiping:""}`} 
                    onClick={()=>cycleSkill(-1)}
                    icon=<ArrowBackIcon/>
                    tooltip="Previous"                
                />
            <div  className={styles.SkillsContainer}>
                <div ref={skillContent} className={styles.skillContent}>
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
            </div>
            <TtButton
                    className={`${styles.cycleButton}${swipeDir>0?" "+styles.swiping:""}`} 
                    onClick={()=>cycleSkill(1)}
                    icon=<ArrowForwardIcon/>
                    tooltip="Next"
                />
        </div>
    )
}

const skillList=Object.keys(skills)
const swipeThreshold=100