'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { TopNav } from "./TopNav/TopNav";
import { Profile } from "./profile/Profile";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { ToolTip } from "./Tooltip/Tooltip";
import { TooltipContext, TtProvider } from "./Providers";

export default function Home() {
  const [currentPage,setCurrentPage]=useState("aboutMe")
  const [mouseXy,setMouseXy]=useState([0,0])
  const [ttText,setTtText]=useState("")
  const [ttVisible,setTtVisible]=useState(false)

  const [tooltip,setTooltip]=useState({visible:false,text:"",mouseXy:[0,0]})

  const visRef=useRef(ttVisible)

  const trackmouse=({pageX,pageY})=>{
    if(!visRef.current) return;
    else setMouseXy([pageX,pageY])
  }
  const updateTooltip=({visible,text})=>{
    if(!(ttVisible||visible)) return;
    const delay=visible&&!ttVisible?1000:0
    // console.log("updating tooltip",{visible,text})
    setTtText(visible?text:ttText)
    setTtVisible(visible)
  }
  
  useEffect(()=>{
    window.addEventListener("mousemove",trackmouse)
  },[])
  useEffect(()=>{
    visRef.current=ttVisible
  },[ttVisible])


  return (
    <main className="main">
      {/* <TtProvider value="hey"> */}
      {/* <TooltipContext.Provider value={"hey"}> */}
        <TopNav {...{currentPage,setCurrentPage,updateTooltip}}/>
        <Profile {...{currentPage,updateTooltip}}/>
        <ToolTip visible={ttVisible} text={ttText} mouseXy={mouseXy} />
      {/* </TtProvider> */}
      {/* </TooltipContext.Provider> */}
    </main>
  );
}

