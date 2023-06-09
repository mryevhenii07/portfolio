import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

interface Props {
  title: string;
  projectUrl: string;
  backgroundImg: string;
}
const ProjectItem: FC<Props> = ({ title, backgroundImg, projectUrl }) => {
  const { t } = useTranslation();
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
      <img src={backgroundImg} alt="/" className="rounded-xl group-hover:opacity-10" />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">{title}</h3>
        <p className="pb-4 pt-2 text-white text-center">React JS</p>
        <Link to={projectUrl}>
          <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer p-1.5">
            {t('projectItemMore')}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
