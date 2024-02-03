import { useContext } from "react";
import ProfileLayout from "../layout";
import RootLayout from "../layout";
import SkillsLayout from "./layout";
import AboutMeLayout from "./layout";


export default function SkillsPage({children}) {
    
    return (
        <RootLayout>
            <SkillsLayout/>
        </RootLayout>
    );
}