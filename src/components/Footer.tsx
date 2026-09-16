export default function Footer() {
  return (
    <footer className="bg-black text-neutral-400 py-12 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <a href="#home" className="inline-block flex-col mb-6">
              <span className="text-2xl font-bold tracking-tight text-white block">
                MGI Projects
              </span>
              <span className="text-[0.65rem] uppercase tracking-wider font-bold text-blue-500">
                (Pty) Ltd
              </span>
            </a>
            <p className="text-neutral-400 leading-relaxed max-w-md font-light">
              One Company. Multiple Solutions. Reliable and professional construction, cleaning, maintenance, and facilities management services in South Africa.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-6">Quick Links</h4>
            <ul className="space-y-3 font-light">
              <li><a href="#home" className="hover:text-blue-500 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-blue-500 transition-colors">About Us</a></li>
              <li><a href="#departments" className="hover:text-blue-500 transition-colors">Departments</a></li>
              <li><a href="#services" className="hover:text-blue-500 transition-colors">Services</a></li>
              <li><a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-6">Services</h4>
            <ul className="space-y-3 text-neutral-400 font-light">
              <li>Construction & Building</li>
              <li>Renovations & Remodeling</li>
              <li>Corporate & Site Cleaning</li>
              <li>Facilities Management</li>
              <li>Plumbing & Electrical</li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500 font-light">
          <p>&copy; {new Date().getFullYear()} MGI Projects (Pty) Ltd. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-6">
            <a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-500 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
