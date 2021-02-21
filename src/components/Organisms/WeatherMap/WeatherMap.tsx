import React, { FC } from 'react';
import { Coordinates } from 'types/Coordinates';

interface Props {
  coordinates: Coordinates;
}

export const WeatherMap: FC<Props> = ({ coordinates }) => {
  return (
    <div className="weatherMap">
      <iframe
        width="100%"
        height="100%"
        src={`https://embed.windy.com/embed2.html?lat=${coordinates.lat}&lon=${coordinates.lon}&zoom=20&level=surface&overlay=wind&product=ecmwf&menu=&message=&marker=true&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=m%2Fs&metricTemp=%C2%B0C&radarRange=-1`}
      ></iframe>
    </div>
  );
};
