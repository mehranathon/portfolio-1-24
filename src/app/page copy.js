'use client'
import { TopNav } from "./TopNav/TopNav";
import { Profile } from "./profile/Profile";
import { useState } from "react";
import {ToolTip} from "./TtButton/TtButton"
import { TtProvider } from "./Providers";

export default function Home() {
  const [currentPage,setCurrentPage]=useState("aboutMe")
  return (
    <main className="main">
      <TtProvider>
        <TopNav {...{currentPage,setCurrentPage}}/>
        <Profile {...{currentPage}}/>
        <ToolTip/>
      </TtProvider>
    </main>
  );
}

