import React from 'react';
import { Mail, Phone, TrendingUp, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#05080f] text-white pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-4">
        {/* Motto */}
        <div className="text-center mb-12">
          <p className="text-gray-400 uppercase tracking-wider text-sm font-sans">
            DRIVEN. DISCIPLINED. DETERMINED.
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          {/* Contact Section */}
          <div className="space-y-4">
            <h4 className="text-xl font-display font-bold text-white mb-6">Contact Jeremiah</h4>
            
            <div className="flex items-center gap-3 text-white">
              <Mail size={18} className="text-white" />
              <span>jeremiah.smith@email.com</span>
            </div>
            
            <div className="flex items-center gap-3 text-white">
              <Phone size={18} className="text-white" />
              <span>(555) 123-4567</span>
            </div>
            
            <div className="text-white mt-4">
              <span>Parent: </span>
              <span>Mark Smith (555) 987-6543</span>
            </div>
          </div>

          {/* Profile Links */}
          <div className="flex gap-4">
            {/* MaxPreps Profile */}
            <a 
              href="#" 
              className="bg-white rounded-lg p-6 flex flex-col items-center justify-center gap-2 hover:opacity-90 transition-opacity min-w-[140px]"
            >
              <TrendingUp size={24} className="text-black" />
              <span className="text-black text-sm font-medium">MaxPreps Profile</span>
            </a>

            {/* Instagram */}
            <a 
              href="#" 
              className="bg-white rounded-lg p-6 flex flex-col items-center justify-center gap-2 hover:opacity-90 transition-opacity min-w-[140px]"
            >
              <Instagram size={24} className="text-black" />
              <span className="text-black text-sm font-medium">Instagram</span>
            </a>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center text-gray-500 text-lg">
          <p>Created by: <a href="https://jadenkubon.com" target="_blank" rel="noopener noreferrer" className="text-plaon-pink hover:underline">Jaden Kubon</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
