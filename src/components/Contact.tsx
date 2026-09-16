import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-neutral-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3">Contact Us</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-black mb-6 tracking-tight">
              Ready to start your next project?
            </h3>
            <p className="text-lg text-neutral-600 mb-10 font-light">
              Get in touch with MGI Projects today. Our team is ready to provide you with a detailed quote, professional advice, and unparalleled service.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-white shadow-sm border border-neutral-200 rounded-full flex items-center justify-center shrink-0 mr-4">
                  <Phone className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-black uppercase tracking-wider mb-1">Call Us</h4>
                  <p className="text-neutral-600 font-medium">+27 (0) 00 000 0000</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-white shadow-sm border border-neutral-200 rounded-full flex items-center justify-center shrink-0 mr-4">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-black uppercase tracking-wider mb-1">Email Us</h4>
                  <p className="text-neutral-600 font-medium">info@mgiprojects.co.za</p>
                  <p className="text-neutral-600 font-medium">quotes@mgiprojects.co.za</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-white shadow-sm border border-neutral-200 rounded-full flex items-center justify-center shrink-0 mr-4">
                  <MapPin className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-black uppercase tracking-wider mb-1">Location</h4>
                  <p className="text-neutral-600 font-medium">Johannesburg, Gauteng, South Africa</p>
                  <p className="text-neutral-500 text-sm mt-1">Available for projects across the province.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-white shadow-sm border border-neutral-200 rounded-full flex items-center justify-center shrink-0 mr-4">
                  <Clock className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-black uppercase tracking-wider mb-1">Business Hours</h4>
                  <p className="text-neutral-600 font-medium">Mon - Fri: 08:00 - 17:00</p>
                  <p className="text-neutral-600 font-medium">Sat: 08:00 - 13:00</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <a 
                href="https://wa.me/27000000000" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold px-6 py-3 rounded-sm transition-colors shadow-lg shadow-[#25D366]/20"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat with us on WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Quote Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 md:p-10 rounded-sm shadow-xl shadow-neutral-900/5 border border-neutral-100"
          >
            <h3 className="text-2xl font-bold text-black mb-6 tracking-tight">Request a Quote</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-neutral-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-neutral-50 border border-neutral-200 rounded-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-neutral-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full bg-neutral-50 border border-neutral-200 rounded-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    placeholder="082 000 0000"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-neutral-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-neutral-700 mb-2">Service Required</label>
                <select 
                  id="service" 
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                >
                  <option value="">Select a department...</option>
                  <option value="construction">Construction & Renovations</option>
                  <option value="cleaning">Cleaning Services</option>
                  <option value="maintenance">Maintenance Support</option>
                  <option value="facilities">Facilities Management</option>
                  <option value="other">Other / Multi-Service</option>
                </select>
              </div>

              <div>
                <label htmlFor="details" className="block text-sm font-semibold text-neutral-700 mb-2">Project Details</label>
                <textarea 
                  id="details" 
                  rows={4}
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none"
                  placeholder="Please describe your project or requirements..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-black hover:bg-neutral-800 text-white font-bold px-8 py-4 rounded-sm transition-colors uppercase tracking-wider text-sm shadow-lg shadow-black/10"
              >
                Submit Request
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
