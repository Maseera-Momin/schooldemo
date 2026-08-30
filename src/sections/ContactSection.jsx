import React, { useState } from 'react';
import { schoolDetails } from '../data/schoolData';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    gradeLevel: 'Pre-Primary (Nursery / Kindergarten)',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.message.trim()) newErrors.message = 'Please include a message or inquiry';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  return (
    <section className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#04439c] px-3.5 py-1 bg-blue-50 rounded-full border border-blue-100">
            GET IN TOUCH
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-slate-900">
            Contact Shri Dattabal Vidyamandir
          </h2>
          <p className="text-xs sm:text-base text-slate-600">
            We welcome parents and prospective students to connect with Head Teacher Sawant Jayshree Tanaji and our administrative office in Kolhapur.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Contact Information */}
          <div className="lg:col-span-5 bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-5 sm:space-y-6">
            <h3 className="font-serif font-bold text-xl sm:text-2xl text-slate-900">School Office Details</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Our school office in Kolhapur is open Monday through Saturday for admission enquiries, circulars, and parent visits.
            </p>

            <div className="space-y-4 pt-1 text-sm text-slate-700">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-blue-100/60 text-[#04439c] shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <strong className="block text-slate-900 font-bold text-xs uppercase">School Location & Address</strong>
                  <span className="text-xs text-slate-600 leading-snug block">{schoolDetails.address}</span>
                  <span className="block text-[11px] text-amber-700 font-semibold mt-0.5">Kolhapur Block, Kolhapur District, Maharashtra (Approachable by all-weather road)</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-blue-100/60 text-[#04439c] shrink-0 mt-0.5">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <strong className="block text-slate-900 font-bold text-xs uppercase">Helpline & Office Phone</strong>
                  <a href="tel:+912312654890" className="text-xs text-[#04439c] hover:underline font-semibold block">{schoolDetails.phone}</a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-blue-100/60 text-[#04439c] shrink-0 mt-0.5">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <strong className="block text-slate-900 font-bold text-xs uppercase">Official Email</strong>
                  <a href="mailto:dattabalvidyamandir.kop@gmail.com" className="text-xs text-[#04439c] hover:underline font-semibold block break-all">{schoolDetails.email}</a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-blue-100/60 text-[#04439c] shrink-0 mt-0.5">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <strong className="block text-slate-900 font-bold text-xs uppercase">Working Hours</strong>
                  <span className="text-xs text-slate-600 block">{schoolDetails.officeHours}</span>
                </div>
              </div>
            </div>

            {/* Map Preview for Kolhapur */}
            <div className="pt-2 rounded-2xl overflow-hidden border border-slate-200">
              <iframe
                title="Shri Dattabal Vidyamandir Kolhapur Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122283.74867499645!2d74.168822!3d16.704987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1000cdec07a29%3A0xece8dda643653139!2sKolhapur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="190"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 sm:p-8 text-center space-y-4"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>
                  <h3 className="font-serif font-bold text-xl sm:text-2xl text-slate-900">Thank You for Reaching Out</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
                    Your inquiry has been received. Our administrative office and Head Teacher Sawant Jayshree Tanaji will get in touch with you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', gradeLevel: 'Pre-Primary (Nursery / Kindergarten)', message: '' });
                    }}
                    className="px-6 py-2.5 rounded-full bg-[#04439c] text-white text-xs font-bold uppercase tracking-wider cursor-pointer active:scale-95"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <h3 className="font-serif font-bold text-xl sm:text-2xl text-slate-900 mb-1 sm:mb-2">
                    Admission Inquiry Form
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 uppercase mb-1">Parent / Guardian Name *</label>
                      <input
                        type="text"
                        placeholder="e.g. Ramesh Patil"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl border text-sm focus:outline-none transition-colors ${
                          errors.name ? 'border-red-500 bg-red-50/50' : 'border-slate-300 focus:border-[#04439c]'
                        }`}
                      />
                      {errors.name && <span className="text-[11px] text-red-600 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.name}</span>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 uppercase mb-1">Email Address *</label>
                      <input
                        type="email"
                        placeholder="e.g. parent@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl border text-sm focus:outline-none transition-colors ${
                          errors.email ? 'border-red-500 bg-red-50/50' : 'border-slate-300 focus:border-[#04439c]'
                        }`}
                      />
                      {errors.email && <span className="text-[11px] text-red-600 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.email}</span>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 uppercase mb-1">Mobile Phone Number *</label>
                      <input
                        type="tel"
                        placeholder="e.g. +91 98220 12345"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl border text-sm focus:outline-none transition-colors ${
                          errors.phone ? 'border-red-500 bg-red-50/50' : 'border-slate-300 focus:border-[#04439c]'
                        }`}
                      />
                      {errors.phone && <span className="text-[11px] text-red-600 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.phone}</span>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 uppercase mb-1">Grade of Interest</label>
                      <select
                        value={formData.gradeLevel}
                        onChange={(e) => setFormData({ ...formData, gradeLevel: e.target.value })}
                        className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#04439c] bg-white cursor-pointer"
                      >
                        <option>Pre-Primary (Nursery / Kindergarten)</option>
                        <option>Primary - Grade 1</option>
                        <option>Primary - Grades 2 to 4</option>
                        <option>Upper Primary - Grades 5 to 7</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 uppercase mb-1">Message / Questions *</label>
                    <textarea
                      rows="4"
                      placeholder="Please mention any questions regarding admissions, documents, or curriculum..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl border text-sm focus:outline-none transition-colors ${
                        errors.message ? 'border-red-500 bg-red-50/50' : 'border-slate-300 focus:border-[#04439c]'
                      }`}
                    />
                    {errors.message && <span className="text-[11px] text-red-600 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.message}</span>}
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 sm:py-4 rounded-full bg-[#04439c] hover:bg-[#022c6b] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                  >
                    <Send className="w-4 h-4" /> Submit Admission Inquiry
                  </button>
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

