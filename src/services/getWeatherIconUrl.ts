const url = 'http://openweathermap.org/img/wn';

type IconSize = '2' | '4';

export const getWeatherIconUrl = (iconId: string, size?: IconSize): string => {
  return `${url}/${iconId}@${size || '4'}x.png`;
};
