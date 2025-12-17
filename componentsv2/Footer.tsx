import React from 'react';
import { Mail, Phone, TrendingUp, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#0b0f19] text-white pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-4">
        {/* Motivational Tagline */}
        <div className="text-center mb-16">
          <p className="text-gray-300 text-lg md:text-xl font-sans uppercase tracking-wider">
            DRIVEN. DISCIPLINED. DETERMINED.
          </p>
        </div>

        {/* Main Content Area */}
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto mb-16">
          {/* Left Side - Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-display font-bold uppercase text-white mb-6">
              Contact Jeremiah
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-plaon-pink flex-shrink-0" />
                <a href="mailto:jeremiah.smith@email.com" className="text-gray-300 hover:text-plaon-pink transition-colors">
                  jeremiah.smith@email.com
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-plaon-pink flex-shrink-0" />
                <a href="tel:+15551234567" className="text-gray-300 hover:text-plaon-pink transition-colors">
                  (555) 123-4567
                </a>
              </div>
              
              <div className="flex items-start gap-3 pt-2">
                <Phone size={18} className="text-gray-400 flex-shrink-0 mt-0.5" />
                <div className="text-gray-400 text-sm">
                  <span>Parent: </span>
                  <span className="text-gray-300">Mark Smith </span>
                  <a href="tel:+15559876543" className="hover:text-plaon-pink transition-colors">
                    (555) 987-6543
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Profile Links */}
          <div className="flex gap-6 justify-center md:justify-end">
            {/* MaxPreps Profile Card */}
            <a 
              href="#" 
              className="group bg-white rounded-lg p-6 flex flex-col items-center justify-center min-w-[140px] hover:scale-105 transition-transform shadow-lg"
            >
              <TrendingUp size={32} className="text-black mb-3 group-hover:scale-110 transition-transform" />
              <span className="text-black font-semibold text-sm uppercase tracking-wide">MaxPreps Profile</span>
            </a>

            {/* Instagram Card */}
            <a 
              href="#" 
              className="group bg-white rounded-lg p-6 flex flex-col items-center justify-center min-w-[140px] hover:scale-105 transition-transform shadow-lg"
            >
              <Instagram size={32} className="text-black mb-3 group-hover:scale-110 transition-transform" />
              <span className="text-black font-semibold text-sm uppercase tracking-wide">Instagram</span>
            </a>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-white/5 pt-8 text-center text-gray-500 text-sm">
          <p>Built by <a href="https://www.jadenkubon.com/" target="_blank" rel="noopener noreferrer" className="text-plaon-pink hover:underline">Jaden Kubon</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

