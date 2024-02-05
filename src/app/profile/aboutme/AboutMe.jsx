'use client'
import { useContext, useEffect, useRef, useState } from "react"
import styles from "./AboutMe.module.css"
import { logGrowth } from "@/logGrowth"
import { TooltipContext } from "@/app/Providers"


export const AboutMe=()=>{
    const headshot=useRef(null)
    const context=useContext(TooltipContext)
    const [personalStatement,setPersonalStatement]=useState(context.state?.personalStatement||null)
    const [imgLoaded,setImgLoaded]=useState(false)

    
    useEffect(()=>{
        if (headshot.current.complete) setImgLoaded(true)
        if(!personalStatement) getText('/personal-statement.txt')
    },[])
    const getText=async(url)=> {
        const txt = await fetch(url)
        .then((response)=>response.text())
        .catch(()=>{
            console.error("could not fetch txt:",url)
            return null
        })
        context.dispatch({personalStatement:txt})
        setPersonalStatement(txt)
    }

    return(
        <div className={styles.container}>
        <div className={styles.topCard}>
            <div className={`${styles.headshotContainer}${imgLoaded?" "+styles.loaded:""}`}>
                <img 
                    className={styles.headshot} 
                    ref={headshot} 
                    src={"/headshot.jpeg"} 
                    onLoad={()=>setImgLoaded(true)}/>
            </div>
            <div className={styles.info}>
                <h1 style={{animationDelay:logGrowth[1]+delay+"s"}}>
                    Mehran Khamnehipour
                </h1>
                <h2 style={{animationDelay:logGrowth[2]+delay+"s"}}>
                    Software Developer
                </h2>
                <h3 style={{animationDelay:logGrowth[3]+delay+"s"}}>
                    Los Angeles, CA | <a href="mailto:mehran.khmn@gmail.com">mehran.khmn@gmail.com</a>
                </h3>
            </div>
        </div>
        <div className={styles.wrapper}>
            <div className={styles.personalStatement}>
            {
                personalStatement
                ?personalStatement.split("\n").map((paragraph,ind)=><p key={`p_${ind}`}>{paragraph}</p>)
                :""
            }
            </div>
        </div>
        </div>

    )

}

const delay=1