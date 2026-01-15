import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";


// Home Sections
import Background from "./Components/Background";
import Contact from "./Components/Contact";
import Blog from "./Components/Blogs/Blog";
import DentalDecay from "./Components/Blogs/DentalDecay";
import CosmeticAesthetic from "./Components/Blogs/CosmeticAesthetic";
import DentalCheckups from "./Components/Blogs/DentalCheckups";
import DentalXrays from "./Components/Blogs/DentalXrays";
import DentalSurgery from "./Components/Blogs/DentalSurgery";
import Whatsapp from "./Components/Images/whatsapp-icon-design.png";
import GoUp from "./Components/Images/go-up.png";
import OurValues from "./Components/About/OurValues";
import Team from "./Components/About/Team";



// Wisdom Teeth
import WisdomTeeth from "./Components/Pages/TeethGums/WisdomTeeth";
import BrokenChippedTeeth from "./Components/Pages/TeethGums/BrokenChippedTeeth";
import Toothache from "./Components/Pages/TeethGums/Toothache";
import RecedingGums from "./Components/Pages/TeethGums/RecedingGums";
import TeethCleaning from "./Components/Pages/TeethGums/TeethCleaning";
import GumDisease from "./Components/Pages/TeethGums/GumDisease";
import TeethGrinding from "./Components/Pages/TeethGums/TeethGrinding";
import JawPain from "./Components/Pages/TeethGums/JawPain";
import BadBreath from "./Components/Pages/TeethGums/BadBreath";
import SoreTeeth from "./Components/Pages/TeethGums/SoreTeeth";
import AbscessTeeth from "./Components/Pages/TeethGums/AbscessTeeth";
import MouthUlcer from "./Components/Pages/TeethGums/MouthUlcer";
import TeethFilling from "./Components/Pages/TeethGums/TeethFilling";
import AmalgamFilling from "./Components/Pages/TeethGums/AmalgamFilling";
import DryMouth from "./Components/Pages/TeethGums/DryMouth";
import YellowTeeth from "./Components/Pages/CosmeticImprovement/YellowTeeth";
import MissingTeeth from "./Components/Pages/CosmeticImprovement/MissingTeeth";
import WornTeeth from "./Components/Pages/CosmeticImprovement/WornTeeth";
import CrookedTeeth from "./Components/Pages/CosmeticImprovement/CrookedTeeth";
import EmergencyDentist from "./Components/Pages/CommonIssues/EmergencyDentist";
import DentalAnxiety from "./Components/Pages/CommonIssues/DentalAnxiety";
import OralCancer from "./Components/Pages/CommonIssues/OralCancer";
import Braces from "./Components/Pages/Before&After/Braces";
import Invisalign from "./Components/Pages/Before&After/Invisalign";
import Crowns from "./Components/Pages/Before&After/Crowns";
import Veneers from "./Components/Pages/Before&After/Veneers";
import Teeth from "./Components/Pages/Before&After/Teeth";
import Implants from "./Components/Pages/Before&After/Implants";
import Bonding from "./Components/Pages/Before&After/Bonding";
import Safety from "./Components/Pages/PatientSafety/Safety";
import StepSterilization from "./Components/Pages/PatientSafety/StepSterilization";
import SafetyEquipment from "./Components/Pages/PatientSafety/SafetyEquipment";
import EquipmentTechnology from "./Components/Pages/PatientSafety/EquipmentTechnology";
import Quality from "./Components/Pages/PatientSafety/Quality";
import Implants2 from "./Components/Pages/Treatments/Implants";
import Veneer from "./Components/Pages/Treatments/Veneer";
import Orthodontist from "./Components/Pages/Treatments/Orthodontist";
import Polishing from "./Components/Pages/Treatments/Polishing";
import Dentures from "./Components/Pages/Treatments/Dentures";
import Extraction from "./Components/Pages/Treatments/ToothExtraction";
import Wisdom from "./Components/Pages/Treatments/WisdomTeeth";
import TMJ from "./Components/Pages/Treatments/TMJ";
import Canals from "./Components/Pages/Treatments/Canals";
import DentalBraces from "./Components/Pages/Treatments/DentalBraces";
import DentalCrowns from "./Components/Pages/Treatments/DentalCrowns";
import Fillings from "./Components/Pages/Treatments/Fillings";
import Exam from "./Components/Pages/Treatments/Exam";
import Whitening from "./Components/Pages/Treatments/Whitening";
import Makeover from "./Components/Pages/Treatments/Makeover";
import Endodontist from "./Components/Pages/Treatments/Endodontist";
import Facial from "./Components/Pages/Treatments/Facial";
import Prosthodontist from "./Components/Pages/Treatments/Prosthodontist";
import Periodontist from "./Components/Pages/Treatments/Periodontist";
import Pediatric from "./Components/Pages/Treatments/Pediatric";
import Specialist from "./Components/Pages/Treatments/Specialist";





function Home() {
  return (
    <>
      <Background />
      
      
    </>
  );
}

