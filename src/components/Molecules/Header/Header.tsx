import React, { FC } from 'react';
import { Link } from 'react-router-dom';

export const Header: FC = () => {
  return (
    <header className="header">
      <ul className="linkList">
        <li className="linkList__item">
          <Link to="/" className="linkList__item--link">
            Home
          </Link>
        </li>
        <li className="linkList__item">
          <Link to="/countries" className="linkList__item--link">
            Countries
          </Link>
        </li>
      </ul>
    </header>
  );
};
