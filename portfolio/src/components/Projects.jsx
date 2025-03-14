import { motion } from "framer-motion";
import { LeechBot, Youtube_AutoMod, payment_gateway, PongGame, arrowIcon, github as githubIcon } from "../assets";
const ProjectCard = ({ title, description, tags, image, link, github }) => {
  const isPrivate = github === "#";
  
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="group relative overflow-hidden rounded-3xl bg-neutral-900/50 p-6 hover:shadow-xl transition-all backdrop-blur-sm"
    >
      <div className="space-y-4">
        {/* Project Image */}
        <div className="relative">
          <a href={link} target="_blank" rel="noopener noreferrer" className="block">
            <div className="relative w-full h-[250px] sm:h-[400px] overflow-hidden rounded-2xl">
              <img 
                src={image} 
                alt={title} 
                className="absolute inset-0 w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </a>
          {isPrivate && (
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 bg-neutral-900/80 text-white text-xs rounded-full backdrop-blur-sm border border-neutral-700">
                Private
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <div className="flex gap-2">
              <a 
                href={github} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`p-2 ${isPrivate ? 'bg-neutral-800/50 cursor-not-allowed' : 'bg-neutral-800 hover:bg-neutral-700'} rounded-full transition-colors`}
              >
                <img src={githubIcon} alt="github" className={`w-5 h-5 [filter:invert(1)] ${isPrivate ? 'opacity-50' : ''}`} />
              </a>
              <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-blue-500 rounded-full hover:bg-blue-600 transition-colors"
              >
                <img src={arrowIcon} alt="arrow-icon" className="w-5 h-5 [filter:invert(1)]" />
              </a>
            </div>
          </div>
          
          {description && (
            <p className="text-neutral-400 text-sm line-clamp-2">
              {description}
            </p>
          )}
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {tags.map((tag, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-black/50 text-white rounded-full text-xs backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Leech Bot",
      description: "A Python and Telegram bot used to leech and mirror files using Google Drive and providing a fast downloading.",
      tags: ["Python", "Telegram Api", "Node.js", "JDownloader", "MongoDB", "Dockers" , "Heroku"],
      image: LeechBot,
      link: "#",
      github: "https://github.com/Mehul159/nabla"
    },
    {
      title: "Youtube Automod",
      description: "A web-based moderation application for moderating live streams , featuring effective moderatorless moderation for seamless and quality streams.",
      tags: ["HTML", "Javascript", "CSS", "Youtube Api", "Webhooks" , "MongoDB"],
      image: Youtube_AutoMod,
      link: "#",
      github: "https://github.com/Mehul159/Youtube-Bot"
    },
    {
      title: "Payment Gateway",
      description: "A RazorPay powered payment gateway for any type of centralized or de-centralized organization with webhooks to handel high traffic and api calls.",
      tags: ["React.js", "Razorpay API's", "Webhooks", "MongoDB", "Node.Js"],
      image: payment_gateway,
      link: "#",
      github: "https://github.com/Mehul159/Payment-Gateway"
    },
    {
      title: "Ping Pong Game",
      description: "An OpenCV and mediapipe based ping pong game controlled by hand movement.",
      tags: ["Python", "OpenCV", "Media Pipe", "Numpy"],
      image: PongGame,
      link: "#",
      github: "https://github.com/Mehul159/Ping-Pong"
    }
  ];

  return (
    <section id="work" className="w-full bg-black py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-white">My Projects</h2>
          <motion.a
            href="https://github.com/Mehul159"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="px-4 py-2 rounded-full bg-neutral-900/50 text-white text-sm backdrop-blur-sm hover:bg-neutral-800/50 transition-colors"
          >
            All Projects →
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
