import React from 'react';
import { admissionsSteps } from '../data/schoolData';
import { motion } from 'motion/react';
import { CheckCircle2, FileText, ArrowRight, ShieldAlert } from 'lucide-react';

export default function AdmissionsTimeline({ setActivePage }) {
  const documents = [
    "Student's Official Birth Certificate Copy",
    "Student & Parent Aadhaar Card Copies",
    "Original School Leaving / Transfer Certificate (TC)",
    "3 Recent Passport-Size Photographs",
    "Previous Academic Report Card (if applicable)",
    "Address & Emergency Contact Verification"
  ];

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#04439c] px-3.5 py-1 bg-blue-100/70 rounded-full">
            ADMISSIONS 2026–27
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
            Admissions Open from Nursery to Grade 10
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Our admission process is transparent, student-friendly, and open for the upcoming academic session starting in April.
          </p>
        </div>

        {/* 4-Step Process Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {admissionsSteps.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span className="text-2xl font-serif font-bold text-[#04439c]">
                  {step.step}
                </span>
                <h3 className="font-bold text-slate-900 text-sm leading-snug">{step.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Required Documents & Application Card */}
        <div className="bg-[#021f4a] rounded-3xl p-8 lg:p-12 text-white border border-blue-900 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-300">
              REQUIRED DOCUMENTS CHECKLIST
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Application & Enrollment Checklist
            </h3>
            <p className="text-xs sm:text-sm text-blue-100/90 leading-relaxed">
              Please bring original and photocopies of the following documents to the school office in Kolhapur:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              {documents.map((doc, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{doc}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-center space-y-4">
            <h4 className="font-bold text-white text-lg">Enquire for Admission</h4>
            <p className="text-xs text-blue-200">
              Session commences in April. Office hours: 8:00 AM to 4:30 PM (Mon–Sat).
            </p>
            <button
              onClick={() => {
                setActivePage('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full py-3.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-slate-950 font-bold text-xs tracking-wider uppercase transition-colors shadow-lg cursor-pointer"
            >
              Contact School Office
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
