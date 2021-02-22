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
      <nav className="linkList">
        {links.map((x) => (
          <Link key={x.name} to={x.to} className="linkList__link">
            {x.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};
