'use client';

import { useState } from 'react';
import { EnvelopeIcon, PhoneIcon, MapPinIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';
import Navigation from '@/components/Navigation';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', company: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-sky-50 dark:from-slate-900 dark:via-blue-900 dark:to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative px-6 pt-32 pb-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
              <span className="block text-gray-900 dark:text-white mb-2">Get In</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600">
                Touch
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl leading-8 text-gray-600 dark:text-gray-300">
              Ready to transform your ideas into reality? Let&apos;s discuss your next Azure project.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Let&apos;s Start a Conversation
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  Whether you&apos;re looking to build a new application, modernize existing systems, or need expert Azure consultation, we&apos;re here to help bring your vision to life.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-sky-500 text-white">
                    <EnvelopeIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Email Us</h3>
                    <p className="text-gray-600 dark:text-gray-300">hello@pdg.dev</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 text-white">
                    <PhoneIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Call Us</h3>
                    <p className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
                    <MapPinIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Visit Us</h3>
                    <p className="text-gray-600 dark:text-gray-300">FT Lauderdale, FL</p>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-sky-50 dark:from-blue-900/20 dark:to-sky-900/20 rounded-2xl border border-blue-200 dark:border-blue-800">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Why Choose PDG?
                </h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Expert Azure Cloud Engineers
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
                    99.9% Project Success Rate
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                    24/7 Support & Maintenance
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    Scalable & Future-Proof Solutions
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8 border border-gray-200 dark:border-slate-700">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700 dark:text-white transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700 dark:text-white transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700 dark:text-white transition-colors"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700 dark:text-white transition-colors"
                    placeholder="Project Discussion"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700 dark:text-white transition-colors resize-none"
                    placeholder="Tell us about your project, timeline, and requirements..."
                  />
                </div>

                {/* Success Message */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                    <p className="text-green-800 dark:text-green-300 font-medium">
                      ✅ Thank you! Your message has been sent successfully. We&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-sky-600 rounded-lg shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-sky-700 focus:ring-4 focus:ring-blue-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] transform"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <PaperAirplaneIcon className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Response Time Info */}
      <section className="py-16 px-6 sm:px-8 lg:px-12 bg-gradient-to-r from-blue-600 via-sky-600 to-indigo-600">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Quick Response Guaranteed
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            We understand that time is critical in business. Our team responds to all inquiries within 24 hours, and urgent requests get priority attention.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">&lt; 24h</div>
              <div className="text-blue-100">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">&lt; 1 Week</div>
              <div className="text-blue-100">Project Kickoff</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-blue-100">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
