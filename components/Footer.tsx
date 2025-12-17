import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#05080f] text-white pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* Column 1: Brand */}
            <div className="space-y-6">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-plaon-pink to-plaon-accent rotate-45 flex items-center justify-center rounded-sm">
                        <span className="text-white font-display font-bold text-xl -rotate-45">P</span>
                    </div>
                    <span className="text-2xl font-display font-bold tracking-wider">PLAON</span>
                </div>
                <p className="text-gray-400 leading-relaxed text-sm">
                    The ultimate destination for football enthusiasts. Get the latest scores, news, and AI-powered predictions for the biggest matches around the globe.
                </p>
                <div className="flex gap-4">
                    {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                        <a key={i} href="#" className="w-10 h-10 bg-white/5 hover:bg-plaon-pink flex items-center justify-center transition-colors rounded-sm">
                            <Icon size={18} />
                        </a>
                    ))}
                </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
                <h4 className="text-xl font-display font-bold uppercase mb-6">Quick Links</h4>
                <ul className="space-y-3">
                    {['About Us', 'Our Team', 'Upcoming Matches', 'Latest News', 'Contact'].map((item) => (
                        <li key={item}>
                            <a href="#" className="text-gray-400 hover:text-plaon-pink transition-colors text-sm flex items-center gap-2">
                                <span className="w-1 h-1 bg-plaon-accent rounded-full"></span> {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Column 3: Useful Links */}
            <div>
                <h4 className="text-xl font-display font-bold uppercase mb-6">Support</h4>
                <ul className="space-y-3">
                    {['Privacy Policy', 'Terms of Service', 'FAQ', 'Support Center', 'Sponsorship'].map((item) => (
                        <li key={item}>
                            <a href="#" className="text-gray-400 hover:text-plaon-pink transition-colors text-sm flex items-center gap-2">
                                <span className="w-1 h-1 bg-plaon-accent rounded-full"></span> {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Column 4: Newsletter */}
            <div>
                <h4 className="text-xl font-display font-bold uppercase mb-6">Newsletter</h4>
                <p className="text-gray-400 text-sm mb-4">Subscribe to our newsletter to get the latest updates and news.</p>
                <form className="space-y-4">
                    <div className="relative">
                        <input 
                            type="email" 
                            placeholder="Your Email" 
                            className="w-full bg-[#0b0f19] border border-white/10 px-4 py-3 text-sm focus:border-plaon-pink focus:outline-none transition-colors text-white"
                        />
                        <Mail className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={16} />
                    </div>
                    <button className="w-full py-3 bg-plaon-accent hover:bg-plaon-pink text-white font-bold uppercase text-sm tracking-wider transition-colors clip-path-slant">
                        Subscribe Now
                    </button>
                </form>
            </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; 2024 PLAON. All Rights Reserved. Designed by EnvyTheme clone.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
