import { Inter } from "next/font/google";
import "./globals.css";
import { TtProvider } from "./Providers";
import { TopNav } from "./TopNav/TopNav";
import { ToolTip } from "./TtButton/TtButton";
import { Footer } from "./Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mehran Khamnehipour",
  description: "Personal Website"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>    
        <main className="main">
          <TtProvider>
            <TopNav/>
            {children}
            <ToolTip/>
          </TtProvider>
        </main>
      </body>
    </html>
  );
}
