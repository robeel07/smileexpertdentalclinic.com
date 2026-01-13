import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
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
import DentalImplants from "./Components/Blogs/DentalImplants";









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






function Home() {
  return (
    <>
      <Background />
      
      
    </>
  );
}

function App() {
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
        <Route path="/teeth-before-and-after" element={<Teeth />} />
        <Route path="/dental-implants-before-and-after" element={<Implants />} />
        <Route path="/dental-bonding-before-and-after" element={<Bonding />} />
        <Route path="/7x-safety" element={<Safety />} />
        <Route path="/4-step-sterilization" element={<StepSterilization />} />
        <Route path="/safety-equipment" element={<SafetyEquipment />} />
        <Route path="/equipment-technology" element={<EquipmentTechnology />} />
        <Route path="/quality" element={<Quality />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/dental-decay" element={<DentalDecay />} />
        <Route path="/cosmetic-vs-aesthetic" element={<CosmeticAesthetic />} />
        <Route path="/benefits-of-dental-checkups" element={<DentalCheckups />} />
        <Route path="/what-are-dental-xrays" element={<DentalXrays />} />
        <Route path="/dental-surgery-procedures" element={<DentalSurgery />} />
        <Route path="/what-is-all-4-dental-implants" element={<DentalImplants />} />



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








      </Routes>
    </Router>

    

    
  
  </>

  );
}

export default App;
