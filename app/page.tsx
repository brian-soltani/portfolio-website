import Building from "@/components/Building";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Profile from "@/components/Profile";

export default function Home() {
  return (
    <main id="main-content" className="portfolio-shell">
      <Profile />
      <Building />
      <Experience />
      <Education />
      <Footer />
    </main>
  );
}
