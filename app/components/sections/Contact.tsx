'use client';

import { useState } from 'react';
import Container from '../ui/Container';
import Card from '../ui/Card';
import Button from '../ui/Button';
import AnimatedSection from '../ui/AnimatedSection';
import { contactInfo } from '../../data/portfolio';
import { ContactFormData } from '../../types';

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFocus = (fieldName: string) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 bg-blue-500 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-purple-500 rounded-full blur-3xl animate-float animate-stagger-2"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-pink-500 rounded-full blur-3xl animate-float animate-stagger-3"></div>
      </div>
      
      <Container>
        <div className="max-w-6xl mx-auto">
          <AnimatedSection animation="fade-in-up" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Get In <span className="text-gradient-primary">Touch</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's start a conversation
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedSection animation="fade-in-left" className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-gradient-secondary">
                  Let's Work Together
                </h3>
                
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                  I'm always interested in new opportunities and exciting projects. 
                  Whether you have a project in mind or just want to chat about technology, 
                  feel free to reach out!
                </p>
                
                <div className="space-y-6">
                  {[
                    { icon: '📧', label: 'Email', value: contactInfo.email, delay: 0 },
                    { icon: '📱', label: 'Phone', value: contactInfo.phone, delay: 0.1 },
                    { icon: '📍', label: 'Location', value: contactInfo.location, delay: 0.2 }
                  ].map((item, index) => (
                    <AnimatedSection
                      key={item.label}
                      animation="scale-in"
                      delay={item.delay}
                      className="flex items-center space-x-4 hover-lift p-4 rounded-xl transition-all duration-300 group"
                    >
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-2xl">{item.icon}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-gradient-primary transition-all duration-300">
                          {item.label}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                          {item.value}
                        </p>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
              
              {/* Social Links */}
              <AnimatedSection animation="fade-in-up" delay={0.5}>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Connect with me
                </h4>
                <div className="flex space-x-4">
                  {['LinkedIn', 'GitHub', 'Twitter'].map((platform, index) => (
                    <button
                      key={platform}
                      className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white hover-lift hover-glow transition-all duration-300"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {platform[0]}
                    </button>
                  ))}
                </div>
              </AnimatedSection>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in-right" className="relative">
              <Card className="p-8 glass hover-glow relative overflow-hidden">
                {/* Animated gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-50"></div>
                
                <div className="relative z-10">
                  {/* Success Message */}
                  {submitStatus === 'success' && (
                    <div className="mb-6 p-4 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 rounded-lg animate-bounce-in">
                      <p className="text-green-800 dark:text-green-200 flex items-center">
                        <span className="mr-2">✅</span>
                        Thank you! Your message has been sent successfully.
                      </p>
                    </div>
                  )}
                  
                  {/* Error Message */}
                  {submitStatus === 'error' && (
                    <div className="mb-6 p-4 bg-gradient-to-r from-red-100 to-pink-100 dark:from-red-900/20 dark:to-pink-900/20 border border-red-200 dark:border-red-800 rounded-lg animate-bounce-in">
                      <p className="text-red-800 dark:text-red-200 flex items-center">
                        <span className="mr-2">❌</span>
                        Sorry, there was an error sending your message. Please try again.
                      </p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field */}
                    <div className="relative">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => handleFocus('name')}
                        onBlur={handleBlur}
                        required
                        className={`w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300 ${
                          focusedField === 'name' ? 'transform scale-105 shadow-lg' : ''
                        }`}
                        placeholder="Your full name"
                      />
                      {focusedField === 'name' && (
                        <div className="absolute -top-1 -left-1 w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                      )}
                    </div>
                    
                    {/* Email Field */}
                    <div className="relative">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => handleFocus('email')}
                        onBlur={handleBlur}
                        required
                        className={`w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300 ${
                          focusedField === 'email' ? 'transform scale-105 shadow-lg' : ''
                        }`}
                        placeholder="your.email@example.com"
                      />
                      {focusedField === 'email' && (
                        <div className="absolute -top-1 -left-1 w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                      )}
                    </div>
                    
                    {/* Subject Field */}
                    <div className="relative">
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        onFocus={() => handleFocus('subject')}
                        onBlur={handleBlur}
                        required
                        className={`w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300 ${
                          focusedField === 'subject' ? 'transform scale-105 shadow-lg' : ''
                        }`}
                        placeholder="Project inquiry"
                      />
                      {focusedField === 'subject' && (
                        <div className="absolute -top-1 -left-1 w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                      )}
                    </div>
                    
                    {/* Message Field */}
                    <div className="relative">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => handleFocus('message')}
                        onBlur={handleBlur}
                        required
                        rows={5}
                        className={`w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300 resize-none ${
                          focusedField === 'message' ? 'transform scale-105 shadow-lg' : ''
                        }`}
                        placeholder="Tell me about your project..."
                      ></textarea>
                      {focusedField === 'message' && (
                        <div className="absolute -top-1 -left-1 w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                      )}
                    </div>
                    
                    {/* Submit Button */}
                    <Button 
                      size="lg" 
                      className="w-full hover-lift hover-glow relative overflow-hidden group" 
                      disabled={isSubmitting}
                    >
                      <span className="relative z-10">
                        {isSubmitting ? (
                          <div className="flex items-center justify-center space-x-2">
                            <div className="loading-dots scale-50">
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                            </div>
                            <span>Sending...</span>
                          </div>
                        ) : (
                          'Send Message'
                        )}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </Button>
                  </form>
                </div>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </Container>
    </section>
  );
}