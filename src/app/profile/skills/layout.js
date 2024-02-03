import { AboutMe } from "../AboutMe";
import { SkillsBox } from "../SkillsBox";

export default function SkillsLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <section>
        <SkillsBox/>
      </section>
    )
  }