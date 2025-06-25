// src/components/ContactInfo.jsx
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { SiFiverr } from "react-icons/si";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";

export default function ContactInfo() {
  const contacts = [
    {
      id: 1,
      icon: AiOutlineMail,
      method: "Email",
      detail: "mradinuba@gmail.com",
      link: "mailto:mradinuba@gmail.com",
      btnBg: "bg-primary hover:bg-primary-hover",
      btnIconBg: "bg-[#377bbe]",
    },
    {
      id: 2,
      icon: RiMessengerLine,
      method: "Messenger",
      detail: "Emmanuel Eze",
      link: "https://m.me/your.profile",
      btnBg: "bg-purple-500 hover:bg-purple-600",
      btnIconBg: "bg-[#7a3ce2]",
    },
    {
      id: 3,
      icon: BsWhatsapp,
      method: "WhatsApp",
      detail: "+2348149121918",
      link: "https://api.whatsapp.com/send?phone=+2348149121918",
      btnBg: "bg-green-500 hover:bg-green-600",
      btnIconBg: "bg-[#26ea70]",
    },
  ];

  const socials = [
    { id: 1, icon: SiFiverr, url: "#" },
    { id: 2, icon: AiFillGithub, url: "#" },
    { id: 3, icon: AiFillLinkedin, url: "#" },
    { id: 4, icon: AiFillYoutube, url: "#" },
  ];

  return (
    <section
      id="contact"
      className="px-6 md:px-16 lg:px-32 py-12 bg-[#2524244f] text-white"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-10 inline-block relative">
        Let’s talk on your{" "}
        <span className="text-gray-400">great project</span> together
        <span className="absolute bottom-0 left-1/2 w-24 h-1 bg-primary -translate-x-1/2"></span>
      </h2>

      {/* ==== OUTER CARD CONTAINER ==== */}
      <div className="bg-frost-dark backdrop-blur-xs rounded-3xl p-6 md:p-10 shadow-xl border border-gray-800 overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column: Contact Cards */}
          <div className="space-y-6">
            {contacts.map(
              ({ id, icon: Icon, method, detail, link, btnBg, btnIconBg }) => (
                <div
                  key={id}
                  className="flex items-center bg-frost-light rounded-2xl p-4 md:p-5 transition-transform duration-300 hover:scale-[1.02]"
                >
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-[#222] rounded-full mr-4">
                    <Icon className="text-white text-xl" />
                  </div>
                  <div className="flex-1">
                    <h5 className="text-lg font-semibold">{method}</h5>
                    <small className="text-gray-300">{detail}</small>
                  </div>
                  <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex items-center gap-2 ${btnBg} text-white px-4 py-2 rounded-full font-medium transition-transform duration-200 hover:-translate-y-0.5`}
                  >
                    <span>Message</span>
                    <div className={`${btnIconBg} p-2 rounded-full`}>
                      <Icon className="text-white text-lg" />
                    </div>
                  </a>
                </div>
              )
            )}
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-[#222] rounded-2xl p-6 md:p-8 transition-transform duration-300 hover:scale-[1.01]">
            <form className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Your full name"
                required
                className="w-full bg-[#111] text-white placeholder-gray-500 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full bg-[#111] text-white placeholder-gray-500 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                required
                className="w-full bg-[#111] text-white placeholder-gray-500 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover px-6 py-3 rounded-xl text-white font-medium transition-transform duration-200 hover:-translate-y-0.5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 10l9-9m0 0l9 9M4 21l16-9"
                  />
                </svg>
                Send Now
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Social Links */}
        <div className="mt-10 border-t border-gray-700 pt-6 flex justify-center space-x-6">
          {socials.map(({ id, icon: Icon, url }) => (
            <a
              key={id}
              href={url}
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <Icon size={24} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
