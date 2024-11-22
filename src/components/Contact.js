import React from "react";

export default function Contact() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => alert("Message sent successfully!"))
      .catch((error) => alert("An error occurred: " + error.message));
  };

  return (
    <section
      id="contact"
      className="relative bg-gradient-to-b from-black to-gray-800 py-16"
    >
      <div className="container mx-auto px-6 lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Contact Me</h2>
          <p className="text-gray-400">
            Feel free to reach out using the form below or check my contact
            information.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row lg:gap-12">
          {/* Map & Contact Card Section */}
          <div className="lg:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 relative shadow-lg">
            <iframe
              width="100%"
              height="100%"
              title="map"
              className="absolute inset-0"
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              style={{ filter: "opacity(0.7)" }}
              src="https://www.google.com/maps/embed/v1/place?q=Malabon,+Metro+Manila,+Philippines&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            />
            <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/3 px-6">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">
                  Malabon City <br />
                  Metro Manila
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                  EMAIL
                </h2>
                <a className="text-indigo-400 leading-relaxed">
                  fltm2003414@gmail.com
                </a>
                <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">09957708232</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
            className="lg:w-1/2 bg-gray-800 rounded-lg p-8 shadow-lg mt-8 lg:mt-0"
          >
            {/* Hidden Netlify Input */}
            <input type="hidden" name="form-name" value="contact" />

            {/* Name Input */}
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-gray-400 font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-gray-700 text-gray-100 p-3 rounded-lg border border-gray-600 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Your name"
                required
              />
            </div>

            {/* Email Input */}
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-gray-400 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-gray-700 text-gray-100 p-3 rounded-lg border border-gray-600 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Your email"
                required
              />
            </div>

            {/* Message Input */}
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-gray-400 font-medium mb-2"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-gray-700 text-gray-100 p-3 rounded-lg border border-gray-600 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Your message"
                rows="6"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-indigo-500 text-white py-3 rounded-lg hover:bg-indigo-600 transition-all duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
