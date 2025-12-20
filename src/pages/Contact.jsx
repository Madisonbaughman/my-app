import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Icon from "../components/Icon";
// Service ID : service_4d5lumn
// Template ID : template_bvj57ui
// Public Key : YMrK354ZbeTK6aTDL

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.name.trim() ||
      !/\S+@\S+\.\S+/.test(formData.email) ||
      !formData.message.trim()
    ) {
      alert("Please fill out all fields with a valid email.");
      return;
    }
    setSending(true);
    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      );
      console.log(result.text);
      alert("Message sent successfully!");
    } catch (error) {
      console.log(error.text);
      alert("Something went wrong, please try again.");
    } finally {
      setSending(false);
    }
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="custom-container flex justify-between flex-col lg:flex-row gap-y-10">
      <div className="w-full max-w-[508px] lg:max-w-[400px] mx-auto lg:mx-0">
        <h2 className="text-2xl sm:text-3xl lg:text-[42px] font-bold font-['Cormorant_Infant'] mb-4">
          Connect With Us
        </h2>
        <p className="font-bold font-['Cormorant_Infant'] text-black/70 mb-10">
          Have a question or want to learn more about our services? We’d love to
          hear from you. Send us a message and we’ll get back to you as soon as
          possible.
        </p>
        <a className="send-mail" href="mailto:MBodybetter@gmail.com">
          <Icon /> MBodybetter@gmail.com
        </a>
      </div>
      <form
        className="w-full max-w-[508px] mx-auto lg:mx-0 grid grid-cols-2 gap-4"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-1.5 col-span-2 sm:col-span-1">
          <label
            className="font-['Cormorant_Infant'] font-bold leading-[100%] after:content-['*'] after:text-[#F81919]"
            htmlFor="name"
          >
            First Name
          </label>
          <input
            className="fillOut"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col gap-1.5 col-span-2 sm:col-span-1">
          <label
            className="font-['Cormorant_Infant'] font-bold leading-[100%] after:content-['*'] after:text-[#F81919]"
            htmlFor="lname"
          >
            Last Name*
          </label>
          <input
            className="fillOut"
            type="text"
            id="lname"
            name="lname"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col gap-1.5 col-span-2">
          <label
            className="font-['Cormorant_Infant'] font-bold leading-[100%] after:content-['*'] after:text-[#F81919]"
            htmlFor="email"
          >
            Email:
          </label>
          <input
            className="fillOut"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-span-2 flex flex-col">
          <label
            className="font-['Cormorant_Infant'] font-bold leading-[100%] after:content-['*'] after:text-[#F81919] mb-1.5"
            htmlFor="message"
          >
            Message:
          </label>
          <textarea
            className="fillOut"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
          ></textarea>
        </div>
        <button
          className="btn col-span-2 w-full !mt-4"
          type="submit"
          disabled={sending}
        >
          {sending ? "Submit" : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default Contact;
