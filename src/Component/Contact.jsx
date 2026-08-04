import React, { useRef, useState, useEffect } from "react";
import { ArrowRight, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Hello SP Advertising,\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    window.open(`https://wa.me/918085354646?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative bg-gradient-to-br from-white via-[#F6FBFF] to-[#EAF6FF] py-20 sm:py-28 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div
          className={`text-center mb-12 sm:mb-20 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 border border-cyan-100 mb-5">
            <span className="text-xs sm:text-sm font-bold text-cyan-600 tracking-wider uppercase">Get In Touch</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Let's Build Your{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Growth System
            </span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Fill out the form and our team will connect with you directly on WhatsApp.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">

          {/* LEFT SIDE INFO */}
          <div className="space-y-5 sm:space-y-8">

            {/* Contact Info Card */}
            <div className="bg-white border border-gray-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-5 sm:mb-6">
                Contact Information
              </h3>

              <div className="space-y-5 text-gray-700">

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-600" />
                  </div>
                  <div>
                    <p className="text-xs uppercase text-gray-500 mb-1 tracking-wider">Phone</p>
                    <a
                      href="tel:+918085354646"
                      className="text-sm sm:text-base font-semibold hover:text-cyan-600 transition"
                    >
                      +91-8085354646
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-600" />
                  </div>
                  <div>
                    <p className="text-xs uppercase text-gray-500 mb-1 tracking-wider">Email</p>
                    <a
                      href="mailto:spadvertising@live.com"
                      className="text-sm sm:text-base font-semibold hover:text-cyan-600 transition break-all"
                    >
                      spadvertising@live.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-600" />
                  </div>
                  <div>
                    <p className="text-xs uppercase text-gray-500 mb-1 tracking-wider">Availability</p>
                    <p className="text-sm sm:text-base font-semibold">Monday – Saturday | 10:00 AM – 7:00 PM</p>
                  </div>
                </div>

              </div>
            </div>

            {/* WhatsApp CTA Box */}
            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg">
              <h4 className="text-base sm:text-lg font-bold mb-2 sm:mb-3">
                Want Faster Response?
              </h4>
              <p className="text-white/90 mb-4 sm:mb-5 text-xs sm:text-sm leading-relaxed">
                Click below to directly message us on WhatsApp.
              </p>
              <a
                href="https://wa.me/918085354646"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold hover:shadow-lg hover:-translate-y-0.5 active:scale-95 transition-all duration-300 text-sm sm:text-base"
              >
                Chat on WhatsApp
                <ArrowRight size={16} />
              </a>
            </div>

          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-white border border-gray-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl">

            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-5 sm:mb-6">
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Full Name"
                className="w-full px-4 py-3 sm:py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm sm:text-base focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition"
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Phone Number"
                className="w-full px-4 py-3 sm:py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm sm:text-base focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email Address"
                className="w-full px-4 py-3 sm:py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm sm:text-base focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                placeholder="Tell us about your project..."
                className="w-full px-4 py-3 sm:py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm sm:text-base focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none resize-none transition"
              />

              <button
                type="submit"
                className="w-full py-3.5 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold text-sm sm:text-base hover:shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-0.5 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Send via WhatsApp
                <ArrowRight size={18} />
              </button>

            </form>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;