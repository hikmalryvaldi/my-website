import ProjectCard from '../components/ProjectCard';
import { FiArrowUpRight } from 'react-icons/fi';

import yt from '../assets/cloneyt.png';
import webshell from '../assets/webshell.png';
import genshin from '../assets/genshin.png';
import dice from '../assets/randomdice.png';

const projectsData = [
  {
    title: 'Youtube Clone',
    description:
      'Melakukan cloning youtube dengan integrasi API menggunakan YT API 3',
    tags: ['Javascript', 'TailwindCss', 'Fetch'],
    imageUrl: yt,
    projectUrl: '#',
  },
  {
    title: 'WEB SHELL',
    description:
      'Membuat Web Shell sebuah skrip berbahaya yang di-upload ke server web agar penyerang bisa mendapatkan akses jarak jauh (remote access) ke sistem korban.',
    tags: [
      'Reverse Shell',
      'Bind Shell',
      'RCE',
      'PHP',
      'Linux',
      'Metasploitable',
    ],
    imageUrl: webshell,
    projectUrl: '#',
  },
  {
    title: 'Genshin Impact',
    description:
      'Cloning sebuah website game genshin impact dengan updatean terbaru termasuk banner dan event',
    tags: ['HTML', 'CSS', 'Javascript'],
    imageUrl: genshin,
    projectUrl: '#',
  },
  {
    title: 'Dice Game',
    description:
      'Website yang dibuat untuk melatih pemahaman saya tentang penggunaan kode Vanilla Javascript',
    tags: ['HTML', 'CSS', 'Javascript'],
    imageUrl: dice,
    projectUrl: '#',
  },
];

function Projects() {
  return (
    <section id="projects" className="scroll-mt-24">
      <ul className="group/list">
        {projectsData.map((project) => (
          <li key={project.title} className="mb-12">
            <ProjectCard {...project} />
          </li>
        ))}
      </ul>

      <div className="mt-8 text-center">
        <a
          href="https://github.com/hikmalryvaldi"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 px-6 py-3
                     font-semibold text-slate-200
                     bg-slate-800/60 rounded-lg
                     transition-all duration-300
                     hover:bg-slate-700/80 hover:text-sky-300"
        >
          <span>View more on GitHub</span>
          <FiArrowUpRight className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  );
}

export default Projects;
