'use client'
import { TopNav } from "./TopNav/TopNav";
import { Profile } from "./profile/Profile";
import { useState } from "react";
import {ToolTip} from "./TtButton/TtButton"

export default function Home() {
  const [currentPage,setCurrentPage]=useState("aboutMe")
  return (
    <main className="main">
      <TtProvider>
        <TopNav {...{currentPage,setCurrentPage,updateTooltip}}/>
        <Profile {...{currentPage,updateTooltip}}/>
        <ToolTip/>
      </TtProvider>
    </main>
  );
}

