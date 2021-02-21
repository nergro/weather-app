import React, { FC, useState, useRef } from 'react';
import debounce from 'lodash/debounce';
import Select from 'react-select';
import { SelectOption } from 'types/SelectOption';
import { Country } from 'types/Country';
import { getCities } from 'services/getFilteredCities';

interface Props {
  countries: Country[];
  onChange: (city: string) => void;
}

export const Search: FC<Props> = ({ countries, onChange }) => {
  const [suggestions, setSuggestions] = useState<SelectOption[]>();

  const getSuggestions = (value: string): void => {
    if (value.length > 3) {
      const cities = getCities(countries, value);

      setSuggestions(cities);
    }
  };

  const debouncedSave = useRef(debounce((nextValue) => getSuggestions(nextValue), 400)).current;

  const onInputChange = (value: string): void => {
    debouncedSave(value);
  };

  const handleChange = (option: SelectOption | null): void => {
    if (option) {
      onChange(option.value);
    }
  };

  return (
    <div className="searchContainer">
      <Select
        options={suggestions}
        classNamePrefix="searchInput"
        className="searchInput"
        placeholder="Type a location"
        onChange={handleChange}
        onInputChange={(value) => onInputChange(value)}
        openMenuOnFocus={false}
        openMenuOnClick={false}
        components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }}
      />
    </div>
  );
};
