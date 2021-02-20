export const getFavoriteCities = (): string[] => {
  const cities = localStorage.getItem('cities');

  return cities ? JSON.parse(cities) : [];
};

export const updateFavoriteCities = (city: string): void => {
  const currentCities = getFavoriteCities();

  if (currentCities) {
    const cityInList = currentCities.find((x) => x === city);
    if (cityInList) {
      const filteredCities = currentCities.filter((x) => x !== cityInList);
      localStorage.setItem('cities', JSON.stringify(filteredCities));
    } else {
      const citiesToUpdate = currentCities ? [...currentCities, city] : [city];
      localStorage.setItem('cities', JSON.stringify(citiesToUpdate));
    }
  }
};

export const isCityInFavorites = (city: string): boolean => {
  const currentCities = getFavoriteCities();

  return currentCities.findIndex((x) => x === city) > -1;
};
