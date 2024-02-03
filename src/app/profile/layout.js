import { Profile } from "./Profile";

export default function ProfileLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <section>
        <Profile>
            {children}
        </Profile>
      </section>
    )
  }