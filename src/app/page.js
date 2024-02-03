import { TopNav } from "./TopNav/TopNav";
import {ToolTip} from "./TtButton/TtButton"
import { TtProvider } from "./Providers";
import RootLayout from "./layout";
import { useEffect } from "react";

export default function Home({children}) {
  useEffect(()=>{
    sessionStorage.setItem("mode","dark")
    sessionStorage.setItem("skill","Languages")
  },[])
  
  return (
    <RootLayout/>
  );
}

