import React, { FC, useState, useRef } from 'react';
import { ReactComponent as SearchSVG } from 'assets/icons/search.svg';
import cityList from '../../../data/countries.min.json';
import { debounce } from 'lodash';

export const Search: FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const getSuggestions = (value: string): void => {
    if (value.length > 2) {
      const cities = Object.keys(cityList).filter((key) =>
        key.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(cities);
    } else {
      setSuggestions([]);
    }
  };

  const debouncedSave = useRef(debounce((nextValue) => getSuggestions(nextValue), 1000)).current;

  const handleChange = (value: string): void => {
    // const debouncedSave = debounce(() => getSuggestions(value), 1000);
    debouncedSave(value);
    setSearchValue(value);
  };

  return (
    <div className="searchContainer">
      <div className="search">
        <SearchSVG className="search__icon" />
        <input
          type="text"
          className="search__input"
          placeholder="Type a location"
          value={searchValue}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
      <ul
        className={`suggestions ${
          suggestions.length > 0 ? 'suggestions--show' : 'suggestions--hide'
        }`}
      >
        {suggestions.map((x) => (
          <li key={x} className="suggestion">
            {x}
          </li>
        ))}
      </ul>
    </div>
  );
};
