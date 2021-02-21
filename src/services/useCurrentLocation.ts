import { Coordinates } from 'types/Coordinates';
import { useState, useEffect } from 'react';

const geolocationOptions = {
  timeout: 1000 * 60 * 1,
};

export const useCurrentLocation = (): Coordinates | undefined => {
  const [coordinates, setCoordinates] = useState<Coordinates>();

  useEffect(() => {
    if (!coordinates) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCoordinates({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        () => setCoordinates(undefined),
        geolocationOptions
      );
    }
  }, [coordinates]);

  return coordinates;
};
