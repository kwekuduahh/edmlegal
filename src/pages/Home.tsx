import { HeroSection } from "../components/sections/HeroSection";
import { PracticeAreasSection } from "../components/sections/PracticeAreasSection";
import { WhyChooseUsSection } from "../components/sections/WhyChooseUsSection";
import { TestimonialsSection } from "../components/sections/TestimonialsSection";
import { ContactSection } from "../components/sections/ContactSection";

export default function Home() {
    return (
        <div>
            <HeroSection />
            <PracticeAreasSection />
            <WhyChooseUsSection />
            <TestimonialsSection />
            <ContactSection />
        </div>
    );
}

