import React, { FC, useState, useRef } from 'react';
import { debounce } from 'lodash';
import Select from 'react-select';
import { SelectOption } from 'types/SelectOption';
import { Country } from 'types/Country';
import { mapToSelectOptions } from 'services/mapToSelectOptions';

interface Props {
  countries: Country[];
}

export const Search: FC<Props> = ({ countries }) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [suggestions, setSuggestions] = useState<SelectOption[]>(
    mapToSelectOptions(countries.map((x) => x.country))
  );

  const getSuggestions = (value: string): void => {
    if (value.length > 2) {
      const filteredCountries = countries
        .filter((x) => x.country.toLowerCase().includes(value.toLowerCase()))
        .map((x) => x.country);

      setSuggestions(mapToSelectOptions(filteredCountries));
    }
  };

  const debouncedSave = useRef(debounce((nextValue) => getSuggestions(nextValue), 1000)).current;

  const handleChange = (value: string): void => {
    debouncedSave(value);
    setSearchValue(value);
  };

  return (
    <div className="searchContainer">
      <Select
        options={suggestions}
        classNamePrefix="searchInput"
        className="searchInput"
        placeholder="Type a location"
        onInputChange={(value) => handleChange(value)}
      />
    </div>
  );
};
