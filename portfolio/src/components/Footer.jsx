import { BackgroundBeams } from "./ui/background-beams";
import { motion } from "framer-motion";

const Footer = () => {
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/Mehul159' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/mehul-khinchi-265117270/' },
    { name: 'Twitter', url: 'https://x.com/MEHUL19KHINCHI' },
  ];

  const services = [
    "Frontend Development",
    "Full Stack Development",
    "AI/ML Developer",
    "Web3 Development"
  ];

  return (
    <footer id="contact" className="relative w-full overflow-hidden">
      <BackgroundBeams />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Mehul</h3>
            <p className="text-neutral-400 max-w-xs">
              Creating digital experiences that make a difference through innovative web development and Machine Learning.
            </p>
          </div>
          
          {/* What I Do Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">What I Do</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <motion.li 
                  key={service}
                  whileHover={{ x: 5 }}
                  className="text-neutral-400 hover:text-blue-500 cursor-default flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  {service}
                </motion.li>
              ))}
            </ul>
          </div>
          
          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="text-neutral-400 hover:text-blue-500"
                >
                  {social.name}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-400 text-sm">
              © 2024 Mehul. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm text-neutral-400">
              <motion.a 
                whileHover={{ color: '#3b82f6' }}
                href="#" 
                className="hover:text-blue-500"
              >
                Privacy Policy
              </motion.a>
              <motion.a 
                whileHover={{ color: '#3b82f6' }}
                href="#" 
                className="hover:text-blue-500"
              >
                Terms of Service
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 