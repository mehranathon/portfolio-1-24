import ProfileLayout from "../layout";
import RootLayout from "../layout";
import AboutMeLayout from "./layout";

export default function AboutMePage({children}) {
    return (
        <RootLayout>
                <AboutMeLayout/>
        </RootLayout>
    );
  }