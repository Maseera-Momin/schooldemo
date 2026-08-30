import React, { useState } from 'react';
import { noticesList } from '../data/schoolData';
import NoticeModal from '../components/NoticeModal';
import { Bell, Calendar, Download, Eye } from 'lucide-react';
import { motion } from 'motion/react';

export default function NoticeBoardSection({ setActivePage }) {
  const [selectedNotice, setSelectedNotice] = useState(null);

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#04439c] px-3.5 py-1 bg-blue-50 rounded-full border border-blue-100 flex items-center gap-1.5 w-fit">
              <Bell className="w-3.5 h-3.5 text-[#be185d]" /> OFFICIAL ANNOUNCEMENTS
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 mt-2">
              Notice Board & Circulars
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Admissions updates, annual exam timetables, reading initiatives, and circulars for parents.
            </p>
          </div>

          <button
            onClick={() => {
              setActivePage('notices');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#04439c] hover:text-[#be185d] transition-colors cursor-pointer"
          >
            View All Circulars Archive
          </button>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
          <div className="divide-y divide-slate-200/80">
            {noticesList.map((notice, idx) => (
              <motion.div
                key={notice.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 first:pt-0 last:pb-0 group"
              >
                <div className="space-y-1 max-w-3xl">
                  <div className="flex items-center gap-3 text-xs">
                    <span className="font-semibold text-slate-500 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#04439c]" /> {notice.date}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-blue-100/70 text-[#04439c] font-bold text-[10px] uppercase">
                      {notice.category}
                    </span>
                    {notice.urgent && (
                      <span className="px-2 py-0.5 rounded bg-red-100 text-red-700 font-bold text-[10px] uppercase">
                        Urgent
                      </span>
                    )}
                  </div>

                  <h3 className="font-bold text-slate-900 text-base group-hover:text-[#04439c] transition-colors">
                    {notice.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-1">{notice.summary}</p>
                </div>

                <div className="flex items-center space-x-3 shrink-0">
                  <button
                    onClick={() => setSelectedNotice(notice)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white border border-slate-200 hover:border-[#04439c] text-[#04439c] text-xs font-bold transition-all shadow-sm cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" /> View Notice
                  </button>

                  <button
                    onClick={() => alert(`Downloading circular: ${notice.title}.pdf`)}
                    className="p-2 rounded-lg bg-slate-200 hover:bg-[#04439c] text-slate-700 hover:text-white transition-colors cursor-pointer"
                    title="Download Official PDF"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Notice Detail Modal */}
      {selectedNotice && (
        <NoticeModal notice={selectedNotice} onClose={() => setSelectedNotice(null)} />
      )}
    </section>
  );
}
