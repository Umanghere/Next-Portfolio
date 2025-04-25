"use client";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const text = "Say Hello";
  const textForm = "Hello Everyone";

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false)
    setSuccess(false)
    setLoading(true)

    emailjs
      .sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, {
        publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
      })
      .then(() => {
        console.log("SUCCESS!");
        setSuccess(true)
        form.current.reset()
        setTimeout(() => setSuccess(false), 3000);
      }, (error) => {
        console.log("FAILED...", error.text);
        setError(true)
        form.current.reset()
        setTimeout(() => setError(false), 3000);
      })
      .finally(() => {
        setLoading(false);  // Re-enable button after response
      });
  };

  return (
    <motion.div
      className="min-h-full w-screen"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.6 }}
    >
      <div className=" flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 py-16 lg:py-0">
        {/* TEXT CONTAINER  */}
        <div className="h-1/3 lg:h-[calc(100vh-6rem)] lg:w-1/2 flex items-center justify-center text-5xl sm:text-5xl md:text-6xl mb-12 lg:mb-0">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </div>

        {/* FORM Container - Updated with new minimalist design */}
        <div className="h-2/3 lg:h-[calc(95vh-6rem)] lg:w-1/2 flex items-center justify-center">
          <div className="w-full max-w-lg sm:max-w-2xl bg-white bg-opacity-80 backdrop-blur-lg rounded-xl p-6 sm:p-8">
            <div className="border-l-4 border-purple-400 pl-4 sm:pl-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8">{textForm}</h2>
              
              <form onSubmit={sendEmail} ref={form} className="space-y-6 sm:space-y-8">
                <div>
                  <label htmlFor="message" className="text-gray-700 font-medium">Dear Umang,</label>
                  <textarea
                    name="user_message"
                    id="message"
                    rows={3}
                    placeholder="Write your message here..."
                    className="w-full mt-2 px-0 py-2 bg-transparent border-b border-gray-300 focus:border-purple-400 focus:outline-none transition-all duration-200 resize-none"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="text-gray-700 font-medium">My mail address is:</label>
                  <input
                    name="user_email"
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    className="w-full mt-2 px-0 py-2 bg-transparent border-b border-gray-300 focus:border-purple-400 focus:outline-none transition-all duration-200"
                    required
                  />
                </div>
                
                <p className="text-gray-700 font-medium pt-2">Regards</p>
                
                <div className="pt-4">
                  <button 
                    type="submit" 
                    disabled={loading}
                    className="px-8 py-3 bg-transparent border-2 border-purple-400 text-purple-600 font-medium rounded-full hover:bg-purple-50 transition duration-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {loading ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        Send
                        <Send size={16} className="ml-2" />
                      </span>
                    )}
                  </button>
                </div>
              </form>
              

              {/* Success and error messages */}
              {success && (
                <div className="mt-6 text-green-600 font-medium flex items-center">
                  <CheckCircle size={16} className="mr-2" />
                  Your message has been sent successfully!
                </div>
              )}
              
              {error && (
                <div className="mt-6 text-red-600 font-medium flex items-center">
                  <AlertCircle size={16} className="mr-2" />
                  Something went wrong. Please try again.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;