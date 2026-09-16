import { motion } from 'motion/react';
import { HardHat, Sparkles, Wrench, Building2, HeadphonesIcon } from 'lucide-react';

const DEPARTMENTS = [
  {
    icon: <HardHat className="w-8 h-8 text-white" />,
    title: 'Construction Department',
    desc: 'Handling ground-up builds, structural work, and major renovations with strict safety and quality standards.',
    color: 'bg-black'
  },
  {
    icon: <Sparkles className="w-8 h-8 text-white" />,
    title: 'Cleaning Department',
    desc: 'Professional corporate, residential, and site cleaning services ensuring pristine environments.',
    color: 'bg-blue-600'
  },
  {
    icon: <Wrench className="w-8 h-8 text-white" />,
    title: 'Maintenance Department',
    desc: 'Ongoing repairs, plumbing, electrical, and general upkeep to protect your property investments.',
    color: 'bg-neutral-900'
  },
  {
    icon: <Building2 className="w-8 h-8 text-white" />,
    title: 'Facilities Management',
    desc: 'Comprehensive oversight of building operations, ensuring efficiency, safety, and compliance.',
    color: 'bg-blue-800'
  },
  {
    icon: <HeadphonesIcon className="w-8 h-8 text-white" />,
    title: 'Support Services',
    desc: 'Dedicated logistics and administrative support tailored for complex project requirements.',
    color: 'bg-neutral-800'
  }
];

export default function Departments() {
  return (
    <section id="departments" className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3">Our Structure</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-black mb-6 tracking-tight">
            Five Departments. One Cohesive Standard.
          </h3>
          <p className="text-lg text-neutral-600 font-light">
            MGI Projects operates through specialized departments, allowing us to deploy expert teams for specific tasks while maintaining unified project management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-center">
          {DEPARTMENTS.map((dept, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow flex flex-col items-start ${dept.color}`}
            >
              <div className="mb-6 bg-white/20 p-4 rounded-sm backdrop-blur-sm">
                {dept.icon}
              </div>
              <h4 className="text-2xl font-bold text-white mb-4 tracking-tight">{dept.title}</h4>
              <p className="text-white/80 leading-relaxed font-light">
                {dept.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
