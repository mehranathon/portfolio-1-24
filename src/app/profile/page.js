import RootLayout from "../layout";
import ProfileLayout from "./layout";

export default function ProfilePage({children}) {
    return (
        <RootLayout>
            <ProfileLayout>
                {children}
            </ProfileLayout>
        </RootLayout>
        
    );
  }