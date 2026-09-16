import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

import constructionImg from '../assets/images/mgi_project_construction_1789549432719.jpg';
import cleaningImg from '../assets/images/mgi_project_cleaning_1789549450095.jpg';
import maintenanceImg from '../assets/images/mgi_project_maintenance_1789549463277.jpg';

const PROJECTS = [
  {
    image: constructionImg,
    title: 'Corporate Office Renovation',
    category: 'Construction & Renovations',
    desc: 'Complete strip and fit-out of a 500sqm commercial office space, including drywalling, ceilings, and custom painting.'
  },
  {
    image: cleaningImg,
    title: 'Post-Construction Site Clean',
    category: 'Cleaning Services',
    desc: 'Deep cleaning and debris removal for a newly developed residential estate, preparing units for handover.'
  },
  {
    image: maintenanceImg,
    title: 'Estate Facilities Maintenance',
    category: 'Maintenance Support',
    desc: 'Ongoing service contract providing plumbing, paving repairs, and general building upkeep for a secure estate.'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-3">Project Showcase</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            Proven Capability in Action
          </h3>
          <p className="text-lg text-neutral-400 font-light">
            A glimpse into our recent work across corporate contracts, residential upgrades, and continuous maintenance portfolios.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-neutral-900 rounded-sm overflow-hidden border border-neutral-800"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors z-10" />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wide shadow-lg">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors tracking-tight">
                  {project.title}
                </h4>
                <p className="text-neutral-400 leading-relaxed mb-6 font-light">
                  {project.desc}
                </p>
                <a href="#contact" className="inline-flex items-center text-blue-500 font-semibold hover:text-blue-400 transition-colors">
                  Discuss a similar project <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
