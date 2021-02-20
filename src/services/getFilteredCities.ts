import { Country } from 'types/Country';
import { SelectOption } from 'types/SelectOption';

export const getCities = (countries: Country[], value: string, maxCount = 20): SelectOption[] =>
  countries.reduce((acc: SelectOption[], country) => {
    if (acc.length < maxCount) {
      const filteredCities: SelectOption[] = country.cities
        .filter((x) => x.toLowerCase().includes(value.toLowerCase()))
        .map((x) => ({ value: x, label: `${x} (${country.country})` }));

      const result = [...acc, ...filteredCities];
      return result.length > maxCount ? result.slice(0, maxCount) : result;
    } else {
      return acc;
    }
  }, []);
