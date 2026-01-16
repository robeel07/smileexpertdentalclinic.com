import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-[#0c2340] text-white py-[60px] px-[40px]">
      <div className="flex justify-between flex-wrap max-w-[1400px] mx-auto gap-[40px]">

        <div className="min-w-[200px]">
          <h3 className="text-[20px] mb-[20px]">Useful Links</h3>
          <p>About Us</p>
          <p>Contact Us</p>
          <p>Meet the Team</p>
          <p>Before & After</p>
          <p>Blogs</p>
        </div>

        <div className="min-w-[200px]">
          <h3 className="text-[20px] mb-[20px]">Treatments</h3>
          <p>Exam & X-Rays Check-Up</p>
          <p>Dental Emergency</p>
          <p>Smile Makeover</p>
          <p>Veneers</p>
          <p>Dental Implants</p>
          <p>Root Canal Treatment</p>
          <p>Orthodontic Braces</p>
          <p>Clear Aligners</p>
        </div>

        <div className="min-w-[200px]">
          <h3 className="text-[20px] mb-[20px]">Dental Problems</h3>
          <p>Yellow Teeth</p>
          <p>Teeth Cleaning</p>
          <p>Missing Teeth</p>
          <p>Broken Chipped Tooth</p>
          <p>Gum Disease</p>
          <p>Crooked Teeth</p>
          <p>Sensitive Teeth</p>
          <p>Dental Anxiety</p>
        </div>

        <div className="min-w-[250px]">
          <h3 className="text-[20px] mb-[20px]">Get in touch</h3>
          <p>✉ aneelabrar555@gmail.com</p>
          <p>☏ 03008395562</p>
          <p>⚲ Saddique hospital stadium road khanewal</p>

          <p className="mt-4 font-semibold">
            🕒 Clinic Timing <br /> 11:00am – 9:00pm
          </p>

          <div className="flex gap-4 mt-6">
            <a className="w-10 h-10  flex items-center justify-center rounded-lg text-white bg-blue-500">
              <FaFacebookF />
            </a>
            <a className="w-10 h-10  flex items-center justify-center rounded-lg text-white bg-black">
              <FaInstagram />
            </a>
            <a className="w-10 h-10  flex items-center justify-center rounded-lg text-white bg-red-500">
              <FaYoutube />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
