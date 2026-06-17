'use client';

import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, Phone, MapPin, CheckCircle, AlertCircle } from 'lucide-react';
import { personalInfo, socialLinks } from '@/lib/data';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { Button } from '@/components/ui/Button';
import { SocialIcon } from '@/components/ui/SocialIcon';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  website: string; // Honeypot field
}

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    website: '',
  });
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          website: '',
        });
        setTimeout(() => setStatus('idle'), 4000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      }
    } catch (error) {
      console.error('Contact submit error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const inputClasses =
    'w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.08] text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 text-sm focus:outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/20 transition-all duration-200';

  return (
    <section id="contact" className="relative pt-8 md:pt-10 pb-10 md:pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Get In Touch" subtitle="Contact Me" />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <RevealOnScroll direction="left">
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                I&apos;m always open to discussing new opportunities, AI
                research, internships, or interesting tech projects. Feel free
                to reach out!
              </p>
            </RevealOnScroll>

            <RevealOnScroll direction="left" delay={0.1}>
              <GlassCard padding="md" className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail size={18} className="text-primary dark:text-primary-light" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">
                    Email
                  </p>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm text-slate-900 dark:text-white hover:text-primary dark:hover:text-primary-light transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </GlassCard>
            </RevealOnScroll>

            <RevealOnScroll direction="left" delay={0.15}>
              <GlassCard padding="md" className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone size={18} className="text-blue-500 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">
                    Phone
                  </p>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="text-sm text-slate-900 dark:text-white hover:text-primary dark:hover:text-primary-light transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </GlassCard>
            </RevealOnScroll>

            <RevealOnScroll direction="left" delay={0.25}>
              <GlassCard padding="md" className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MapPin size={18} className="text-accent dark:text-accent-light" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">
                    Location
                  </p>
                  <p className="text-sm text-slate-900 dark:text-white">Gujarat, India</p>
                </div>
              </GlassCard>
            </RevealOnScroll>

            {/* Social Links */}
            <RevealOnScroll direction="left" delay={0.3}>
              <div className="flex flex-wrap gap-3 pt-2">
                {socialLinks.map((link) => (
                  <SocialIcon key={link.name} link={link} />
                ))}
              </div>
            </RevealOnScroll>
          </div>

          {/* Contact Form */}
          <RevealOnScroll direction="right" className="lg:col-span-3">
            <GlassCard padding="lg">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mb-4">
                      <CheckCircle size={32} className="text-emerald-500 dark:text-emerald-400" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      Thank you for reaching out. I&apos;ll get back to you
                      soon.
                    </p>
                  </motion.div>
                ) : status === 'error' ? (
                  <motion.div
                    key="error"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center mb-4">
                      <AlertCircle size={32} className="text-red-500 dark:text-red-400" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      Something Went Wrong
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      Please try again or contact me directly via email.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    {/* Honeypot spam filter */}
                    <input
                      type="text"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      className="hidden"
                      tabIndex={-1}
                      autoComplete="off"
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-xs font-medium text-slate-600 dark:text-slate-300 mb-2 uppercase tracking-wider"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your name"
                          className={inputClasses}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-xs font-medium text-slate-600 dark:text-slate-300 mb-2 uppercase tracking-wider"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="your@email.com"
                          className={inputClasses}
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-xs font-medium text-slate-600 dark:text-slate-300 mb-2 uppercase tracking-wider"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="What's this about?"
                        className={inputClasses}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-xs font-medium text-slate-600 dark:text-slate-300 mb-2 uppercase tracking-wider"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Your message..."
                        className={`${inputClasses} resize-none`}
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      icon={<Send size={16} />}
                      iconPosition="right"
                      className="w-full"
                      disabled={status === 'submitting'}
                    >
                      {status === 'submitting' ? 'Sending...' : 'Send Message'}
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </GlassCard>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
