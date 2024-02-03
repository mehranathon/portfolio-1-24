import { useState, useEffect, useContext } from "react"
import { TtProvider,TooltipContext } from "../Providers";

import styles from './TopNav.module.css'

import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import WorkIcon from '@mui/icons-material/Work';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
// import { TestButton } from "../TestButton/TestButton";
import CheckroomIcon from '@mui/icons-material/Checkroom';
import { TtButton } from "../TtButton/TtButton";


export const TopNav=({setCurrentPage,currentPage,updateTooltip})=>{
    const [darkMode,setDarkMode]=useState(true)
    // useEffect(()=>{
    //     const docStyle=document.documentElement.style
    //     docStyle.setProperty("--color-transition", ".25s")
    //     docStyle.setProperty("--background-rgb", "25,25,25")
    //     docStyle.setProperty("--foreground-rgb", "255,255,255")
    // },[])

    const toggleMode=()=>{
        const docStyle=document.documentElement.style
        if (darkMode) {
            docStyle.setProperty("--background-rgb", "255,249,238")
            docStyle.setProperty("--foreground-rgb", "50,50,50")
            setDarkMode(false)
        }
        else {
            docStyle.setProperty("--background-rgb", "25,25,25")
            docStyle.setProperty("--foreground-rgb", "255,255,255")
            setDarkMode(true)
        }
    }
    return(
        <div className={styles.container}>
            <div className={styles.buttons}>
                <TtButton 
                    className={`${styles.button} ${currentPage==="aboutMe"?styles.active:""}`}
                    onClick={()=>setCurrentPage("aboutMe")}
                    icon=<EmojiPeopleIcon />
                    tooltip="About Me"

                />
                <TtButton 
                    className={`${styles.button} ${currentPage==="skills"?styles.active:""}`}
                    onClick={()=>setCurrentPage("skills")}
                    icon=<FactCheckIcon />
                    tooltip="Skills"

                />
                <TtButton 
                    className={`${styles.button} ${currentPage==="workHistory"?styles.active:""}`}
                    onClick={()=>setCurrentPage("workHistory")}
                    icon=<WorkIcon />
                    tooltip="Work History"
                />
            </div>
            <TtButton 
                className={`${styles.button} ${currentPage===0?styles.active:""}`}
                onClick={toggleMode}
                icon={darkMode?<DarkModeIcon/>:<LightModeIcon/>}
                tooltip={darkMode?"Dark Mode":"Light Mode"}
            />
        </div>
    )
}
