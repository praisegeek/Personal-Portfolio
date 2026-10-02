import React, { useState } from 'react';
import { X, Check, Copy, Send, Mail } from 'lucide-react';
import { Button } from './ui/Button';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Product Design',
    message: '',
  });

  if (!isOpen) return null;

  const copyEmail = () => {
    navigator.clipboard.writeText('hello@pamelaene.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 2500);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-zinc-950/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-zinc-100 animate-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-500 hover:text-zinc-900 flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="py-12 flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-[#FDECE8] text-[#E87A6E] flex items-center justify-center mb-4">
              <Check className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-normal text-zinc-900 mb-2">Message sent!</h3>
            <p className="text-sm text-zinc-500 max-w-xs">
              Thank you for reaching out. Pamela will review your note and respond within 24 hours.
            </p>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400 mb-2">
                LET'S TALK
              </p>
              <h2 className="text-2xl sm:text-3xl font-normal tracking-tight text-zinc-900">
                Get in touch
              </h2>
              <p className="text-sm text-zinc-500 mt-1">
                Have a project or want to say hi? Send a note or reach out directly at{' '}
                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex items-center gap-1 font-medium text-zinc-900 hover:text-[#E87A6E] transition-colors underline underline-offset-2"
                >
                  hello@pamelaene.com
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3 h-3 text-zinc-400" />}
                </button>
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Maya Lin"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 text-sm focus:border-zinc-900 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="maya@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 text-sm focus:border-zinc-900 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1.5">
                  Interest / Project Type
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['Product Design', 'Frontend Dev', 'Advisory'].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setFormData({ ...formData, projectType: type })}
                      className={`py-2 px-2 text-xs font-medium rounded-xl border transition-all cursor-pointer ${
                        formData.projectType === type
                          ? 'bg-zinc-900 border-zinc-900 text-white'
                          : 'border-zinc-200 text-zinc-600 hover:border-zinc-300'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1.5">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell me about your timeline, vision, and goals..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 text-sm focus:border-zinc-900 focus:outline-none transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <Button
                  variant="primary"
                  size="md"
                  type="submit"
                  disabled={isSubmitting}
                  icon={isSubmitting ? undefined : <Send className="w-4 h-4 ml-1" />}
                  className="w-full py-3"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
