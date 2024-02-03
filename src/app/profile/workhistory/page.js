import ProfileLayout from "../layout";
import RootLayout from "../layout";
import WorkHistoryLayout from "./layout";
import SkillsLayout from "./layout";
import AboutMeLayout from "./layout";

export default function WorkHistoryPage({children}) {
    return (
        <RootLayout>
                <WorkHistoryLayout/>
        </RootLayout>
    );
  }