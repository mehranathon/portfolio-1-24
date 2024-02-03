import { AboutMe } from "../AboutMe";

export default function AboutMeLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <section>
        <AboutMe/>
      </section>
    )
  }