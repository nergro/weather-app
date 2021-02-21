import React, { FC, useState } from 'react';
import { updateFavoriteCities, isCityInFavorites } from 'services/localStorage';
import { ReactComponent as HeartSvg } from 'assets/icons/heart.svg';
import { CurrentDate } from 'components/Molecules/CurrentDate/CurrentDate';

interface Props {
  name: string;
  timezone: number;
}

export const WeatherLocation: FC<Props> = ({ name, timezone }) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(isCityInFavorites(name));

  const onHeartClick = (): void => {
    updateFavoriteCities(name);
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="weatherlocation">
      <div className="weatherlocationName">
        <p>{name}</p>
        <HeartSvg
          className={`weatherlocationName--heartIcon ${
            isFavorite && 'weatherlocationName--heartIcon__fill'
          }`}
          onClick={onHeartClick}
        />
      </div>
      <CurrentDate timezone={timezone} />
    </div>
  );
};
