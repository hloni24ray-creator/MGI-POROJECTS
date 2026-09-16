import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const CATEGORIES = [
  {
    title: 'Construction & Renovations',
    items: [
      'General Building',
      'Renovations & Remodeling',
      'Brickwork & Plastering',
      'Tiling (Floor & Wall)',
      'Paving & Driveways',
      'Painting (Interior & Exterior)',
      'Ceilings & Cornices',
      'Drywalling & Partitioning'
    ]
  },
  {
    title: 'Cleaning Services',
    items: [
      'Deep Cleaning (Pre/Post-Occupation)',
      'Office & Corporate Cleaning',
      'Residential Cleaning',
      'Construction Site Cleaning',
      'Window Cleaning',
      'Carpet & Upholstery Cleaning'
    ]
  },
  {
    title: 'Maintenance & Facilities',
    items: [
      'Facilities Support & Management',
      'Plumbing Support & Repairs',
      'Electrical Support & Maintenance',
      'General Handyman Repairs',
      'Roofing Repairs & Waterproofing',
      'Preventative Maintenance Plans'
    ]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3">Our Services</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-black mb-4 tracking-tight">
              Comprehensive Solutions for Every Project
            </h3>
            <p className="text-lg text-neutral-600 font-light">
              Whether you are a homeowner, business, property manager, or government institution, we have the skills and capacity to deliver.
            </p>
          </div>
          <a 
            href="#contact"
            className="shrink-0 bg-black hover:bg-neutral-800 text-white font-semibold px-8 py-3 rounded-sm transition-colors text-center shadow-lg shadow-neutral-900/10"
          >
            Get a Service Quote
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CATEGORIES.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-neutral-50 rounded-sm p-8 border border-neutral-200 shadow-sm"
            >
              <h4 className="text-2xl font-bold text-black mb-6 pb-4 border-b border-neutral-200 tracking-tight">
                {category.title}
              </h4>
              <ul className="space-y-4">
                {category.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mr-3 mt-0.5" />
                    <span className="text-neutral-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
