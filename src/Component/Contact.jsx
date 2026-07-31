import React, { useRef, useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

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

    const message = `
Hello SP Advertising,

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}

Message:
${formData.message}
`;

    const encodedMessage = encodeURIComponent(message);

    // ✅ Redirect to WhatsApp
    window.open(
      `https://wa.me/918085354646?text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative bg-gradient-to-br from-white via-[#F6FBFF] to-[#EAF6FF] py-28 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
            Let’s Build Your{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Growth System
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Fill out the form and our team will connect with you directly on WhatsApp.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* LEFT SIDE INFO */}
          <div className="space-y-8">

            <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>

              <div className="space-y-5 text-gray-700 text-sm">

                <div>
                  <p className="text-xs uppercase text-gray-500 mb-1">Phone</p>
                  <a
                    href="tel:+918085354646"
                    className="font-semibold hover:text-cyan-600 transition"
                  >
                    +91-8085354646
                  </a>
                </div>

                <div>
                  <p className="text-xs uppercase text-gray-500 mb-1">Email</p>
                  <a
                    href="mailto:spadvertising@live.com"
                    className="font-semibold hover:text-cyan-600 transition"
                  >
                    spadvertising@live.com
                  </a>
                </div>

                <div>
                  <p className="text-xs uppercase text-gray-500 mb-1">
                    Availability
                  </p>
                  <p className="font-semibold">
                    Monday – Saturday | 10:00 AM – 7:00 PM
                  </p>
                </div>

              </div>
            </div>

            {/* CTA BOX */}
            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-3xl p-8 shadow-lg">
              <h4 className="text-lg font-bold mb-3">
                Want Faster Response?
              </h4>
              <p className="text-white/90 mb-5 text-sm">
                Click below to directly message us on WhatsApp.
              </p>
              <a
                href="https://wa.me/918085354646"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition"
              >
                Chat on WhatsApp <ArrowRight size={18} />
              </a>
            </div>

          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-xl">

            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Full Name"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 outline-none"
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Phone Number"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 outline-none"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email Address"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 outline-none"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                placeholder="Tell us about your project..."
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 outline-none resize-none"
              />

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                Send via WhatsApp
              </button>

            </form>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;