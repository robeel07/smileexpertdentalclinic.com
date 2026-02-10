
import { Link } from "react-router-dom";
import sixtyeight from "../../Images/sixtyeight.jpg";
import sixtynine from "../../Images/sixtynine.jpg";
import seventy from "../../Images/seventy.jpg";
import seventyone from "../../Images/seventyone.jpg";
import seventytwo from "../../Images/seventytwo.png";
import seventythree from "../../Images/seventythree.png";
import seventyfour from "../../Images/seventyfour.png";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";


export default function WornTeeth() {
  return (
    <>
    <div
      className="relative w-full min-h-[300px] sm:min-h-[400px] lg:min-h-[350px]
    bg-cover bg-[center_25%] flex items-center pt-28 sm:pt-32"
      style={{ backgroundImage: `url(${sixtyeight})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

    <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 className="text-white font-extrabold text-center text-3xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl
        leading-tight pt-5 pb-1 max-w-5xl -mt-12 sm:mt-0 mx-auto drop-shadow-[0_6px_20px_rgba(0,0,0,0.7)]">
      Worn Teeth Treatment in Khanewal
    </h1>
  </div>
    </div>



{/* INTRO TEXT */}
<div className="max-w-7xl mx-auto my-6 p-5 text-[16px] leading-[1.8] text-[#333] text-justify">
  <p>
    Worn teeth refer to the gradual erosion, abrasion, and loss of the tooth’s
    outer surface. This outer layer, called enamel, protects against sensitivity
    to hot, cold, and sugary foods and drinks while providing the white color of
    teeth. Our worn down teeth treatment includes veneers,
    <span className="text-[#0aa6ff] font-bold"> dental crowns </span>
    or dental bonding to strengthen and protect teeth enamel.
  </p>
</div>

{/* SYMPTOMS SECTION */}
<div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
  <div className="flex-1">
    <h2 className="text-[28px] text-[#0a1b5c] mb-4">
      Symptoms of worn teeth
    </h2>

    <p className="text-[15px] leading-[1.7] text-[#333] mb-4">
      If you notice these signs, it may be time for expert tooth enamel
      restoration treatment:
    </p>

    <ul className="list-disc pl-10 mb-4 text-[15px] leading-[1.8] text-[#333]">
      <li>
        <span className="text-[#0aa6ff] font-bold">Yellow teeth</span> from enamel loss
      </li>
      <li>Sensitivity to hot, cold or sweet foods</li>
      <li>Worn or damaged teeth due to bruxism</li>
      <li>Uneven tooth surfaces</li>
      <li>Pain while chewing</li>
    </ul>

    <p className="text-[15px] leading-[1.7] text-[#333]">
      Early treatment can help prevent further damage.
    </p>
  </div>

  <div className="flex-1">
    <img
      src={sixtynine}
      alt="Dental checkup"
      className="w-full h-full rounded-3xl object-cover"
    />
  </div>
</div>

{/* CAUSES SECTION */}
<div className="w-full bg-[#f4f9fd] px-6 py-10">
  <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    <div className="flex-1">
      <img
        src={seventy}
        alt="Dental treatment"
        className="w-full h-full rounded-3xl object-cover"
      />
    </div>

    <div className="flex-1">
      <h2 className="text-[28px] text-[#0a1b5c] mb-3">
        Causes of worn teeth
      </h2>

      <p className="text-[15px] leading-[1.7] text-[#333] mb-3">
        It is important to learn the causes of worn teeth so you do not aggravate the situation and go for worn-down teeth treatment. If the situation is left unaddressed, then you experience sensitivity, and pain, so go for tooth enamel erosion restoration before it gets late. Common causes include:It is important to learn the causes of worn teeth so you do not aggravate the situation and go for worn-down teeth treatment. If the situation is left unaddressed, then you experience sensitivity, and pain, so go for tooth enamel erosion restoration before it gets late. <span className="font-bold">Common causes include:</span> 
      </p>

      <ul className="space-y-1 pl-6 mb-3">
        {[
          "Frequent acidic food intake",
          "Tooth grinding (bruxism)",
          "Age-related enamel thinning",
          "Not drinking enough water",
          "Brushing too hard",
        ].map((item, i) => (
          <li key={i} className="flex gap-3 text-[15px] text-[#333]">
            <span className="w-[7px] h-[7px] bg-black rounded-full mt-2 shrink-0"></span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <p className="text-[15px] leading-[1.7] text-[#333]">
        If your teeth are beginning to look dull and aged, get in touch with us and learn how we can help restore and protect teeth enamel!
      </p>
    </div>
  </div>
</div>

{/* TOOTH ENAMEL SECTION */}
<div className="w-full px-6 md:px-16 lg:px-[160px] py-14">
  <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    <div className="flex-1 min-w-[280px] max-w-[600px]">
      <h2 className="text-[28px] md:text-[32px] text-[#0a1b5c] mb-4">
        What is Tooth Enamel?
      </h2>

      <p className="text-[15px] leading-[1.8] px-3 text-[#333] mb-3">
        Enamel is a thin outer layer of your teeth, protecting your teeth from sensitivity and damage in your everyday life. It is one of the strongest tissues in the human body and can protect from chewing, biting, and acids. Nonetheless, enamel is different from most tissues of the body in that it cannot regenerate once it has been damaged.
      </p>

      <p className="text-[15px] leading-[1.8] px-3 text-[#333]">
        The primary problem that develops when enamel wear is the sensitivity and the yellowish shade of teeth, as well as cavity proneness. In cases where your enamel is worn out, treatments such as tooth enamel erosion restoration can be done to save the teeth. As well as regain their functionality.
      </p>
    </div>

    <div className="flex-1">
      <img
        src={seventyone}
        alt="Dental enamel"
        className="w-full h-full rounded-3xl object-cover"
      />
    </div>
  </div>
</div>

{/* CALL TO ACTION */}
<div className="w-full text-center px-6 py-20">
  <h2 className="text-[28px] md:text-[30px] text-[#0a1b5c]  mb-3">
    In Pain? Call us Now
  </h2>

  <p className="max-w-7xl mx-auto mb-12 text-[15px] leading-[1.8] text-[#333]">
    <span className="text-[#0aa6ff] font-bold">Book online</span> or call
    <span className="text-[#0aa6ff] font-bold"> 0300-8395562</span>
  </p>

  <div className="flex justify-center gap-8 px-3 flex-wrap">
    {[
      { img: seventyfour, title: "Prosthodontist Services" },
      { img: seventytwo, title: "Fillings" },
      { img: seventythree, title: "Crowns" },
    ].map((card, i) => (
      <div
        key={i}
        className="w-[300px] bg-white rounded-[18px] px-5 py-12 shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
      >
        <img
          src={card.img}
          alt={card.title}
          className="w-[70px] h-[70px] object-contain mx-auto mb-5"
        />
        <h4 className="text-[16px] text-[#0a1a7a]">{card.title}</h4>
      </div>
    ))}
  </div>
</div>



<div className="w-full h-[180px] overflow-hidden mt-4">
  <iframe
    title="clinic-map"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.0390050498395!2d71.9162331!3d30.292951199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b557588a60575%3A0x79afa5462675bee1!2sSmile%20expert%20dental%20clinic!5e0!3m2!1sen!2s!4v1767274320473!5m2!1sen!2s"
    width="100%"
    height="450"
    style={{ border: "0" }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>

<div className="bg-[#0c2340] text-white pt-[60px] pb-[60px] px-[40px] mt-0">
  <div className="flex justify-between flex-wrap max-w-[1400px] mx-auto gap-[40px]">
    {/* COLUMN 1 */}
    <div className="min-w-[200px]">
  <h3 className="text-[20px] mb-[20px]">Useful Links</h3>

  <Link to="/about/meet-our-team" className="block my-[6px] text-inherit no-underline hover:text-blue-600">
    About Us
  </Link>

  <Link to="/contact" className="block my-[6px] text-inherit no-underline hover:text-blue-600">
    Contact Us
  </Link>

  <Link to="/about/meet-our-team" className="block my-[6px] text-inherit no-underline hover:text-blue-600">
    Meet the Team
  </Link>

  <Link to="/teeth-whitening-before-and-after" className="block my-[6px] text-inherit no-underline hover:text-blue-600">
    Before & After
  </Link>

  <Link to="/blog" className="block my-[6px] text-inherit no-underline hover:text-blue-600">
    Blogs
  </Link>
</div>


    
    <div className="min-w-[200px]">
  <h3 className="text-[20px] mb-[20px]">Treatments</h3>

  <Link to="/treatment/exam" className="block my-[6px] text-inherit no-underline hover:text-blue-600">
    Exam & X-Rays Check-Up
  </Link>

  <Link to="/emergency-dentist" className="block my-[6px] text-inherit no-underline hover:text-blue-600">
    Dental Emergency
  </Link>

  <Link to="/t/implants" className="block my-[6px] text-inherit no-underline hover:text-blue-600">
    Smile Makeover
  </Link>

  <Link to="/t/veneer" className="block my-[6px] text-inherit no-underline hover:text-blue-600">
    Veneers
  </Link>

  <Link to="/t/implants" className="block my-[6px] text-inherit no-underline hover:text-blue-600">
    Dental Implants
  </Link>

  <Link to="t/canals" className="block my-[6px] text-inherit no-underline hover:text-blue-600">
    Root Canal Treatment
  </Link>

  <Link to="/t/orthodontist" className="block my-[6px] text-inherit no-underline hover:text-blue-600">
    Orthodontic Braces
  </Link>

  
</div>


    <div className="min-w-[200px]">
  <h3 className="text-[20px] mb-[20px]">Dental Problems</h3>

  <Link to="/yellow-teeth-treatment" className="block my-[6px] text-inherit no-underline hover:text-blue-600">
    Yellow Teeth
  </Link>

  <Link to="/teeth-cleaning" className="block my-[6px] text-inherit no-underline hover:text-blue-600">
    Teeth Cleaning
  </Link>

  <Link to="/missing-teeth-treatment" className="block my-[6px] text-inherit no-underline hover:text-blue-600">
    Missing Teeth
  </Link>

  <Link to="/broken-chipped-tooth" className="block my-[6px] text-inherit no-underline hover:text-blue-600">
    Broken Chipped Tooth
  </Link>

  <Link to="/gum-disease" className="block my-[6px] text-inherit no-underline hover:text-blue-600">
    Gum Disease
  </Link>

  <Link to="/crooked-teeth-treatment" className="block my-[6px] text-inherit no-underline hover:text-blue-600">
    Crooked Teeth
  </Link>

  <Link to="/sore-teeth-treatment" className="block my-[6px] text-inherit no-underline hover:text-blue-600">
    Sensitive & Sore Teeth
  </Link>

  <Link to="/dental-anxiety" className="block my-[6px] text-inherit no-underline hover:text-blue-600">
    Dental Anxiety
  </Link>
</div>


    <div className="min-w-[200px]">
  <h3 className="text-[20px] mb-[20px]">Patient Safety</h3>

  <Link to="/7x-safety" className="block my-[6px] text-inherit no-underline hover:text-blue-600">
    7X SAFETY
  </Link>

  <Link to="/4-step-sterilization" className="block my-[6px] text-inherit no-underline hover:text-blue-600">
    4 Step Sterilization
  </Link>

  <Link to="/safety-equipment" className="block my-[6px] text-inherit no-underline hover:text-blue-600">
    Safety Equipment
  </Link>

  <Link to="/equipment-technology" className="block my-[6px] text-inherit no-underline hover:text-blue-600">
    Equipment & Technology
  </Link>

  <Link to="/quality" className="block my-[6px] text-inherit no-underline hover:text-blue-600">
    Quality
  </Link>
</div>


    <div className="min-w-[250px]">
              <h3 className="text-[20px] mb-[20px]">Get in touch</h3>
        
              <p className="my-2 flex gap-[10px] ">📧 aneelabrar555@gmail.com</p>
        
              <p className="my-3 flex gap-[10px]  ">📞 03008395562</p>
        
              <p className="my-2 flex gap-[10px] px-2">
                  <span className="">📍 Saddique Hospital Stadium Road Khanewal</span>
              </p>
        
              <p className="mt-6 font-semibold "> 🕒 Clinic Timing <br/>   <span className="ml-7">11:00am to 9:00pm</span></p>
        
              <div className="text-left bg-[#0c2340] text-white py-[50px] px-[20px]">
                <div className="flex gap-[15px] mt-[20px]">
                  <a

                      href="https://www.facebook.com/share/17zJppb7qh/"

                      target="_blank"

                      rel="noopener noreferrer"

                      className="w-[35px] h-[35px] bg-blue-900 flex justify-center items-center rounded-[8px] no-underline"

                      aria-label="Follow us on Facebook"

                    >

                      <FaFacebookF size={20} color="white" />
                  </a>
        
                  <a

        
                      href="https://instagram.com"

        
                      target="_blank"

        
                      rel="noopener noreferrer"

        
                      className="w-[35px] h-[35px] bg-[#000000] flex justify-center items-center rounded-[8px] no-underline"

        
                      aria-label="Follow us on Instagram"

        
                    >

        
                      <FaInstagram size={20} color="white" />
                  </a>
        
                  <a

        
                      href="https://youtube.com"

        
                      target="_blank"

        
                      rel="noopener noreferrer"

        
                      className="w-[35px] h-[35px] bg-[#FF0000] flex justify-center items-center rounded-[8px] no-underline"

        
                      aria-label="Subscribe to our YouTube channel"

        
                    >

        
                      <FaYoutube size={22} color="white" />
                  </a>
                </div>
              </div>
            </div>
    
  </div>
   <div className="w-full text-center justify-end mb-0 border-t border-gray-300 pt-4">
  <p className="text-sm text-gray-400">
    © SmileExpert
    <span className="mx-2 text-gray-600">|</span>
    Powered by{" "}
    <a
      href="https://verdant-soft.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-300 hover:text-blue-400 no-underline font-medium transition-colors duration-300 "
    >
      Verdant Soft
    </a>
  </p>
</div>

</div>




</>
  )
}








