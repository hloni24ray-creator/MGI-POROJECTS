import { motion } from 'motion/react';
import { Target, Shield, Heart, Lightbulb } from 'lucide-react';

const VALUES = [
  {
    icon: <Heart className="w-6 h-6 text-blue-600" />,
    title: 'Family Values',
    desc: 'We treat every client and project with the care and respect of family, fostering long-term relationships.'
  },
  {
    icon: <Shield className="w-6 h-6 text-blue-600" />,
    title: 'Quality & Discipline',
    desc: 'Uncompromising standards and strict project discipline ensure we deliver excellence on time, every time.'
  },
  {
    icon: <Target className="w-6 h-6 text-blue-600" />,
    title: 'Reliability',
    desc: 'A trusted partner for corporate, residential, and government projects. We do what we say we will do.'
  },
  {
    icon: <Lightbulb className="w-6 h-6 text-blue-600" />,
    title: 'Multi-Solution',
    desc: 'A single point of contact for diverse needs, streamlining your project management and reducing overhead.'
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3">About Us</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-black mb-6 leading-tight tracking-tight">
              A South African Startup Built on Service Excellence
            </h3>
            
            <div className="space-y-6 text-neutral-600 text-lg leading-relaxed font-light">
              <p>
                MGI Projects is a dynamic South African business built to provide reliable, professional, and affordable solutions across multiple sectors. What started as a vision to simplify project delivery has grown into a robust multi-department enterprise.
              </p>
              <p>
                By functioning as <strong className="font-semibold text-black">One Company with Multiple Solutions</strong>, we eliminate the need for clients to source different contractors for construction, cleaning, and maintenance. We manage it all under one roof, saving you time, money, and stress.
              </p>
              
              <div className="bg-neutral-50 p-6 rounded-sm border-l-4 border-blue-600 mt-8">
                <h4 className="font-semibold text-black mb-2 text-xl tracking-tight">Our Mission & Vision</h4>
                <p className="text-base">
                  <strong className="text-black font-semibold">Mission:</strong> To deliver superior, cost-effective project solutions through a disciplined, multi-disciplinary approach.
                  <br className="my-2" />
                  <strong className="text-black font-semibold">Vision:</strong> To become South Africa's most trusted, all-in-one corporate and residential services provider.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Values Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {VALUES.map((val, idx) => (
              <div key={idx} className="bg-white p-8 rounded-sm shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-neutral-100 hover:border-blue-200 transition-colors group">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {val.icon}
                </div>
                <h4 className="text-xl font-bold text-black mb-3 tracking-tight">{val.title}</h4>
                <p className="text-neutral-600 text-sm leading-relaxed font-light">{val.desc}</p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
