import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import brandLogo from "./Images/navlogo.png"

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeAccordion, setActiveAccordion] = useState(null);

    const toggleAccordion = (section) => {
        setActiveAccordion(activeAccordion === section ? null : section);
    };

    const closeAll = () => {
        setIsMobileMenuOpen(false);
        setActiveAccordion(null);
    };

    const BeforeAfterSlider = ({ beforeImg, afterImg, label }) => {
        const [sliderPos, setSliderPos] = useState(50);
        const containerRef = useRef(null);

        const handleMove = (e) => {
            const containerRect = containerRef.current.getBoundingClientRect();
            const x = e.type.includes("touch") ? e.touches[0].clientX : e.clientX;
            const relativeX = x - containerRect.left;
            const position = Math.max(0, Math.min(100, (relativeX / containerRect.width) * 100));
            setSliderPos(position);
        };

        return (
            <div
                ref={containerRef}
                className="font-jost relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl cursor-col-resize select-none border-4 border-white"
                onMouseMove={handleMove}
                onTouchMove={handleMove}
            >
                {/* After Image (Background) */}
                <img src={afterImg} alt="After" className="absolute inset-0 w-full h-full object-cover" />

                {/* Before Image (Clipped Overlay) */}
                <div className="absolute inset-0 w-full h-full overflow-hidden" style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}>
                    <img src={beforeImg} alt="Before" className="w-full h-full object-cover" />
                </div>

                {/* Slider Line & Handle */}
                <div className="absolute inset-y-0 w-1 bg-white shadow-lg pointer-events-none" style={{ left: `${sliderPos}%` }}>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-brand-accent rounded-full border-2 border-white flex items-center justify-center shadow-md">
                        <div className="flex gap-0.5">
                            <div className="w-0.5 h-3 bg-white rounded-full" />
                            <div className="w-0.5 h-3 bg-white rounded-full" />
                        </div>
                    </div>
                </div>

                {/* Labels */}
                <div className="absolute bottom-4 left-4 bg-black/50 text-white px-2 py-1 text-[10px] font-bold rounded uppercase">Before</div>
                <div className="absolute bottom-4 right-4 bg-black/50 text-white px-2 py-1 text-[10px] font-bold rounded uppercase">After</div>
            </div>
        );
    };

    return (
        <nav className="fixed top-4 left-0 right-0 z-50 px-3 sm:px-4 ">
            <div className="max-w-[1340px] mx-auto bg-gray-100 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200 
                            flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 gap-4  ">
                {/* Left: Logo Section */}
                <div className="flex-shrink-0 flex items-center">
                    <Link to="/">
                        <div className="flex items-center order-1 lg:order-none ">
                        <img src={brandLogo} className="block h-16 sm:h-10 md:h-14  lg:h-16 xl:h-20 w-auto ml-0 object-contain" alt="Logo" />
                        </div>
                    </Link>
                </div>

                {/* Center: Desktop Navigation */}
                <div className="hidden lg:flex flex-1 justify-center items-center 
                                flex-wrap gap-x-6 gap-y-2 text-center font-medium text-gray-700 min-w-0">
                    {/* About Dropdown */}
                    <div className="group relative px-3 py-2">
                        <button className="flex items-center text-sm font-semibold text-blue-950 hover:text-gray-400 transition-colors cursor-pointer">
                            About <ChevronDown size={14} />
                        </button>
                        <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-slate-100 p-4">
                            <Link to="/about/meet-our-team" className="block py-2 hover:text-brandAccent text-sm no-underline text-slate-600">
                                Meet the Team
                            </Link>
                            <Link to="/about/our-values" className="block py-2 hover:text-brandAccent text-sm no-underline text-slate-600">
                                Our Values
                            </Link>
                        </div>
                    </div>

                    {/* Dental Problems Mega Menu */}
                    <div className="group relative px-1 py-2">
                        <button className="flex items-center text-sm font-semibold text-blue-950 hover:text-gray-400 transition-colors cursor-pointer">
                            Dental Problems <ChevronDown size={14} />
                        </button>
                        <div className="absolute top-full left-[-100px] mt-2 w-[850px] bg-white items-start text-left rounded-[30px] shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-slate-100 p-6 overflow-hidden">
                            <div className="grid grid-cols-3 gap-8 text-left">
                                <div>
                                    <h3 className="text-brandDark font-bold text-xl mb-4">Teeth & Gums</h3>
                                    <ul className="space-y-2 text-slate-600 text-left text-[13px] pl-0 list-none">
                                        <li className="hover:text-brandAccent">
                                            <Link className="hover:text-brandAccent no-underline text-slate-600" to="/wisdom-teeth">Wisdom Teeth</Link>
                                        </li>
                                        <li>
                                            <Link className="hover:text-brandAccent no-underline text-slate-600" to="/broken-chipped-tooth">Broken Chipped Tooth</Link>
                                        </li>
                                        <li>
                                            <Link className="hover:text-brandAccent no-underline text-slate-600" to="/toothache">Toothache</Link>
                                        </li>
                                        <li>
                                            <Link className="hover:text-brandAccent no-underline text-slate-600" to="/receding-gums">Receding Gums</Link>
                                        </li>
                                        <li>
                                            <Link className="hover:text-brandAccent no-underline text-slate-600" to="/teeth-cleaning">Teeth Cleaning</Link>
                                        </li>
                                        <li>
                                            <Link className="hover:text-brandAccent no-underline text-slate-600" to="/gum-disease">Gum Disease</Link>
                                        </li>
                                        <li>
                                            <Link className="hover:text-brandAccent no-underline text-slate-600" to="/teeth-grinding">Teeth Grinding</Link>
                                        </li>
                                        <li>
                                            <Link className="hover:text-brandAccent no-underline text-slate-600" to="/jaw-pain">Jaw Pain</Link>
                                        </li>
                                        <li>
                                            <Link className="hover:text-brandAccent no-underline text-slate-600" to="/bad-breath">Bad Breath</Link>
                                        </li>
                                        <li>
                                            <Link className="hover:text-brandAccent no-underline text-slate-600" to="/sore-teeth-treatment">Sensitive & Sore Teeth</Link>
                                        </li>
                                        <li>
                                            <Link className="hover:text-brandAccent no-underline text-slate-600" to="/abscess-teeth-treatment">Tooth Abscess</Link>
                                        </li>
                                        <li>
                                            <Link className="hover:text-brandAccent no-underline text-slate-600" to="/mouth-ulcer-treatment">Mouth Sores</Link>
                                        </li>
                                        <li>
                                            <Link className="hover:text-brandAccent no-underline text-slate-600" to="/teeth-filling-treatment">Teeth Filling</Link>
                                        </li>
                                        <li>
                                            <Link className="hover:text-brandAccent no-underline text-slate-600" to="amalgam-filling-treatment">Replacing a Amalgam</Link>
                                        </li>
                                        
                                        <li>
                                            <Link className="hover:text-brandAccent no-underline text-slate-600" to="dry-mouth-treatment">Dry Mouth</Link>
                                        </li>
                                        
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-brandDark font-bold text-xl mb-4">Cosmetic Improvement</h3>
                                    <ul className="space-y-2 text-slate-600 text-[13px] pl-0 list-none">
                                        <li>
                                            <Link className="hover:text-brandAccent no-underline text-slate-600" to="/yellow-teeth-treatment">Yellow Teeth</Link>
                                        </li>
                                        <li>
                                            <Link className="hover:text-brandAccent no-underline text-slate-600" to="/missing-teeth-treatment">Missing Teeth</Link>
                                        </li>
                                        <li>
                                            <Link className="hover:text-brandAccent no-underline text-slate-600" to="/worn-teeth-treatment">Worn Teeth</Link>
                                        </li>
                                        <li>
                                            <Link className="hover:text-brandAccent no-underline text-slate-600" to="/crooked-teeth-treatment">Crooked Teeth</Link>
                                        </li>
                                    </ul>
                                    <img className="pt-32 w-40" src="https://smileon.pk/wp-content/uploads/2023/01/invisible-aligner.jpg" alt="Invisible aligner treatment option" />
                                </div>
                                <div>
                                    <h3 className="text-brandDark font-bold text-xl mb-4 hover:text-gray-400">Common Issues</h3>
                                    <ul className="space-y-2 text-slate-600 text-[13px] pl-0 list-none">
                                        <li>
                                            <Link className="hover:text-brandAccent no-underline text-slate-600" to="/emergency-dentist">Emergency Dentist</Link>
                                        </li>
                                        <li>
                                            <Link className="hover:text-brandAccent no-underline text-slate-600" to="/dental-anxiety">Dental Anxiety</Link>
                                        </li>
                                        <li>
                                            <Link className="hover:text-brandAccent no-underline text-slate-600" to="/oral-cancer">Oral Cancer</Link>
                                        </li>
                                    </ul>
                                    <img
                                        className="pt-32 w-40"
                                        src="https://smileon.pk/wp-content/uploads/2022/01/home1-imagebox-002-new-300x244.png"
                                        alt="Common dental issues treatment"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Treatments Mega Menu */}
                    <div className="group relative px-1 py-2">
                        <button className="flex items-center text-sm font-semibold text-blue-950 hover:text-gray-400 transition-colors cursor-pointer">
                            Treatments <ChevronDown size={14} />
                        </button>
                        <div className="absolute top-full left-1/2 -translate-x-[40%] mt-2 w-[900px] bg-white rounded-[30px] shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-slate-100 p-10">
                        
                            <div className="grid grid-cols-3 gap-8">
                                <div>
                                    <h4 className="font-bold text-brandDark pb-2 mb-4 hover:text-gray-400">Dental Services</h4>
                                    <div className="flex flex-col gap-2 text-sm text-slate-600">
                                        <Link className="hover:text-brandAccent no-underline text-slate-600" to="/t/polishing">Scaling & Polishing</Link>
                                        <Link className="hover:text-brandAccent no-underline text-slate-600" to="/t/fillings">Fillings</Link>
                                        <Link className="hover:text-brandAccent no-underline text-slate-600" to="t/canals">Root Canals</Link>
                                        <Link className="hover:text-brandAccent no-underline text-slate-600" to="/t/extraction">Tooth Extraction</Link>
                                        <Link className="hover:text-brandAccent no-underline text-slate-600" to="/t/tmj">TMJ Treatment</Link>
                                        <Link className="hover:text-brandAccent no-underline text-slate-600" to="/t/Wisdom">Wisdom Teeth Removal</Link>
                                        <Link className="hover:text-brandAccent no-underline text-slate-600" to="/treatment/exam">Exam and X-Ray Checkup</Link>
                                        <Link className="hover:text-brandAccent no-underline text-slate-600" to="/t/dentures">Dentures</Link>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-bold text-brandDark pb-2 mb-4 hover:text-gray-400">Cosmetic Services</h4>
                                    <div className="flex flex-col gap-2 text-sm text-slate-600">
                                        <Link className="hover:text-brandAccent no-underline text-slate-600" to="/treatment/whitening">Teeth Whitening</Link>
                                        <Link className="hover:text-brandAccent no-underline text-slate-600" to="/t/dentalbraces">Dental Braces</Link>
                                        <Link className="hover:text-brandAccent no-underline text-slate-600" to="/t/implants">Dental Implants</Link>
                                        <Link className="hover:text-brandAccent no-underline text-slate-600" to="/t/dentalcrowns">Dental Crowns</Link>
                                        <Link className="hover:text-brandAccent no-underline text-slate-600" to="/t/veneer">Dental Veneers</Link>
                                        <Link className="hover:text-brandAccent no-underline text-slate-600" to="/t/orthodontist">Orthodontics</Link>
                                        <Link className="hover:text-brandAccent no-underline text-slate-600" to="/treatment/makeover">Smile Makeover</Link>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-bold text-brandDark pb-2 mb-4 hover:text-gray-400">Dental Specialists</h4>
                                    <div className="flex flex-col gap-2 text-sm text-slate-600">
                                        <Link className="hover:text-brandAccent no-underline text-slate-600" to="/treatment/specialist">Dental Specialist</Link>
                                        <Link className="hover:text-brandAccent no-underline text-slate-600" to="/treatment/endo">Endodontist Services</Link>
                                        <Link className="hover:text-brandAccent no-underline text-slate-600" to="/treatment/facial">Oral & Maxillofacial Services</Link>
                                        <Link className="hover:text-brandAccent no-underline text-slate-600" to="/treatment/specialist">Orthodontist Specialist</Link>
                                        <Link className="hover:text-brandAccent no-underline text-slate-600" to="/treatment/pediatric">Pediatric Dentist</Link>
                                        <Link className="hover:text-brandAccent no-underline text-slate-600" to="/treatment/periodontist">Periodontist Services</Link>
                                        <Link className="hover:text-brandAccent no-underline text-slate-600" to="/treatment/prosthodontist">Prosthodontist Services</Link>
                                        <img className="pt-5 w-40" src="https://smileon.pk/wp-content/uploads/2024/09/circle-text.svg" alt="Dental specialists services illustration" />
                                    </div>
                                </div>
                                <div className="flex flex-col items-center justify-center"></div>
                            </div>
                        </div>
                    </div>

                    {/* Before & After Menu */}
                    <div className="group relative px-1 py-2">
                        <button className="flex items-center text-sm font-semibold text-blue-950 hover:text-gray-400 transition-colors cursor-pointer">
                            Before & After <ChevronDown size={14} />
                        </button>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[900px] bg-white rounded-[30px] shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-slate-100 p-10">
                            <div className="grid grid-cols-2 gap-8">
                                <div>
                                    <h4 className="font-bold text-brandDark pb-2 mb-4 hover:text-gray-400">Before & After</h4>
                                    <div className="flex flex-col gap-2 text-sm text-slate-600">
                                        <Link className="hover:text-brandAccent no-underline text-slate-600" to="/braces-before-and-after">Braces - Before & After</Link>
                                        <Link className="hover:text-brandAccent no-underline text-slate-600" to="/invisalign-before-and-after">Invisalign - Before & After</Link>
                                        <Link className="hover:text-brandAccent no-underline text-slate-600" to="/crowns-before-and-after">Crowns - Before & After</Link>
                                        <Link className="hover:text-brandAccent no-underline text-slate-600" to="/veneers-before-and-after">Veneers - Before & After</Link>
                                        <Link className="hover:text-brandAccent no-underline text-slate-600" to="/teeth-whitening-before-and-after">Teeth Whitening - Before & After</Link>
                                        <Link className="hover:text-brandAccent no-underline text-slate-600" to="/dental-implants-before-and-after">Dental Implants - Before & After</Link>
                                        <Link className="hover:text-brandAccent no-underline text-slate-600" to="/dental-bonding-before-and-after">Dental Bonding - Before & After</Link>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex flex-col gap-4">
                                        <BeforeAfterSlider
                                            beforeImg={"https://smileon.pk/wp-content/uploads/2024/09/teeth-whitening-before.webp"}
                                            afterImg={"https://smileon.pk/wp-content/uploads/2024/09/teeth-whitening-after.webp"}
                                        />
                                        <button className="bg-brandDark text-white px-8 py-3 rounded-full font-bold text-sm hover:scale-105 transition-transform cursor-pointer">
                                            See All
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Patient Safety Menu */}
                    <div className="group relative px-1 py-2">
                        <button className="flex items-center text-sm font-semibold text-blue-950 hover:text-gray-400 transition-colors cursor-pointer">
                            Patient Safety <ChevronDown size={14} />
                        </button>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[900px] bg-white rounded-[30px] shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-slate-100 p-10">
                            <div className="grid grid-cols-3 gap-8">
                                <div>
                                    <h4 className="font-bold text-brandDark pb-2 mb-4">Dental Services</h4>
                                    <div className="flex flex-col gap-2 text-sm text-slate-600">
                                        <Link className="hover:text-brandAccent no-underline text-slate-600" to="/7x-safety">7X Safety</Link>
                                        <Link className="hover:text-brandAccent no-underline text-slate-600" to="/4-step-sterilization">4 Step Sterilization</Link>
                                        <Link className="hover:text-brandAccent no-underline text-slate-600" to="/safety-equipment">Safety Equipments</Link>
                                        <Link className="hover:text-brandAccent no-underline text-slate-600" to="/equipment-technology">Equipment & Technology</Link>
                                        <Link className="hover:text-brandAccent no-underline text-slate-600" to="/quality">Quality</Link>
                                    </div>
                                </div>
                                <div className="col-span-2">
                                    <img
                                        className="w-full pt-8"
                                        src="https://smileon.pk/wp-content/uploads/2024/07/teeth-whitening-banner-1536x336.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <Link to="/contact" className="hover:text-gray-400 text-sm px-1 py-2 font-semibold text-blue-950 transition-colors">
                        Contact
                    </Link>
                    <Link to="/blog" className="px-1 py-2 font-semibold text-sm text-blue-950 hover:text-gray-400 transition-colors">
                        Blog
                    </Link>
                </div>

                {/* Right: CTA Buttons */}
                    <div className="hidden sm:flex items-center gap-3 sm:gap-3 lg:gap-4 flex-shrink-0 whitespace-nowrap order-3">

  {/* Call Now */}
  <button
    className="
      px-3 sm:px-4 lg:px-6
  py-3 lg:py-3
  text-xs sm:text-sm
  font-bold text-white
  bg-blue-900
  rounded-md
  whitespace-nowrap
  cursor-pointer

  transform-gpu
  transition-all duration-300 ease-out
  animate-blink3d
  hover:animate-none
  hover:-translate-y-1
  hover:bg-brandDark
    "
  >
    Call Now
  </button>

  {/* Book Appointment */}
  <Link to="/book-appointment">
  <button
    className="
      px-3 sm:px-4 lg:px-6
  py-3 lg:py-3
  text-xs sm:text-sm
  font-bold text-white
  bg-blue-900
  rounded-md
  whitespace-nowrap
  cursor-pointer

  transform-gpu
  transition-all duration-300 ease-out
  animate-blink3d
  hover:animate-none
  hover:-translate-y-1
  hover:bg-brandDark
    "
  >
    Book Appointment
  </button>
  </Link>

