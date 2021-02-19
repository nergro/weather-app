import axios from 'axios';
import { Country } from 'types/Country';

interface CountryDataDTO {
  data: Country[];
  error: boolean;
  msg: string;
}

export const getCountries = async (): Promise<Country[]> => {
  const countries = await axios.get<CountryDataDTO>(
    'https://countriesnow.space/api/v0.1/countries'
  );

  return countries.data.data;
};
