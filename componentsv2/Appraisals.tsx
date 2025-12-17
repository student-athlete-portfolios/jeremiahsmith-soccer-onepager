import React from 'react';
import { User } from 'lucide-react';

interface Testimonial {
  id: string;
  quote: string;
  author: string;
}

const Appraisals: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: '1',
      quote: 'High-IQ central midfielder with strong ball control, passing accuracy, and a relentless work ethic. Known for vocal leadership on the field and maintaining academic excellence in the classroom.',
      author: 'Coach Smith'
    },
    {
      id: '2',
      quote: 'Dedicated student-athlete who balances competitive soccer with academic excellence. Demonstrates strong character, leadership, and commitment both on and off the field.',
      author: 'Principal Johnson'
    }
  ];

  return (
    <section id="appraisals" className="py-24 bg-[#0b0f19] relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
            <span className="text-plaon-pink font-bold tracking-widest uppercase mb-2 block">Recommendations</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase text-white">Testimonials & <span className="text-transparent bg-clip-text bg-gradient-to-r from-plaon-pink to-plaon-accent">Appraisals</span></h2>
            <div className="w-24 h-1 bg-plaon-pink mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-plaon-accent/20 to-plaon-pink/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-sm"></div>
              <div className="relative bg-[#131b2c] border border-white/5 p-8 group-hover:border-plaon-pink/30 transition-colors rounded-sm overflow-hidden">
                {/* Decorative skewed element */}
                <div className="absolute top-0 right-0 w-32 h-full bg-white/5 transform skew-x-12 translate-x-16 group-hover:translate-x-8 transition-transform duration-500"></div>
                
                <div className="relative z-10">
                  <p className="text-gray-300 italic text-base leading-relaxed mb-6">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="flex items-center gap-3">
                    <User size={20} className="text-plaon-pink flex-shrink-0" />
                    <span className="text-white font-semibold">{testimonial.author}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Appraisals;