</div>

                

                {/* Hamburger Icon */}
                <div className="flex lg:hidden flex-1 justify-center items-center order-2">
                    <button onClick={() => setIsMobileMenuOpen(true)} className="w-10 h-10 flex items-center justify-center text-blue-900">
                        <Menu size={32} />
                    </button>
                </div>
            </div>

            {/* Mobile Drawer (SLIDES FROM LEFT) */}
            <div
                className={`fixed inset-0 bg-black/60 z-[100] transition-opacity duration-300 ${
                    isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
                onClick={closeAll}
            >
                <div
                    className={`absolute left-0 top-0 h-full w-[320px] bg-white shadow-2xl transition-transform duration-300 overflow-y-auto ${
                        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex justify-between items-center p-6 border-b border-slate-100">
                        <span className="font-bold text-2xl text-brandDark italic">SmileExpert</span>
                        <button onClick={closeAll} className="text-slate-400 p-2">
                            <X size={32} />
                        </button>
                    </div>

                    <nav className="flex flex-col p-6 space-y-2 overflow-y-auto">
                        <Link to="/" onClick={closeAll} className="py-3 font-bold text-slate-800 border-b border-slate-50">
                            Home
                        </Link>

                        {/* About Accordion */}
                        <div>
                            <button
                                onClick={() => toggleAccordion("about")}
                                className="w-full flex justify-between items-center py-3 font-bold text-slate-800 hover:text-slate-900 border-b border-slate-50"
                            >
                                About <ChevronRight size={18} className={`transition-transform ${activeAccordion === "about" ? "rotate-90" : ""}`} />
                            </button>
                            {activeAccordion === "about" && (
                                <div className="pl-4 bg-slate-50 flex flex-col">
                                    <Link
                                      to="/about/meet-our-team"
                                      onClick={closeAll}
                                      className="!text-slate-700 hover:!text-slate-900 no-underline"
                                    >
                                     Meet the Team
                                    </Link>

                                    <Link
                                     to="/about/our-values"
                                    onClick={closeAll}
                                className="!text-slate-700 hover:!text-slate-900 no-underline"
                                    >
                                    Our Values
                                </Link>
                                </div>
                            )}
                        </div>

                        {/* Problems Accordion */}
                        <div>
                            <button
                                onClick={() => toggleAccordion("problems")}
                                className="w-full flex justify-between items-center py-3 font-bold text-slate-800 border-b border-slate-50"
                            >
                                Dental Problems{" "}
                                <ChevronRight size={18} className={`transition-transform ${activeAccordion === "problems" ? "rotate-90" : ""}`} />
                            </button>
                            {activeAccordion === "problems" && (
                                <div className="pl-4 bg-slate-50 flex flex-col">
                                    <Link to="/p/wisdom" onClick={closeAll} className="py-2 text-sm text-slate-800  hover:!text-slate-900 no-underline font-bold">
                                        Teeth & Gums
                                    </Link>
                                    <Link className=" hover:!text-slate-900 no-underline !text-slate-700" to="/wisdom-teeth" onClick={closeAll} >
                                        Wisdom Teeth
                                    </Link>
                                    <Link className=" hover:!text-slate-900 no-underline !text-slate-700" to="/broken-chipped-tooth" onClick={closeAll} >
                                        Broken Chipped Tooth
                                    </Link>
                                    <Link className=" hover:!text-slate-900 no-underline !text-slate-700" to="/toothache" onClick={closeAll} >
                                        Toothache
                                    </Link>
                                    <Link className=" hover:!text-slate-900 no-underline !text-slate-700" to="/receding-gums" onClick={closeAll} >
                                        Reciding Gums
                                    </Link>
                                    <Link className=" hover:!text-slate-900 no-underline !text-slate-700" to="/teeth-cleaning" onClick={closeAll} >
                                        Teeth Cleaning
                                    </Link>
                                    <Link className=" hover:!text-slate-900 no-underline !text-slate-700" to="/gum-disease" onClick={closeAll} >
                                        Gum Disease
                                    </Link>
                                    <Link className=" hover:!text-slate-900 no-underline !text-slate-700" to="/teeth-grinding" onClick={closeAll} >
                                        Teeth grinding
                                    </Link>
                                    <Link className=" hover:!text-slate-900 no-underline !text-slate-700" to="/jaw-pain" onClick={closeAll} >
                                        Jaw Pain
                                    </Link>
                                    <Link className=" hover:!text-slate-900 no-underline !text-slate-700" to="/bad-breath" onClick={closeAll} >
                                        Bad Breath
                                    </Link>
                                    <Link className=" hover:!text-slate-900 no-underline !text-slate-700" to="/sore-teeth-treatment" onClick={closeAll} >
                                        Sensitive & Sore Teeth
                                    </Link>
                                    <Link className=" hover:!text-slate-900 no-underline !text-slate-700" to="/abscess-teeth-treatment" onClick={closeAll} >
                                        Tooth Abscess
                                    </Link>
                                    <Link className=" hover:!text-slate-900 no-underline !text-slate-700" to="/mouth-ulcer-treatment" onClick={closeAll} >
                                        Mouth Sores
                                    </Link>
                                    <Link className=" hover:!text-slate-900 no-underline !text-slate-700" to="/teeth-filling-treatment" onClick={closeAll} >
                                        Teeth Filling
                                    </Link>
                                    <Link className=" hover:!text-slate-900 no-underline !text-slate-700" to="/amalgam-filling-treatment" onClick={closeAll} >
                                        Replacing a Amalgam
                                    </Link>
                                    <Link className=" hover:!text-slate-900 no-underline !text-slate-700" to="/teeth-filling-treatment" onClick={closeAll} >
                                        Filling
                                    </Link>
                                    <Link className=" hover:!text-slate-900 no-underline !text-slate-700" to="/dry-mouth-treatment" onClick={closeAll} >
                                        Dry Mouth
                                    </Link>
                                    <Link className=" hover:!text-slate-900 no-underline font-bold !text-slate-800 py-2" to="/p/toothache" onClick={closeAll} >
                                        Cosmetic Improvement
                                    </Link>
                                    <Link className=" hover:!text-slate-900 no-underline !text-slate-700" to="/yellow-teeth-treatment" onClick={closeAll} >
                                        Yellow Teeth
                                    </Link>
                                    <Link className=" hover:!text-slate-900 no-underline !text-slate-700" to="/missing-teeth-treatment" onClick={closeAll} >
                                        Missing Teeth
                                    </Link>
                                    <Link className=" hover:!text-slate-900 no-underline !text-slate-700" to="/worn-teeth-treatment" onClick={closeAll} >
                                        Worn Teeth
                                    </Link>
                                    <Link className=" hover:!text-slate-900 no-underline !text-slate-700" to="/crooked-teeth-treatment" onClick={closeAll} >
                                        Crooked Teeth
                                    </Link>
                                    <Link className=" hover:!text-slate-900 no-underline font-bold py-2 !text-slate-800" to="/p/toothache" onClick={closeAll} >
                                        Common Issues
                                    </Link>
                                    <Link className=" hover:!text-slate-900 no-underline !text-slate-700" to="/emergency-dentist" onClick={closeAll} >
                                        Emergency Dentist
                                    </Link>
                                    <Link className=" hover:!text-slate-900 no-underline !text-slate-700" to="/dental-anxiety" onClick={closeAll} >
                                        Dental Anxiety
                                    </Link>
                                    <Link className=" hover:!text-slate-900 no-underline !text-slate-700" to="/oral-cancer" onClick={closeAll} >
                                        Oral Cancer
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* Treatments Accordion */}
                        <div>
                            <button
                                onClick={() => toggleAccordion("treatments")}
                                className="w-full flex justify-between items-center py-3 font-bold text-slate-800 border-b border-slate-50"
                            >
                                Treatments{" "}
                                <ChevronRight size={18} className={`transition-transform ${activeAccordion === "treatments" ? "rotate-90" : ""}`} />
                            </button>
                            {activeAccordion === "treatments" && (
                                <div className="pl-4 bg-slate-50 flex flex-col">
                                    <Link className="hover:!text-slate-900 no-underline font-bold !text-slate-800 py-2 text-sm" to="/t/scaling" onClick={closeAll}>
                                        Dental Services
                                    </Link>
                                    <Link className=" hover:!text-slate-900 no-underline! text-slate-700" to="/t/polishing" onClick={closeAll} >
                                        Scaling & Polishing
                                    </Link>
                                    <Link className=" hover:!text-slate-900 no-underline !text-slate-700" to="/t/fillings" onClick={closeAll} >
                                        Fillings
                                    </Link>
                                    <Link className=" hover:!text-slate-900 no-underline !text-slate-700"  to="/t/canals" onClick={closeAll} >
                                        Root Canals
                                    </Link>
                                    <Link className=" hover:!text-slate-900 no-underline !text-slate-700" to="/t/extraction" onClick={closeAll} >
                                        Tooth Extraction
                                    </Link>
                                    <Link className=" hover:!text-slate-900 no-underline !text-slate-700"  to="/t/tmj" onClick={closeAll} >
                                        TMJ Treatment
                                    </Link>
                                    <Link className=" hover:!text-slate-900 no-underline !text-slate-700"  to="/t/wisdom" onClick={closeAll} >
                                        Wisdom Teeth Removal
                                    </Link>
                                    <Link className=" hover:!text-slate-900 no-underline !text-slate-700" to="/treatment/exam" onClick={closeAll} >
                                        Exam & X-Ray Checkup
                                    </Link>
                                    <Link className=" hover:!text-slate-900 no-underline !text-slate-700" to="/t/dentures" onClick={closeAll} >
                                        Dentures
                                    </Link>
                                    <Link  className="no-underline text-slate-800 font-bold hover:!text-slate-900 py-2 text-sm" to="/t/whitening" onClick={closeAll}>
                                        Cosmetic Services
                                    </Link>
                                    <Link className=" hover:!text-slate-900 no-underline !text-slate-700" to="/treatment/whitening" onClick={closeAll} >
                                        Teeth Whitening
                                    </Link>
                                    
                                    <Link className=" hover:!text-slate-900 no-underline !text-slate-700" to="/t/dentalbraces" onClick={closeAll} >
                                        Dental Braces
                                    </Link>
                                    <Link className=" hover:!text-slate-900 no-underline !text-slate-700"  to="/t/implants" onClick={closeAll} >
                                        Dental Implants
                                    </Link>
                                    <Link className=" hover:!text-slate-900 no-underline !text-slate-700" to="/t/dentalcrowns" onClick={closeAll} >
                                        Dental Crowns
                                    </Link>
                                    <Link className=" hover:!text-slate-900 no-underline !text-slate-700" to="/t/implants" onClick={closeAll} >
                                        Dental Bridge
                                    </Link>
                                    <Link className=" hover:!text-slate-900 no-underline !text-slate-700"  to="/t/veneer" onClick={closeAll} >
                                        Dental Veneers
                                    </Link>
                                    <Link className=" hover:!text-slate-900 no-underline !text-slate-700" to="/t/orthodontist" onClick={closeAll} >
                                        Orthodontics
                                    </Link>
                                    <Link className=" hover:!text-slate-900 no-underline !text-slate-700" to="/treatment/makeover" onClick={closeAll} >
                                        Smile Makeover
                                    </Link>
                                    <Link className=" hover:!text-slate-900 no-underline font-bold py-2 !text-slate-800" to="/treatment/specialist py-2 text-sm" onClick={closeAll} >
                                        Dental Specialist
                                    </Link>
                                    <Link className=" hover:!text-slate-900 no-underline !text-slate-700" to="/treatment/endo" onClick={closeAll} >
                                        Endodontist Services
                                    </Link>
                                    <Link className=" hover:!text-slate-900 no-underline !text-slate-700" to="/treatment/facial" onClick={closeAll} >
                                        Oral & Maxillofacial
                                    </Link>
                                    <Link className=" hover:!text-slate-900 no-underline !text-slate-700" to="/treatment/specialist" onClick={closeAll} >
                                        Orthodontist Specialist
                                    </Link>
                                    <Link className=" hover:!text-slate-900 no-underline !text-slate-700" to="/treatment/pediatric" onClick={closeAll} >
                                        Pediatric Dentist
                                    </Link>
                                    <Link className=" hover:!text-slate-900 no-underline !text-slate-700"  to="/treatment/periodontist" onClick={closeAll}>
                                        Periodontist Services
                                    </Link>
                                    <Link className=" hover:!text-slate-900 no-underline !text-slate-700" to="/treatment/prosthodontist" onClick={closeAll} >
                                        Prosthodontist Services
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* Before & after */}
                        <div>
                            <button
                                onClick={() => toggleAccordion("before&after")}
                                className="w-full flex justify-between items-center py-3 font-bold text-slate-800 border-b border-slate-50"
                            >
                                Before & After{" "}
                                <ChevronRight size={18} className={`transition-transform ${activeAccordion === "before&after" ? "rotate-90" : ""}`} />
                            </button>
                            {activeAccordion === "before&after" && (
                                <div className="pl-4 bg-slate-50 flex flex-col">
                                    <Link className="no-underline text-slate-600  hover:!text-slate-900" to="/braces-before-and-after" onClick={closeAll} >
                                        Braces - Before & After
                                    </Link>
                                    <Link className="no-underline text-slate-600 hover:!text-slate-900 " to="/invisalign-before-and-after" onClick={closeAll} >
                                        Invisalign - Before & After
                                    </Link>
                                    <Link className="no-underline text-slate-600 hover:!text-slate-900" to="/crowns-before-and-after" onClick={closeAll} >
                                        Crowns - Before & After
                                    </Link>
                                    <Link className="no-underline text-slate-600 hover:!text-slate-900" to="/veneers-before-and-after" onClick={closeAll} >
                                        veneers - Before & After
                                    </Link>
                                    <Link className="no-underline text-slate-600 hover:!text-slate-900" to="/teeth-whitening-before-and-after" onClick={closeAll} >
                                        Teeth Whitening - Before & After
                                    </Link>
                                    <Link className="no-underline text-slate-600" to="/dental-implants-before-and-after" onClick={closeAll} >
                                        Dental Implants - Before & After
                                    </Link>
                                    <Link className="no-underline text-slate-600 hover:!text-slate-900" to="/dental-bonding-before-and-after" onClick={closeAll} >
                                        Dental Bonding - Before & After
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* Patient Safety */}
                        <div>
                            <button
                                onClick={() => toggleAccordion("patientSafety")}
                                className="w-full flex justify-between items-center py-3 font-bold text-slate-800 border-b border-slate-50"
                            >
                                Patient Safety{" "}
                                <ChevronRight size={18} className={`transition-transform ${activeAccordion === "patientSafety" ? "rotate-90" : ""}`} />
                            </button>
                            {activeAccordion === "patientSafety" && (
                                <div className="pl-4 bg-slate-50 flex flex-col">
                                    <Link className="no-underline text-slate-600  hover:!text-slate-900" to="/7x-safety" onClick={closeAll} >
                                        7X Safety
                                    </Link>
                                    <Link className="no-underline text-slate-600  hover:!text-slate-900" to="/4-step-sterilization" onClick={closeAll} >
                                        4 Step Sterilization
                                    </Link>
                                    <Link className="no-underline text-slate-600  hover:!text-slate-900" to="/safety-equipment" onClick={closeAll} >
                                        Safety Equipments
                                    </Link>
                                    <Link className="no-underline text-slate-600  hover:!text-slate-900" to="/equipment-technology" onClick={closeAll} >
                                        Equipments & Technology
                                    </Link>
                                    <Link className="no-underline text-slate-600" to="/quality" onClick={closeAll} >
                                        Quality
                                    </Link>
                                </div>
                            )}
                        </div>

                        
                        <Link to="/contact" onClick={closeAll} className="hover:text-gray-400 py-3 font-bold text-slate-800 border-b border-slate-50 no-underline">
                            Contact
                        </Link>
                        <Link to="/blog" onClick={closeAll} className="py-3 font-bold text-slate-800  no-underline">
                            Blog
                        </Link>

                    <div className="pt-6 space-y-4 flex flex-col lg:hiden xl:flex 2xl:hidden w-full  bg-[#e0f2ff] p-4 rounded-2xl ">

  {/* Call Now Button */}
  <button className="
  relative w-full lg:w-auto py-3 px-6 font-bold text-white
  rounded-2xl bg-gradient-to-br from-brandDark to-[#142f60]
  transition-all duration-300 ease-out
  hover:-translate-y-1 lg:hover:scale-105
  hover:shadow-[0_12px_25px_rgba(0,0,0,0.35)]
  active:translate-y-1 active:scale-95
  overflow-hidden whitespace-nowrap
">
  Call Now
  <span className="
    absolute top-0 left-0 w-full h-full inset-0 bg-white opacity-10
    blur-xl animate-[shine_2s_linear_infinite] pointer-events-none
  "></span>
</button>


  {/* Book Appointment Button */}
    <Link to="/book-appointment">
  <button className="
    relative w-auto py-3 px-6 font-bold text-white rounded-2xl
    bg-gradient-to-br from-brandDark to-[#142f60]
    transform transition-all duration-300 ease-out
    hover:-translate-y-1 hover:scale-105
    hover:shadow-[0_12px_25px_rgba(0,0,0,0.35)]
    active:translate-y-1 active:scale-95
    overflow-hidden whitespace-nowrap
  ">
    Book Appointmentss
    <span className="
      absolute top-0 left-0 w-full h-full bg-white opacity-10
      blur-xl animate-[shine_2s_linear_infinite] pointer-events-none
    "></span>
  </button>
  </Link>

</div>










                    </nav>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;




