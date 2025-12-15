import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
// Service ID : service_4d5lumn
// Template ID : template_bvj57ui
// Public Key : YMrK354ZbeTK6aTDL

function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [sending, setSending] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !/\S+@\S+\.\S+/.test(formData.email) || !formData.message.trim()) {
        alert('Please fill out all fields with a valid email.');
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
      alert('Message sent successfully!');
    } catch (error) {
      console.log(error.text);
      alert('Something went wrong, please try again.');
    }finally {
        setSending(false)
      }
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className='flex justify-center m-8'>
        <form onSubmit={handleSubmit}>
        <div className='flex flex-col'>
            <label className='labelForm' htmlFor="name">Name:</label>
            <input className='fillOut'
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            />
        </div>
        <div className='flex flex-col'>
            <label className='labelForm' htmlFor="email">Email:</label>
            <input className='fillOut'
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            />
        </div>
        <div className='flex flex-col'>
            <label className='labelForm' htmlFor="message">Message:</label>
            <textarea className='fillOut'
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
            ></textarea>
        </div>
        
        <button className="btn" type="submit" disabled={sending}>
          {sending ? 'Sending…' : 'Send Message'}
        </button>
        <div>Contact: MBodybetter@gmail.com</div>
        </form>
    </div>
  );
}

export default Contact;

