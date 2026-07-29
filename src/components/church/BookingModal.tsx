import React, { useState } from 'react';
import { X, Calendar, CheckCircle } from 'lucide-react';

type BookingModalProps = {
  isOpen: boolean;
  onClose: () => void;
  scheduleTitle: string;
};

export function BookingModal({ isOpen, onClose, scheduleTitle }: BookingModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', note: '' });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Tại đây bạn có thể gửi dữ liệu tới Email hoặc Google Sheets/Database
    console.log('Thông tin đăng ký:', { scheduleTitle, ...formData });
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    setFormData({ name: '', phone: '', note: '' });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
        <button 
          onClick={handleClose} 
          className="absolute right-4 top-4 text-slate-400 hover:text-slate-600"
        >
          <X size={20} />
        </button>

        {!submitted ? (
          <>
            <div className="flex items-center gap-2 text-red-800">
              <Calendar size={22} />
              <h3 className="text-lg font-bold">Đăng Ký Tham Gia</h3>
            </div>
            <p className="mt-1 text-sm text-slate-600">
              Chương trình: <span className="font-semibold text-slate-900">{scheduleTitle}</span>
            </p>

            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase text-slate-600">Họ và tên *</label>
                <input
                  type="text"
                  required
                  placeholder="Nguyễn Văn A"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:border-red-800 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-slate-600">Số điện thoại *</label>
                <input
                  type="tel"
                  required
                  placeholder="0912 345 678"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:border-red-800 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-slate-600">Ghi chú / Yêu cầu cầu nguyện</label>
                <textarea
                  rows={3}
                  placeholder="Nội dung muốn nhắn gửi..."
                  value={formData.note}
                  onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                  className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:border-red-800 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-red-800 py-2.5 text-sm font-semibold text-white shadow hover:bg-red-900 transition-colors"
              >
                Xác Nhận Đăng Ký
              </button>
            </form>
          </>
        ) : (
          <div className="py-6 text-center">
            <CheckCircle className="mx-auto text-green-600" size={48} />
            <h4 className="mt-3 text-lg font-bold text-slate-900">Đăng Ký Thành Công!</h4>
            <p className="mt-1 text-sm text-slate-600">Cảm ơn bạn đã đăng ký tham gia chương trình <span className="font-semibold">{scheduleTitle}</span>.</p>
            <button
              onClick={handleClose}
              className="mt-5 rounded-xl bg-slate-900 px-6 py-2 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Đóng
            </button>
          </div>
        )}
      </div>
    </div>
  );
}