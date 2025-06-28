import React from "react";
import emailjs from "emailjs-com";
import { AiOutlineMail, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { RiInstagramLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

export default function ContactInfo() {
  const contacts = [
    {
      id: 1,
      icon: AiOutlineMail,
      method: "Email",
      detail: "roshithmaha@gmail.com",
      link: "mailto:roshithmaha@gmail.com",
      btnBg: "bg-primary hover:bg-primary-hover",
      btnIconBg: "bg-[#377bbe]",
    },
    {
      id: 2,
      icon: RiInstagramLine,
      method: "Instagram",
      detail: "_.maha.__49",
      link: "https://instagram.com/_.maha.__49",
      btnBg: "bg-pink-500 hover:bg-pink-600",
      btnIconBg: "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600",
    },
    {
      id: 3,
      icon: BsWhatsapp,
      method: "WhatsApp",
      detail: "+91 9384601134",
      link: "https://api.whatsapp.com/send?phone=919384601134",
      btnBg: "bg-green-500 hover:bg-green-600",
      btnIconBg: "bg-[#26ea70]",
    },
  ];

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_44",
        "template_ewkgq2l",
        e.target,
        "9B2ijZ9hZS4HVwl7k"
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
        },
        () => {
          alert("❌ Failed to send message. Try again.");
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact" className="px-6 md:px-16 lg:px-32 py-12 bg-[#2524244f] text-white">
      <h2 className="text-4xl font-bold mt-6 mb-10 inline-block relative">
        Let’s talk on your <span className="text-gray-400">great project</span> together
        <span className="absolute bottom-0 left-1/2 w-24 h-1 bg-primary -translate-x-1/2"></span>
      </h2>

      <div className="bg-frost-dark backdrop-blur-xs rounded-3xl p-6 md:p-10 shadow-xl border border-gray-800 overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            {contacts.map(({ id, icon: Icon, method, detail, link, btnBg, btnIconBg }) => (
              <div
                key={id}
                className="flex items-center bg-frost-light rounded-2xl p-4 md:p-5 transition-transform duration-300 hover:scale-105"
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
            ))}
          </div>

          <div className="bg-[#222] rounded-2xl p-6 md:p-8 transition-transform duration-300 hover:scale-105">
            <form className="space-y-6" onSubmit={sendEmail} name="contact-form">
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
  className="btn"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10l9-9m0 0l9 9M4 21l16-9" />
  </svg>
  Send Now
</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
