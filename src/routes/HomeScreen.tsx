import "../CSS/HomeScreen.css";
import WarningBox1 from "../components/warningBox1";
import WarningBox from "../components/warningBox";
import WelcomeBox from "../components/HomePage/WelcomeBox";
import HeroSection from "../components/HomePage/HeroSection";
import PortfolioSection from "../components/HomePage/PortfolioSection";
import DisciplinesSection from "../components/HomePage/DisciplinesSection";
import TechnologiesSection from "../components/HomePage/TechnologiesSection";
import Footer from "../components/HomePage/Footer";

export default function HomeScreen() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-sky">
      <WarningBox1 message="This is a warning message!" />
      <WarningBox message="This is another warning message!" />

      {/* Welcome box */}
      <main className="relative z-10">
        <WelcomeBox />
        <HeroSection />
        <PortfolioSection />
        <DisciplinesSection />
        <TechnologiesSection />
        <Footer />
      </main>
    </div>
  );
}
