import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as TrashBinSVG } from 'assets/icons/trashBin.svg';
import { getFavoriteCities, updateFavoriteCities } from 'services/localStorage';

export const Favorites: FC = () => {
  const [favorites, setFavorites] = useState<string[]>(getFavoriteCities());

  const onRemove = (city: string): void => {
    updateFavoriteCities(city);
    setFavorites(favorites.filter((x) => x !== city));
  };

  return (
    <div className="favoritesContainer">
      <h1>Favorites</h1>
      <div className="favoritesList">
        {favorites.length > 0 ? (
          <ul>
            {favorites.map((x) => (
              <li key={x}>
                <Link to={`/weather/${x}`}>{x}</Link>
                <TrashBinSVG className="favoritesList--removeIcon" onClick={() => onRemove(x)} />
              </li>
            ))}
          </ul>
        ) : (
          <p>List is empty</p>
        )}
      </div>
    </div>
  );
};
