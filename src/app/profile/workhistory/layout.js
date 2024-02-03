import { WorkHistory } from "../WorkHistory";

export default function WorkHistoryLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <section>
        <WorkHistory/>
      </section>
    )
  }