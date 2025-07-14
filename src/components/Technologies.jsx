import {
  SiJavascript,
  SiPhp,
  SiReact,
  SiLaravel,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiGit,
} from 'react-icons/si';

const technologies = [
  {
    name: 'JavaScript',
    icon: SiJavascript,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    color: 'group-hover:text-yellow-400',
  },
  {
    name: 'PHP',
    icon: SiPhp,
    url: 'https://www.php.net',
    color: 'group-hover:text-indigo-400',
  },
  {
    name: 'React Js',
    icon: SiReact,
    url: 'https://react.dev',
    color: 'group-hover:text-sky-400',
  },
  {
    name: 'Laravel',
    icon: SiLaravel,
    url: 'https://laravel.com',
    color: 'group-hover:text-red-500',
  },
  {
    name: 'Node Js',
    icon: SiNodedotjs,
    url: 'https://nodejs.org',
    color: 'group-hover:text-green-500',
  },
  {
    name: 'Express Js',
    icon: SiExpress,
    url: 'https://expressjs.com',
    color: 'group-hover:text-slate-200',
  },
  {
    name: 'MySQL',
    icon: SiMysql,
    url: 'https://www.mysql.com',
    color: 'group-hover:text-sky-600',
  },
  {
    name: 'MongoDB',
    icon: SiMongodb,
    url: 'https://www.mongodb.com',
    color: 'group-hover:text-green-600',
  },
  {
    name: 'Git',
    icon: SiGit,
    url: 'https://git-scm.com',
    color: 'group-hover:text-orange-600',
  },
];

function Technologies() {
  return (
    <section id="technologies" className="mb-16 scroll-mt-24 lg:mb-24">
      <h3 className="text-lg font-medium text-slate-200 mb-4">
        Technologies that I use :
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {technologies.map((tech) => (
          <a
            key={tech.name}
            href={tech.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex items-center gap-3 p-3 rounded-lg bg-slate-900/50 
                        transition-all duration-300 hover:bg-slate-900/75 hover:shadow-lg`}
          >
            <tech.icon
              className={`text-2xl text-slate-500 transition-colors duration-300 ${tech.color} group-hover:scale-110`}
            />
            <span
              className={`text-slate-500 transition-colors duration-300 ${tech.color} group-hover:scale-105`}
            >
              {tech.name}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Technologies;