function App() {
  const [showGoUp, setShowGoUp] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowGoUp(window.scrollY > 100);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (

    <>

    
    <Router>
      { <Navbar /> }

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wisdom-teeth" element={<WisdomTeeth />} />
        <Route path="/broken-chipped-tooth" element={<BrokenChippedTeeth />} />
        <Route path="/toothache" element={<Toothache />} />
        <Route path="/receding-gums" element={<RecedingGums />} />
        <Route path="/teeth-cleaning" element={<TeethCleaning />} />
        <Route path="/gum-disease" element={<GumDisease />} />
        <Route path="/teeth-grinding" element={<TeethGrinding />} />
        <Route path="/jaw-pain" element={<JawPain />} />
        <Route path="/bad-breath" element={<BadBreath />} />
        <Route path="/sore-teeth-treatment" element={<SoreTeeth />} />
        <Route path="/abscess-teeth-treatment" element={<AbscessTeeth />} />
        <Route path="/mouth-ulcer-treatment" element={<MouthUlcer />} />
        <Route path="/teeth-filling-treatment" element={<TeethFilling />} />
        <Route path="/amalgam-filling-treatment" element={<AmalgamFilling />} />
        <Route path="/dry-mouth-treatment" element={<DryMouth />} />
        <Route path="/yellow-teeth-treatment" element={<YellowTeeth />} />
        <Route path="/missing-teeth-treatment" element={<MissingTeeth />} />
        <Route path="/worn-teeth-treatment" element={<WornTeeth />} />
        <Route path="/crooked-teeth-treatment" element={<CrookedTeeth />} />
        <Route path="/emergency-dentist" element={<EmergencyDentist />} />
        <Route path="/dental-anxiety" element={<DentalAnxiety />} />
        <Route path="/oral-cancer" element={<OralCancer />} />
        <Route path="/braces-before-and-after" element={<Braces />} />
        <Route path="/invisalign-before-and-after" element={<Invisalign />} />
        <Route path="/crowns-before-and-after" element={<Crowns />} />
        <Route path="/veneers-before-and-after" element={<Veneers />} />
        <Route path="/teeth-whitening-before-and-after" element={<Teeth />} />
        <Route path="/dental-implants-before-and-after" element={<Implants />} />
        <Route path="/dental-bonding-before-and-after" element={<Bonding />} />
        <Route path="/7x-safety" element={<Safety />} />
        <Route path="/4-step-sterilization" element={<StepSterilization />} />
        <Route path="/safety-equipment" element={<SafetyEquipment />} />
        <Route path="/equipment-technology" element={<EquipmentTechnology />} />
        <Route path="/quality" element={<Quality />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/dental-decay" element={<DentalDecay />} />
        <Route path="/cosmetic-vs-aesthetic" element={<CosmeticAesthetic />} />
        <Route path="/benefits-of-dental-checkups" element={<DentalCheckups />} />
        <Route path="/what-are-dental-xrays" element={<DentalXrays />} />
        <Route path="/dental-surgery-procedures" element={<DentalSurgery />} />
        <Route path="/about/our-values" element={<OurValues />} />
        <Route path="/about/meet-our-team" element={<Team />} />



        <Route path="/t/implants" element={<Implants2 />} />
        <Route path="/t/veneer" element={<Veneer />} />
        <Route path="/t/orthodontist" element={<Orthodontist />} />
        <Route path="/t/polishing" element={<Polishing />} />
        <Route path="/t/dentures" element={<Dentures />} />
        <Route path="/t/extraction" element={<Extraction />} />
        <Route path="/t/wisdom" element={<Wisdom />} />
        <Route path="/t/tmj" element={<TMJ />} />
        <Route path="/t/canals" element={<Canals />} />
        <Route path="/t/dentalbraces" element={<DentalBraces />} />
        <Route path="/t/dentalcrowns" element={<DentalCrowns />} />
        <Route path="/t/fillings" element={<Fillings />} />
        <Route path="/treatment/exam" element={<Exam />} />
        <Route path="/treatment/whitening" element={<Whitening />} />
        <Route path="/treatment/makeover" element={<Makeover />} />
        <Route path="/treatment/endo" element={<Endodontist />} />
        <Route path="/treatment/facial" element={<Facial />} />
        <Route path="/treatment/prosthodontist" element={<Prosthodontist />} />
        <Route path="/treatment/periodontist" element={<Periodontist />} />
        <Route path="/treatment/pediatric" element={<Pediatric />} />
        <Route path="/treatment/specialist" element={<Specialist />} />









      </Routes>

     {/* WhatsApp – desktop only */}
      <a href="https://wa.me/+923008395562" target="_blank" rel="noopener noreferrer">
      <img
        src={Whatsapp}
        alt="WhatsApp"
        className="hidden lg:block h-16 fixed bottom-20 right-6 z-50 cursor-pointer"
      />
      </a>

      {/* Go Up – desktop only + only when scrolled */}
      {showGoUp && (
        <img
          src={GoUp}
          alt="Go Up"
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
          className="hidden lg:block h-8 fixed bottom-6 right-10 z-50 cursor-pointer"
        />
      )}





    </Router>

    

    
  
  </>

  );
}

export default App;
