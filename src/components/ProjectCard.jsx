import { FiArrowUpRight } from 'react-icons/fi';

function ProjectCard({
  title,
  company,
  description,
  tags,
  imageUrl,
  projectUrl,
}) {
  return (
    <a
      href={projectUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group grid grid-cols-1 md:grid-cols-8 gap-4 p-4 rounded-lg 
                 transition-all duration-300 hover:!opacity-100 group-hover/list:opacity-50
                 hover:bg-slate-800/50 hover:shadow-lg"
    >
      <div className="md:col-span-2 mt-1">
        <img
          src={imageUrl}
          alt={`Preview dari proyek ${title}`}
          className="rounded border-2 border-slate-700/50"
        />
      </div>

      <div className="md:col-span-6">
        <div className="flex items-center gap-2 mb-2">
          <h3 className="font-medium text-lg text-slate-200 group-hover:text-sky-400">
            {title}
          </h3>
          <FiArrowUpRight className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
        </div>
        <p className="text-sm font-semibold text-slate-400">{company}</p>
        <p className="mt-2 text-sm text-slate-400">{description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <div
              key={tag}
              className="flex items-center rounded-full bg-sky-900/60 px-3 py-1 text-xs font-medium leading-5 text-sky-300"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </a>
  );
}

export default ProjectCard;
