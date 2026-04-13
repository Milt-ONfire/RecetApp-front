

import { NavLink } from 'react-router-dom';

interface Props {
  href: string;
  title: string;
  subTitle?: string
}


export const SideMenuItem = ({ href, title}: Props) => {
  return (
    <NavLink
      key={ href }
      to={ href }
      end
    >
      <div className="flex flex-col py-3 px-6">
        <span className="text-sm font-bold leading-5">{ title }</span>
      </div>
    </NavLink>
  );
}