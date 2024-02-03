'use client'
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
import { usePathname, useRouter } from "next/navigation";


export const TopNav=({setCurrentPage,currentPage,updateTooltip})=>{
    const [darkMode,setDarkMode] = useState(true)
    const router = useRouter()
    const pathname = usePathname()

    useEffect(()=>{
        const docStyle=document.documentElement.style
        docStyle.setProperty("--color-transition", ".25s")
        const userPref=localStorage.getItem("mode")
        if(userPref) setMode(userPref==="dark"?true:false)
        sessionStorage.setItem("skill","Languages")
    },[])
    const setMode = (darkMode) => {
        const docStyle=document.documentElement.style
        if (darkMode) {
            docStyle.setProperty("--background-rgb", "25,25,25")
            docStyle.setProperty("--foreground-rgb", "255,255,255")
            localStorage.setItem("mode","dark")
            setDarkMode(true)
        }
        else {
            docStyle.setProperty("--background-rgb", "255,249,238")
            docStyle.setProperty("--foreground-rgb", "50,50,50")
            localStorage.setItem("mode","light")
            setDarkMode(false)
        }
        
    }
    const toggleMode = () => setMode(!darkMode)

    return(
        <div className={styles.container}>
            <div className={styles.buttons}>
                <TtButton 
                    className={`${styles.button} ${pathname.endsWith("aboutme")?styles.active:""}`}
                    onClick={()=>router.push("/profile/aboutme")}
                    icon=<EmojiPeopleIcon />
                    tooltip="About Me"

                />
                <TtButton 
                    className={`${styles.button} ${pathname.endsWith("skills")?styles.active:""}`}
                    onClick={()=>router.push("/profile/skills")}
                    // onClick={()=>setCurrentPage("skills")}
                    icon=<FactCheckIcon />
                    tooltip="Skills"

                />
                <TtButton 
                    className={`${styles.button} ${pathname.endsWith("workhistory")?styles.active:""}`}
                    onClick={()=>router.push("/profile/workhistory")}
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
