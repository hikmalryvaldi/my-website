import { FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi';
import profileImage from '../assets/profile.png';

function LeftSide() {
  return (
    <div className="flex flex-col h-full justify-between py-12 lg:py-0">
      <div>
        <div>
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-100">
            Hikmal Ryvaldi Pelu
          </h1>
          <h2 className="mt-3 text-xl lg:text-2xl font-medium text-slate-200">
            Junior Web Developer
          </h2>
          <img
            src={profileImage}
            className="rounded-full size-50 object-cover mt-6 border-2 border-slate-500"
          />
          <p className="mt-4 max-w-xs text-slate-400">
            Terus belajar dan latihan lebih banyak lagi ...
          </p>
        </div>

        <nav className="hidden lg:block mt-5">
          <ul>
            <li>
              <a href="#about" className="group flex items-center py-3">
                <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200">
                  About
                </span>
              </a>
            </li>
            <li>
              <a href="#technologies" className="group flex items-center py-3">
                <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200">
                  Technologies
                </span>
              </a>
            </li>
            <li>
              <a href="#projects" className="group flex items-center py-3">
                <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200">
                  Projects
                </span>
              </a>
            </li>
            <li>
              <a href="#contact" className="group flex items-center py-3">
                <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200">
                  Contact
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex items-center gap-6">
        <a
          href="https://github.com/hikmalryvaldi"
          target="_blank"
          rel="noreferrer"
          className="text-2xl text-slate-400 hover:text-slate-200 transition-colors"
        >
          <FiGithub />
        </a>
        <a
          href="https://www.instagram.com/03_hikmalryvaldi/"
          target="_blank"
          rel="noreferrer"
          className="text-2xl text-slate-400 hover:text-slate-200 transition-colors"
        >
          <FiInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/hikmal-ryvaldi-b333b4236/"
          target="_blank"
          rel="noreferrer"
          className="text-2xl text-slate-400 hover:text-slate-200 transition-colors"
        >
          <FiLinkedin />
        </a>
      </div>
    </div>
  );
}

export default LeftSide;
