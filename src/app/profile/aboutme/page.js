import ProfileLayout from "../layout";
import RootLayout from "../layout";
import AboutMeLayout from "./layout";

export default function aboutMePage({children}) {
    return (
        <RootLayout>
                <AboutMeLayout/>
        </RootLayout>
    );
  }