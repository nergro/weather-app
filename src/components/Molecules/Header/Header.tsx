import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const links = [
  { name: 'Home', to: '/' },
  { name: 'Countries', to: '/countries' },
  { name: 'Favorites', to: '/favorites' },
];

export const Header: FC = () => {
  return (
    <header className="header">
      <ul className="linkList">
        {links.map((x) => (
          <li key={x.name} className="linkList__item">
            <Link to={x.to} className="linkList__item--link">
              {x.name}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
};
