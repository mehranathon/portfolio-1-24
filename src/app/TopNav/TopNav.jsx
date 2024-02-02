import { useState, useEffect, useContext } from "react"
import { TtProvider,TooltipContext } from "../Providers";

import styles from './TopNav.module.css'

import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import WorkIcon from '@mui/icons-material/Work';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';


export const TopNav=({setCurrentPage,currentPage,updateTooltip})=>{
    const [darkMode,setDarkMode]=useState(true)
    // const ttContext=useContext(TooltipContext)
    // console.log(ttContext)
    
    useEffect(()=>{
        const docStyle=document.documentElement.style
        docStyle.setProperty("--color-transition", ".25s")
        docStyle.setProperty("--background-rgb", "25,25,25")
        docStyle.setProperty("--foreground-rgb", "255,255,255")
    },[])

    const toggleMode=()=>{
        const docStyle=document.documentElement.style
        if (darkMode){
            // docStyle.setProperty("--background-rgb", "240,240,240")
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
            <button 
                className={`${styles.button} ${currentPage==="aboutMe"?styles.active:""}`} 
                onClick={()=>setCurrentPage("aboutMe")}
                onMouseEnter={()=>updateTooltip({visible:true,text:"About Me"})}
                onMouseLeave={()=>updateTooltip({visible:false,text:""})}
            >
                <EmojiPeopleIcon />
            </button>
            <button 
                className={`${styles.button} ${currentPage==="skills"?styles.active:""}`} 
                onClick={()=>setCurrentPage("skills")}
                onMouseEnter={()=>updateTooltip({visible:true,text:"Skills"})}
                onMouseLeave={()=>updateTooltip({visible:false,text:""})}
            >
                <FactCheckIcon />
            </button>
            <button 
                className={`${styles.button} ${currentPage==="workHistory"?styles.active:""}`} 
                onClick={()=>setCurrentPage("workHistory")}
                onMouseEnter={()=>updateTooltip({visible:true,text:"Work History"})}
                onMouseLeave={()=>updateTooltip({visible:false,text:""})}
            >
                <WorkIcon />
            </button>
        </div>
        <button 
            className={`${styles.button} ${currentPage===0?styles.active:""}`} 
            onClick={toggleMode}
            onMouseEnter={()=>updateTooltip({visible:true,text:darkMode?"Dark Mode":"Light Mode"})}
            onMouseLeave={()=>updateTooltip({visible:false,text:""})}
        >
            {darkMode?<DarkModeIcon/>:<LightModeIcon/>}
        </button>

        </div>
    )
}
